// Create shared worker.
// https://stackoverflow.com/questions/61865890/run-websocket-in-web-worker-or-service-worker-javascript
const webSocketWorker = new SharedWorker('web-sockets-worker.js');

/**
 * Sends a message to the worker and passes that to the Web Socket.
 * @param {any} message 
 */
const sendMessageToSocket = message => {
  webSocketWorker.port.postMessage({ 
    action: 'send', 
    value: message,
  });
};

// Event to listen for incoming data from the worker and update the DOM.
webSocketWorker.port.addEventListener('message', ({ data }) => {
  requestAnimationFrame(() => {
    appendGatePublicTickersData(data);
  });
});
  
// Initialize the port connection.
webSocketWorker.port.start();

// Remove the current worker port from the connected ports list.
// This way your connectedPorts list stays true to the actual connected ports, 
// as they array won't get automatically updated when a port is disconnected.
window.addEventListener('beforeunload', () => {
  webSocketWorker.port.postMessage({ 
    action: 'unload', 
    value: null,
  });

  webSocketWorker.port.close();
});