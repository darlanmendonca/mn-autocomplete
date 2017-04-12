class MnAutocomplete extends window.MnChips {
  constructor(self) {
    self = super(self)

    this.input = this.querySelector('input')
    this.select = undefined
    this.menu = this.querySelector('menu')
    this.validateChip = this.hasValidOption

    this.setMenu()
    this.setFilter()
    this.setOnFocus()

    return self
  }

  transformValue(value) {
    if (this.select) {
      const option = this.select.querySelector('.mn-select-option.focus:not(.hidden)')
      value = option
        ? option.getAttribute('value')
        : value
    }
    return value
  }

  transformPlaceholder(placeholder) {
    if (this.select) {
      const option = this.select.querySelector('.mn-select-option.focus:not(.hidden)')
      placeholder = option
        ? option.textContent
        : placeholder
    }
    return placeholder
  }

  hasValidOption() {
    const optionFocused = this.select.querySelector('.mn-select-option.focus:not(.hidden)')
    return Boolean(optionFocused)
  }

  setFilter() {
    this.input.addEventListener('keyup', (event) => {
      if (event.key === 'Escape') {
        this.input.value = ''
      }

      if (this.input.value && this.select.filter !== this.input.value) {
        this.select.filter = this.input.value
      }
    })
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

    this.input.addEventListener('keydown', () => {
      !this.select.classList.contains('visible')
        ? this.select.open()
        : null
    })
  }
}

window.customElements.define('mn-autocomplete', MnAutocomplete)
