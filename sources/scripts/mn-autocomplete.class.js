class MnAutocomplete extends window.MnInput {
  constructor(self) {
    self = super(self)

    return self
  }
}

window.customElements.define('mn-autocomplete', MnAutocomplete)
