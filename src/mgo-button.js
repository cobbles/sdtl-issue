export class MgoButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const btn = document.createElement('button');
    const slot = document.createElement('slot');
    btn.appendChild(slot);
    shadow.appendChild(btn);
  }
}
customElements.define('mgo-button', MgoButton);

