export default class CircularText {

  constructor(elemId, radius, params = {}) {
    this.elemId = elemId;
    this.radius = radius;
    this.params = params;
    this.elem = document.getElementById(this.elemId);
    this.elemText = this.elem.textContent.split('');
    this.elemTextLenght = this.elemText.length;

    this.deg = this.setDegrees();
    this.origin = this.setOrigin();

    this.roundingText();
  }

  setDegrees() {
    if(this.params.deg) return this.params.deg;
    else return 360 / this.elemTextLenght;
  }

  setOrigin() {
    if(this.params.origin)
      return this.params.origin - this.deg * this.elemTextLenght;
    else return -this.deg * this.elemTextLenght / 2;
  }

  clearElemHTML() {
    this.elem.innerHTML = '';
  }

  createParagraphElem(letter) {
    let pElem = document.createElement('p');
    pElem.classList = 'rounded-item';
    pElem.textContent = letter;
    pElem.style.height = this.radius + 'px';
    pElem.style.transform = `rotate(${this.origin}deg)`;
    return pElem;
  }

  increaseOrigin() {
    this.origin += this.deg;
  }

  roundingText() {
    this.clearElemHTML();
    this.elemText.forEach(letter => {
      this.elem.appendChild(this.createParagraphElem(letter));
      this.increaseOrigin();
    });
  }

}