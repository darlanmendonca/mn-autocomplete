class MnAutocomplete extends MnInput { // eslint-disable-line no-undef
  constructor(self) {
    self = super(self)
    // const dialog = document.createElement('mn-dialog')
    // dialog.id = 'test'
    // console.log(dialog)
    // document.body.appendChild(dialog)
    return self
  }
}

window.customElements.define('mn-autocomplete', MnAutocomplete)
