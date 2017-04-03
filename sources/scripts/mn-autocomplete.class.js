class MnAutocomplete extends window.MnChips {
  constructor(self) {
    self = super(self)

    this.input = this.querySelector('input')
    this.select = undefined
    this.menu = this.querySelector('menu')

    this.setMenu()
    this.setOnFocus()

    return self
  }

  setMenu() {
    const values = this.querySelector('.values')
    let options = this
      .querySelector('.values')
      .cloneNode(true)
      .querySelectorAll('mn-option')

    options = Array
      .from(options)
      .map(option => `<option value="${option.getAttribute('value')}">${option.getAttribute('placeholder')}</option>`)

    values.innerHTML = ''

    const select = `<mn-select placeholder="test">${options.join('')}</mn-select>`
    this.insertAdjacentHTML('beforeend', select)

    this.select = this.querySelector('mn-select')
    this.select.container = 'mn-autocomplete'
    console.log(this.select.container)
  }

  setOnFocus() {
    const mobileDevice = screen.width < 768

    this.input.addEventListener('focus', () => {
      if (mobileDevice) {
        const offsetTop = this.input.getBoundingClientRect().top - 20
          + window.pageYOffset
          - document.documentElement.clientTop

        window.scrollTo(0, offsetTop)
        document.body.scrollTop = offsetTop
      }
      this.select.open()
    })
  }
}

window.customElements.define('mn-autocomplete', MnAutocomplete)
