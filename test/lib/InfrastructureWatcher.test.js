import test from 'ava'
import sinon from 'sinon'
import {InfrastructureWatcher} from '../../src/InfrastructureWatcher'

test('on added dom elements', t => {
  let addedNodeCallback = sinon.fake()
  let removedNodeCallback = sinon.fake()
  InfrastructureWatcher(addedNodeCallback, removedNodeCallback)

  let foo = document.createElement('div')
  foo.textContent = 'foo'

  let container = document.documentElement || document.body
  container.appendChild(foo)

  t.is(document.querySelector('div').innerHTML, 'foo')
})
