const { contextBridge, ipcRenderer } = require('electron');
const {
  extract_data_from_csv,
} = require('../src/shared/read_questions/read_questions');
filename = '../../2023-24_ISA_Jeopardy_Questions.csv';

contextBridge = exposeInMainWorld('electronAPI', {
  extractCsvData: async (csvPath) => {
    ipcRenderer.on('read:csv', csvPath);
  },
});
