class Slider {
  constructor(container, config = {}) {
      // Ініціалізація основних властивостей
      this.container = typeof container === 'string' ? 
          document.querySelector(container) : container;
          this.currentIndex = 0;      // Поточний індекс слайду
          this.isPlaying = false;     // Чи відбувається автопрогравання
          this.isDragging = false;    // Чи відбувається перетягування
          this.startPos = 0;          // Початкова позиція при перетягуванні
          this.currentTranslate = 0;  // Поточне зміщення при анімації
          this.prevTranslate = 0;     // Попереднє зміщення
      
      // Налаштування за замовчуванням
      this.config = {
        autoplay: config.autoplay || false,  // Автопрогравання
        interval: config.interval || 5000,   // Інтервал зміни слайдів (5 сек)
        showIndicators: config.showIndicators !== undefined ? 
            config.showIndicators : true,    // Показувати індикатори
        showNavButtons: config.showNavButtons !== undefined ? 
            config.showNavButtons : true,    // Показувати кнопки навігації
        effect: config.effect || 'fade',     // Ефект зміни слайдів
        pauseOnHover: config.pauseOnHover !== undefined ? 
            config.pauseOnHover : true       // Пауза при наведенні
    };
      
      this.init();
  }
  
  init() {
      // Отримання слайдів
      this.slides = Array.from(
          this.container.querySelectorAll('.slide')
      );
      
      // Встановлення початкового стану
      this.slides.forEach((slide, index) => {
          slide.dataset.index = index;
          if (index === 0) {
              slide.classList.add('active');
          }
      });
      
      // Створення елементів управління
      this.createControls();
      
      // Налаштування обробників подій
      this.setupEventListeners();
      
      // Запуск автопрогравання
      if (this.config.autoplay) {
          this.play();
      }
  }
  
  createControls() {
      // Створення кнопок
      if (this.config.showNavButtons) {
          const prevButton = document.createElement('button');
          prevButton.className = 'slider__prev';
          prevButton.innerHTML = '&#10094;';
          
          const nextButton = document.createElement('button');
          nextButton.className = 'slider__next';
          nextButton.innerHTML = '&#10095;';
          
          this.container.appendChild(prevButton);
          this.container.appendChild(nextButton);
      }
      
      // Створення індикаторів
      if (this.config.showIndicators) {
          const indicators = document.createElement('div');
          indicators.className = 'slider__indicators';
          
          this.slides.forEach((_, index) => {
              const dot = document.createElement('span');
              dot.className = `slider__dot${index === 0 ? ' active' : ''}`;
              dot.dataset.index = index;
              indicators.appendChild(dot);
          });
          
          this.container.appendChild(indicators);
      }
  }
  
  setupEventListeners() {
      // Кнопки навігації
      if (this.config.showNavButtons) {
          this.container.querySelector('.slider__prev')
              .addEventListener('click', () => this.prev());
          this.container.querySelector('.slider__next')
              .addEventListener('click', () => this.next());
      }
      
      // Індикатори
      if (this.config.showIndicators) {
          this.container.querySelector('.slider__indicators')
              .addEventListener('click', (e) => {
                  if (e.target.classList.contains('slider__dot')) {
                      const index = parseInt(e.target.dataset.index);
                      this.goTo(index);
                  }
              });
      }
      
      // Пауза при наведенні
      if (this.config.pauseOnHover) {
          this.container.addEventListener('mouseenter', () => this.pause());
          this.container.addEventListener('mouseleave', () => {
              if (this.config.autoplay) this.play();
          });
      }
      
      // Клавіатурна навігація
      document.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') this.prev();
          if (e.key === 'ArrowRight') this.next();
      });
      
      // Тач-пад
      this.setupTouchEvents();
  }
  
  setupTouchEvents() {
      this.container.addEventListener('touchstart', (e) => {
          this.startPos = e.touches[0].clientX;
          this.isDragging = true;
          this.pause();
      });
      
      this.container.addEventListener('touchmove', (e) => {
          if (!this.isDragging) return;
          
          const currentPosition = e.touches[0].clientX;
          const diff = currentPosition - this.startPos;
          
          if (Math.abs(diff) > 50) { // Мінімальний поріг для свайпу
              if (diff > 0) {
                  this.prev();
              } else {
                  this.next();
              }
              this.isDragging = false;
          }
      });
      
      this.container.addEventListener('touchend', () => {
          this.isDragging = false;
          if (this.config.autoplay) this.play();
      });
  }
  
  next() {
      const nextIndex = (this.currentIndex + 1) % this.slides.length;
      this.goTo(nextIndex);
  }
  
  prev() {
      const prevIndex = (this.currentIndex - 1 + this.slides.length) % 
          this.slides.length;
      this.goTo(prevIndex);
  }
  
  goTo(index) {
      // Видалення активного класу з поточного слайду
      this.slides[this.currentIndex].classList.remove('active');
      
      // Додавання активного класу до нового слайду
      this.slides[index].classList.add('active');
      
      // Оновлення індикаторів
      if (this.config.showIndicators) {
          const dots = this.container
              .querySelectorAll('.slider__dot');
          dots[this.currentIndex].classList.remove('active');
          dots[index].classList.add('active');
      }
      
      this.currentIndex = index;
  }
  
  play() {
      if (!this.isPlaying) {
          this.isPlaying = true;
          this.slideInterval = setInterval(() => this.next(), 
              this.config.interval);
      }
  }
  
  pause() {
      if (this.isPlaying) {
          this.isPlaying = false;
          clearInterval(this.slideInterval);
      }
  }
}
  // Ініціалізація слайдера
  document.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.slider__container', {
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        effect: 'fade'
    });
  });


  