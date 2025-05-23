document.addEventListener('DOMContentLoaded', () => {

    class GameModel {
      constructor(numHoles = 12, maxMoles = 3) {
        this.numHoles = numHoles;
        this.maxMoles = maxMoles;
        this.reset();
      }
  
      reset() {
        this.holes = Array.from({ length: this.numHoles }, () => ({
          hasMole: false,
          moleTimeout: null,
          hasSnake: false
        }));
        this.score = 0;
        this.timeLeft = 0;
        this.currentSnake = null;
        clearInterval(this.moleInterval);
        clearInterval(this.snakeInterval);
        clearInterval(this.timerInterval);
        this.holes.forEach(h => clearTimeout(h.moleTimeout));
      }
  
      spawnMole() {
        const active = this.holes.filter(h => h.hasMole).length;
        if (active >= this.maxMoles) return;
        const emptyIdxs = this.holes.map((h,i) => h.hasMole ? -1 : i).filter(i=>i>=0);
        if (!emptyIdxs.length) return;
        const idx = emptyIdxs[Math.floor(Math.random() * emptyIdxs.length)];
        this.holes[idx].hasMole = true;
        return idx;
      }
  
      hideMole(idx) {
        this.holes[idx].hasMole = false;
        clearTimeout(this.holes[idx].moleTimeout);
        this.holes[idx].moleTimeout = null;
      }
  
      spawnSnake() {
        if (this.currentSnake !== null) {
          this.holes[this.currentSnake].hasSnake = false;
        }
        const idx = Math.floor(Math.random() * this.numHoles);
        this.holes[idx].hasSnake = true;
        this.currentSnake = idx;
        return idx;
      }
  
      clearAll() {
        this.holes.forEach((h,i) => {
          h.hasMole = false;
          clearTimeout(h.moleTimeout);
          h.hasSnake = false;
        });
        this.currentSnake = null;
      }
  
      stopAll() {
        clearInterval(this.moleInterval);
        clearInterval(this.snakeInterval);
        clearInterval(this.timerInterval);
        this.holes.forEach(h => clearTimeout(h.moleTimeout));
      }
    }
  
    class GameView {
      constructor(model) {
        this.model = model;
        this.boardEl = document.getElementById('board');
        this.scoreEl = document.getElementById('score');
        this.timerEl = document.getElementById('timer');
        this.startBtn = document.getElementById('start-button');
        this._renderBoard();
      }
  
      _renderBoard() {
        this.boardEl.innerHTML = '';
        for (let i = 0; i < this.model.numHoles; i++) {
          const hole = document.createElement('div');
          hole.className = 'hole';
          hole.dataset.index = i;
          const mole = document.createElement('img');
          mole.src = 'mole.png';
          mole.alt = 'Mole';
          mole.className = 'mole';
          hole.appendChild(mole);
          const snake = document.createElement('img');
          snake.src = 'snake.png';
          snake.alt = 'Snake';
          snake.className = 'snake';
          hole.appendChild(snake);
  
          this.boardEl.appendChild(hole);
        }
      }
  
      updateScore(s) { this.scoreEl.textContent = s; }
      updateTimer(t) { this.timerEl.textContent = t; }
  
      showMole(i) {
        this._getMoleImg(i).classList.add('visible');
      }
      hideMole(i) {
        this._getMoleImg(i).classList.remove('visible');
      }
      showSnake(i) {
        this._getSnakeImg(i).classList.add('visible');
      }
      hideSnake(i) {
        this._getSnakeImg(i).classList.remove('visible');
      }
      showAllSnakes() {
        this.model.holes.forEach((h, i) => this.showSnake(i));
      }
      clearBoard() {
        this.model.holes.forEach((h, i) => {
          this.hideMole(i);
          this.hideSnake(i);
        });
      }
  
      _getMoleImg(i) {
        return this.boardEl.querySelector(`.hole[data-index='${i}'] img.mole`);
      }
      _getSnakeImg(i) {
        return this.boardEl.querySelector(`.hole[data-index='${i}'] img.snake`);
      }
    }
  
    class GameController {
      constructor(model, view) {
        this.model = model;
        this.view = view;
  
        this.view.startBtn.addEventListener('click', () => this.startGame());
        this.view.boardEl.addEventListener('click', e => this._onHoleClick(e));
      }
  
      startGame() {
        this.model.reset();
        this.view.clearBoard();
        this.model.score = 0;
        this.view.updateScore(0);
        this.model.timeLeft = 30;
        this.view.updateTimer(30);
  
        this.model.timerInterval = setInterval(() => {
          this.model.timeLeft--;
          this.view.updateTimer(this.model.timeLeft);
          if (this.model.timeLeft <= 0) {
            this.model.stopAll();
            alert('Time is Over !');
          }
        }, 1000);
  
        this.model.moleInterval = setInterval(() => {
          const idx = this.model.spawnMole();
          if (idx !== undefined) {
            this.view.showMole(idx);
            const t = setTimeout(() => {
              if (this.model.holes[idx].hasMole) {
                this.model.hideMole(idx);
                this.view.hideMole(idx);
              }
            }, 2000);
            this.model.holes[idx].moleTimeout = t;
          }
        }, 1000);
  
        this.model.snakeInterval = setInterval(() => {
          if (this.model.currentSnake !== null) {
            this.view.hideSnake(this.model.currentSnake);
          }
          const idx = this.model.spawnSnake();
          this.view.showSnake(idx);
        }, 2000);
      }
  
      _onHoleClick(e) {
        const hole = e.target.closest('.hole');
        if (!hole) return;
        const idx = +hole.dataset.index;
  
        if (this.model.holes[idx].hasSnake) {
          this.model.stopAll();
          this.view.clearBoard();
          this.view.showAllSnakes();
          return;
        }
  
        if (this.model.holes[idx].hasMole) {
          this.model.score++;
          this.view.updateScore(this.model.score);
          this.model.hideMole(idx);
          this.view.hideMole(idx);
        }
      }
    }
  
    const model = new GameModel();
    const view  = new GameView(model);
    new GameController(model, view);
  });
  