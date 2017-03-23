class MnAutocomplete extends window.MnInput {
  constructor(self) {
    self = super(self)

    this.input = this.querySelector('input')

    // this.setMobileDialog()
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

  // setMobileDialog() {
  //   const mobileDevice = screen.width < 768
  //   let dialog// = document.querySelector('mn-dialog')
  //   let input// = dialog.querySelector('input')

  //   if (mobileDevice) {
  //     buildDialog()

  //     this.input.style.pointerEvents = 'none'
  //     this.addEventListener('click', () => {
  //       dialog.open()
  //       window.setTimeout(() => input.focus(), 220)
  //     })
  //   }

  //   function buildDialog() {
  //     dialog = document.createElement('mn-dialog')
  //     const dialogContent = dialog.querySelector('.mn-card')
  //     const row = document.createElement('div')
  //     row.classList.add('mn-layout-row')

  //     input = document.createElement('mn-input')
  //     input.classList.add('flex')
  //     input.setAttribute('placeholder', 'test')

  //     row.appendChild(input)
  //     dialogContent.append(row)
  //     document.body.appendChild(dialog)
  //   }
  // }
}

window.customElements.define('mn-autocomplete', MnAutocomplete)
