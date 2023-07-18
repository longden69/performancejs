var i = 0;

// function timedCount() {
//   i = i + 1;
//   postMessage(i);
//   setTimeout("timedCount()", 500);
// }

// timedCount();

self.onmessage = function (e) {
  console.log(e.data); // Tin nhắn này gửi đến worker
  // gửi tin nhắn sang main thread
  self.postMessage("Tin nhắn này gửi đến main thread");
}