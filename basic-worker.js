var counter = 0;
var connections = [];

onconnect = function(eConn) {
  var port = eConn.ports[0];

  port.onmessage = function(eMsg) {
    console.log('test worker');
    counter++;

    for (var i=0; i < connections.length; i++) {
      page = 0;
      index = 0;
      totalPage = eMsg.data.length;
      perPage = 1;
      // Solution
      var html = [];
      for (var i2 = 0; i2 < totalPage; i2++) {
        html.push('<div>' + eMsg.data[i2].name + '</div>');
      }

      connections[i].postMessage({
          message: html.join(''),
          counter: counter,
          yolo: 'hehe'
      });
    }

    postMessage(html.join(''));
  }

  port.start();
  connections.push(port)
}