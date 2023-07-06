var chayNgayDi = document.getElementById("chay-ngay-di");

width = 0;
flag = 1;

var cc = setInterval(() => {
	chayNgayDi.style.marginLeft = width + 'px';
	chayNgayDi.style.background = 'green';
	if (flag === 1) {
		width++;
	} else {
		width--;
	}
	if (width === (window.innerWidth - 120)) {
		flag = 0;
	} else if(width === 0) {
		flag = 1;
	}
}, 16);

function showHang() {
	startLayHang = Date.now()
	console.log('before', width);


	// Register WebWorker
	var worker = new SharedWorker('basic-worker.js');
	worker.port.onmessage = function(e) {
		console.log('counter', e.data.counter);
		console.log('yolo', e.data.yolo);
		document.getElementById('show-hang').innerHTML = e.data.message;
	};

	setTimeout(() => {
		var xhttp = new XMLHttpRequest();
	  	xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
    			// getData
    			var arrData = JSON.parse('[' + this.responseText + ']');

					// Solution: only use one append
		    	// page = 0;
		    	// index = 0;
		    	// totalPage = arrData.length;
		    	// perPage = 1;
					// var html = [];
					// for (var i = 0; i < totalPage; i++) {
					// 	html.push('<div>' + arrData[i].name + '</div>');
					// }
					// document.getElementById('show-hang').innerHTML = html.join('');

					// Using web worker
					worker.port.postMessage(arrData);

					// Bad solution fully queue
					// page = 0;
		    	// index = 0;
		    	// totalPage = arrData.length;
		    	// perPage = 1;
		    	// var showHang = setInterval(() => {
		    	// 	for (let  i = 0; i < perPage; i++) {
		    	// 		console.log(index++);
		    	// 		itemIndex = page * perPage + i;
		    	// 		document.getElementById("show-hang").innerHTML += '<div><p>' + arrData[itemIndex].id + '</p><p>' + arrData[itemIndex].name + '</p></div><hr>';
		    	// 	}
		    	// 	page ++;

		    	// 	if (page === 200) {
		    	// 		clearInterval(showHang);
		    	// 	}
		    	// }, 20);
					console.log('after', width);
		    }
		};
		xhttp.open("GET", "data.txt", true);
		xhttp.send();
	}, 0);
}
