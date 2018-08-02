import test from 'ava'
import callable from '../helpers/callable'

test.beforeEach(() => {
  callable.reset()
})

test('can query for DOM elements', t => {
  document.body.innerHTML = '<p>Hello, world</p>'

  const para = document.querySelector('p')

  t.is(para.innerHTML, 'Hello, world')
})
