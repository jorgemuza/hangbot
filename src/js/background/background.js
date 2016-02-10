// Imports
import chromeStorage from '../lib/chrome-storage';
import backgroundWorker from './classes/backgroundWorker.js';
import startListener from './classes/startListener.js';
import stopListener from './classes/stopListener.js';

// Instantiate new classes
const ChromeStorage = new chromeStorage();
const StopListener   = new stopListener(ChromeStorage);
const StartListener = new startListener(ChromeStorage, StopListener);

// Set startListener in StopListener class.
StopListener.startListener = StartListener;

// Set debug
ChromeStorage.debug = false;

// initialize background
const BGWorker = new backgroundWorker(
  ChromeStorage,
  StartListener,
  StopListener
);

// Start the background worker
BGWorker.initialize();
