/**
 * AnalogClock class for creating and managing SVG-based analog clocks
 * with smooth animations and digital display
 */
class AnalogClock {
  constructor(containerId, options = {}) {
    this.containerId = containerId;
    this.options = {
      size: 200,
      showDigital: true,
      showSeconds: true,
      smoothAnimation: true,
      ...options
    };

    this.svg = null;
    this.hourHand = null;
    this.minuteHand = null;
    this.secondHand = null;
    this.digitalDisplay = null;
    this.questionInfo = null;

    this.currentTime = new Date();
    this.animationFrame = null;

    this.init();
  }

  init() {
    this.createSVG();
    this.createClockFace();
    this.createHands();
    if (this.options.showDigital) {
      this.createDigitalDisplay();
    }
    this.createQuestionInfo();
    this.updateTime();
    this.startClock();
  }

  createSVG() {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error(`Container with id "${this.containerId}" not found`);
      return;
    }

    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttribute('class', 'analog-clock-svg');
    this.svg.setAttribute('width', this.options.size);
    this.svg.setAttribute('height', this.options.size);
    this.svg.setAttribute('viewBox', '0 0 200 200');

    container.appendChild(this.svg);
  }

  createClockFace() {
    // Clock face
    const face = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    face.setAttribute('class', 'clock-face');
    face.setAttribute('cx', '100');
    face.setAttribute('cy', '100');
    face.setAttribute('r', '95');
    this.svg.appendChild(face);

    // Hour marks
    const hourMarks = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    hourMarks.setAttribute('class', 'hour-marks');

    for (let i = 0; i < 12; i++) {
      const angle = (i * 30) - 90;
      const x1 = 100 + 75 * Math.cos(angle * Math.PI / 180);
      const y1 = 100 + 75 * Math.sin(angle * Math.PI / 180);
      const x2 = 100 + 85 * Math.cos(angle * Math.PI / 180);
      const y2 = 100 + 85 * Math.sin(angle * Math.PI / 180);

      const mark = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      mark.setAttribute('x1', x1);
      mark.setAttribute('y1', y1);
      mark.setAttribute('x2', x2);
      mark.setAttribute('y2', y2);
      hourMarks.appendChild(mark);
    }
    this.svg.appendChild(hourMarks);

    // Minute marks
    const minuteMarks = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    minuteMarks.setAttribute('class', 'minute-marks');

    for (let i = 0; i < 60; i++) {
      if (i % 5 !== 0) { // Skip hour marks
        const angle = (i * 6) - 90;
        const x1 = 100 + 80 * Math.cos(angle * Math.PI / 180);
        const y1 = 100 + 80 * Math.sin(angle * Math.PI / 180);
        const x2 = 100 + 85 * Math.cos(angle * Math.PI / 180);
        const y2 = 100 + 85 * Math.sin(angle * Math.PI / 180);

        const mark = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        mark.setAttribute('x1', x1);
        mark.setAttribute('y1', y1);
        mark.setAttribute('x2', x2);
        mark.setAttribute('y2', y2);
        minuteMarks.appendChild(mark);
      }
    }
    this.svg.appendChild(minuteMarks);

    // Hour numbers
    for (let i = 1; i <= 12; i++) {
      const angle = (i * 30) - 90;
      const x = 100 + 60 * Math.cos(angle * Math.PI / 180);
      const y = 100 + 60 * Math.sin(angle * Math.PI / 180);

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('class', 'hour-text');
      text.setAttribute('x', x);
      text.setAttribute('y', y + 5);
      text.setAttribute('text-anchor', 'middle');
      text.textContent = i;
      this.svg.appendChild(text);
    }
  }

  createHands() {
    // Hour hand
    this.hourHand = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    this.hourHand.setAttribute('class', 'clock-hand hour-hand');
    this.hourHand.setAttribute('x1', '100');
    this.hourHand.setAttribute('y1', '100');
    this.hourHand.setAttribute('x2', '100');
    this.hourHand.setAttribute('y2', '55');
    this.svg.appendChild(this.hourHand);

    // Minute hand
    this.minuteHand = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    this.minuteHand.setAttribute('class', 'clock-hand minute-hand');
    this.minuteHand.setAttribute('x1', '100');
    this.minuteHand.setAttribute('y1', '100');
    this.minuteHand.setAttribute('x2', '100');
    this.minuteHand.setAttribute('y2', '35');
    this.svg.appendChild(this.minuteHand);

    // Second hand
    if (this.options.showSeconds) {
      this.secondHand = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      this.secondHand.setAttribute('class', 'clock-hand second-hand');
      this.secondHand.setAttribute('x1', '100');
      this.secondHand.setAttribute('y1', '100');
      this.secondHand.setAttribute('x2', '100');
      this.secondHand.setAttribute('y2', '25');
      this.svg.appendChild(this.secondHand);
    }

    // Center dot
    const center = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    center.setAttribute('class', 'clock-center');
    center.setAttribute('cx', '100');
    center.setAttribute('cy', '100');
    center.setAttribute('r', '4');
    this.svg.appendChild(center);
  }

  createDigitalDisplay() {
    const container = document.getElementById(this.containerId);
    this.digitalDisplay = document.createElement('div');
    this.digitalDisplay.className = 'digital-display';
    this.digitalDisplay.innerHTML = `
      <span class="hours">00</span>
      <span class="time-colon">:</span>
      <span class="minutes">00</span>
      ${this.options.showSeconds ? '<span class="time-colon">:</span><span class="seconds">00</span>' : ''}
    `;
    container.appendChild(this.digitalDisplay);
  }

  createQuestionInfo() {
    const container = document.getElementById(this.containerId);
    this.questionInfo = document.createElement('div');
    this.questionInfo.className = 'clock-question-info';
    this.questionInfo.innerHTML = `
      <div class="question-type">Clock Question</div>
      <div class="question-prompt">What time is shown on the clock?</div>
    `;
    container.appendChild(this.questionInfo);
  }

  updateTime() {
    this.currentTime = new Date();

    const hours = this.currentTime.getHours() % 12;
    const minutes = this.currentTime.getMinutes();
    const seconds = this.currentTime.getSeconds();

    // Calculate angles
    const hourAngle = (hours * 30) + (minutes * 0.5);
    const minuteAngle = minutes * 6;
    const secondAngle = seconds * 6;

    // Update hands
    this.setHandAngle(this.hourHand, hourAngle);
    this.setHandAngle(this.minuteHand, minuteAngle);
    if (this.secondHand) {
      this.setHandAngle(this.secondHand, secondAngle);
    }

    // Update digital display
    if (this.digitalDisplay) {
      const displayHours = String(this.currentTime.getHours()).padStart(2, '0');
      const displayMinutes = String(minutes).padStart(2, '0');
      const displaySeconds = String(seconds).padStart(2, '0');

      this.digitalDisplay.querySelector('.hours').textContent = displayHours;
      this.digitalDisplay.querySelector('.minutes').textContent = displayMinutes;
      if (this.options.showSeconds) {
        this.digitalDisplay.querySelector('.seconds').textContent = displaySeconds;
      }
    }
  }

  setHandAngle(hand, angle) {
    if (this.options.smoothAnimation) {
      hand.style.transform = `rotate(${angle}deg)`;
    } else {
      hand.setAttribute('transform', `rotate(${angle} 100 100)`);
    }
  }

  setTime(hours, minutes, seconds = 0) {
    // Set specific time for questions
    const hourAngle = (hours % 12 * 30) + (minutes * 0.5);
    const minuteAngle = minutes * 6;
    const secondAngle = seconds * 6;

    this.setHandAngle(this.hourHand, hourAngle);
    this.setHandAngle(this.minuteHand, minuteAngle);
    if (this.secondHand) {
      this.setHandAngle(this.secondHand, secondAngle);
    }

    // Update digital display
    if (this.digitalDisplay) {
      const displayHours = String(hours).padStart(2, '0');
      const displayMinutes = String(minutes).padStart(2, '0');
      const displaySeconds = String(seconds).padStart(2, '0');

      this.digitalDisplay.querySelector('.hours').textContent = displayHours;
      this.digitalDisplay.querySelector('.minutes').textContent = displayMinutes;
      if (this.options.showSeconds) {
        this.digitalDisplay.querySelector('.seconds').textContent = displaySeconds;
      }
    }
  }

  setQuestionInfo(type, prompt) {
    if (this.questionInfo) {
      this.questionInfo.querySelector('.question-type').textContent = type;
      this.questionInfo.querySelector('.question-prompt').textContent = prompt;
    }
  }

  startClock() {
    this.updateTime();
    this.animationFrame = requestAnimationFrame(() => this.startClock());
  }

  stopClock() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  destroy() {
    this.stopClock();
    const container = document.getElementById(this.containerId);
    if (container) {
      container.innerHTML = '';
    }
  }

  // Static method for global access
  static create(containerId, options) {
    return new AnalogClock(containerId, options);
  }

  // Method to set time from string (e.g., "14:30:45")
  setTimeFromString(timeString) {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    this.setTime(hours, minutes, seconds);
  }
}

// Global function for backward compatibility
window.AnalogClock = AnalogClock;