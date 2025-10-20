const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  alert: (message) => alert(message)
});
