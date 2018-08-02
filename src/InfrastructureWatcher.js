import MutationObserver from 'mutation-observer'

export const InfrastructureWatcher = function (addedNodeCallback, removedNodeCallback) {
  let observer = new MutationObserver(function (mutations) {
    console.log('has mutations');
    mutations.forEach(function (mutation) {
      console.log('mutated');
      mutation.addedNodes.forEach(function (addedNode) {
        addedNodeCallback(addedNode)
      })
    })
  })
  let container = document.documentElement || document.body

  observer.observe(container, {attributes: true, childList: true, characterData: true})
}

