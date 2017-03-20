import chai from 'chai'
import {expect} from 'chai'
import chaiAsPromised from 'chai-as-promised'
import chaiDom from 'chai-dom'
import MnAutocompletePageObject from './mn-autocomplete.po.js'

chai
  .use(chaiDom)
  .use(chaiAsPromised)

let autocomplete

fixture `autocomplete`
  .page('http://localhost:8080/docs/demo.html')
  .beforeEach(page => {
    autocomplete = new MnAutocompletePageObject(page)
  })

  test('test', () => {
    console.log(autocomplete)
    expect(true).to.be.true
  })
