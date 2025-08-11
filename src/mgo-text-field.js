export class MgoTextField extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.className = 'form-control';

    const label = document.createElement('label');
    label.setAttribute('aria-hidden', 'true');
    label.setAttribute('hidden', 'true');
    label.htmlFor = 'MyForm__name';

    const labelSlot = document.createElement('slot');
    labelSlot.name = 'label';
    label.appendChild(labelSlot);

    const input = document.createElement('input');
    input.id = 'MyForm__name';

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    shadow.appendChild(wrapper);
  }
}
customElements.define('mgo-text-field', MgoTextField);

