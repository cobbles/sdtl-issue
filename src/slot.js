/** A reactive controller that determines when slots exist. */
export class HasSlotController {
  constructor(host, ...slotNames) {
    this.host = host;
    this.host.addController(this);
    this.slotNames = slotNames;
    this.handleSlotChange = (event) => {
      const slot = event.target;

      if (
        (this.slotNames.includes('[default]') && !slot.name) ||
        (slot.name && this.slotNames.includes(slot.name))
      ) {
        this.host.requestUpdate();
      }
    };
  }

  hasDefaultSlot() {
    return [...this.host.childNodes].some(node => {
      if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== '') {
        return true;
      }

      if (node.nodeType === node.ELEMENT_NODE) {
        const el = node;
        const tagName = el.tagName.toLowerCase();

        // Ignore visually hidden elements since they aren't rendered
        if (tagName === 'mgo-visually-hidden') {
          return false;
        }

        // If it doesn't have a slot attribute, it's part of the default slot
        if (!el.hasAttribute('slot')) {
          return true;
        }
      }

      return false;
    });
  }

  hasNamedSlot(name) {
    return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
  }

  test(slotName) {
    return slotName === '[default]'
      ? this.hasDefaultSlot()
      : this.hasNamedSlot(slotName);
  }

  hostConnected() {
    this.host.shadowRoot.addEventListener('slotchange', this.handleSlotChange);
  }

  hostDisconnected() {
    this.host.shadowRoot.removeEventListener('slotchange', this.handleSlotChange);
  }
}
