const { contextBridge } = require('electron')
const path = require('path')

contextBridge.exposeInMainWorld('electronAPI', {
  getAssetPath: (...paths) => path.join(__dirname, 'assets', ...paths)
})