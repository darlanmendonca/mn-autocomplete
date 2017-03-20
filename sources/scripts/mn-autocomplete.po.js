import {Selector as querySelector} from 'testcafe'

module.exports = PageObject

function PageObject() {
  const autocomplete = querySelector('mn-autocomplete')

  return {
    autocomplete,
  }
}
