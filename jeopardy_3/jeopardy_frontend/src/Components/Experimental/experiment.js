import React from 'react';
const electron = window.require('electron');
const remote = electron.remote;
const { BrowserWindow, dialog, Menu } = remote;

export default function exp() {
  return <p>Hello world</p>;
}
