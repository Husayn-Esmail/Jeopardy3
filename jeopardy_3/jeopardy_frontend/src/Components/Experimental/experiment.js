import React from 'react';
// const electron = window.require('electron');
// const remote = electron.remote;
// const { BrowserWindow, dialog, Menu } = remote;

export default function Exp() {
  const func = async () => {
    const response = await window.versions.ping();
    console.log(response);
  };
  return <p>{func()}</p>;
}
