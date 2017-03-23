class MnAutocomplete extends window.MnInput {
  constructor(self) {
    self = super(self)

    this.input = this.querySelector('input')

    this.setOnFocus()

    return self
  }

  setOnFocus() {
    const mobileDevice = screen.width < 768
    if (mobileDevice) {
      this.input.addEventListener('focus', () => {
        const offsetTop = this.input.getBoundingClientRect().top - 20
          + window.pageYOffset
          - document.documentElement.clientTop

        window.scrollTo(0, offsetTop)
        document.body.scrollTop = offsetTop
      })
    }
  }
}

window.customElements.define('mn-autocomplete', MnAutocomplete)
