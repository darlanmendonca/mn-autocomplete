class MnAutocomplete extends MnInput { // eslint-disable-line no-undef
  constructor(self) {
    self = super(self)
    return self
  }
}

window.customElements.define('mn-autocomplete', MnAutocomplete)
