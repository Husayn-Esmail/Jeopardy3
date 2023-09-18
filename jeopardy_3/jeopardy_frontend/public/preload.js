const { contextBridge } = require('electron');

contextBridge = exposeInMainWordl('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});
