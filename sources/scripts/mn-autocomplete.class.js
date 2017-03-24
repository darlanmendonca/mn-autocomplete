class MnAutocomplete extends window.MnChips {
  constructor(self) {
    self = super(self)

    this.input = this.querySelector('input')
    this.menu = this.querySelector('menu')

    this.setFilter()
    this.setOnFocus()
    this.setValidate()

    return self
  }

  setFilter() {
    this.input.addEventListener('keyup', () => {
      const value = this.input.value
      const options = Array.from(this.menu.querySelectorAll('.mn-option'))
      if (value) {
        options.forEach(option => {
          const matchOption = testRegex(value, option.textContent)
          matchOption
            ? option.classList.remove('hidden')
            : option.classList.add('hidden')
        })
      } else {
        this.menu.querySelectorAll('.mn-option.hidden').forEach(option => option.classList.remove('hidden'))
      }
    })

    this.input.addEventListener('blur', () => {
      this.menu
        .querySelectorAll('.mn-option.hidden')
        .forEach(option => option.classList.remove('hidden'))

      this.menu.scrollTop = 0
    })

    function testRegex(search, value) {
      const reg = new RegExp(search.split('').join('.*'), 'i')
      return reg.test(value)
    }
  }

  setValidate() {
    this.validateChip = validateChip

    function validateChip() {
      return false
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
