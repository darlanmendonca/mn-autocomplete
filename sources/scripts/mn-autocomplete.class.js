class MnAutocomplete extends window.MnChips {
  constructor(self) {
    self = super(self)

    this.input = this.querySelector('input')
    this.menu = this.querySelector('menu')

    this.setOnFocus()
    this.setValidate()

    return self
  }

  setValidate() {
    this.validateChip = validateChip
    const menu = this.menu

    function validateChip(value) {
      console.log(value)
      console.log(menu)
      return true
    }
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
