import test from 'ava'
import sinon from 'sinon'
import {InfrastructureWatcher} from '../../src/InfrastructureWatcher'

test('should call removedNodesCallback', t => {
  let addedNodesCallback = sinon.fake()
  let removedNodesCallback = sinon.fake()
  InfrastructureWatcher(addedNodesCallback, removedNodesCallback)
  t.true(removedNodesCallback.called)
})
