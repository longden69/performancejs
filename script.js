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
	// console.log(startLayHang);

	setTimeout(() => {
		var xhttp = new XMLHttpRequest();
	  	xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
    			// document.getElementById("show-hang").innerHTML = this.responseText;
    			var arrData = JSON.parse('[' + this.responseText + ']');
    			// document.getElementById("show-hang").innerHTML = '<div><p>' + myArr[0].id + '</p><p>' + myArr[0].name +  '</p><p>' + myArr[0].avatar +'</p><p>' + myArr[0].createdAt + '</p></div><hr>';
		    	// finishLayHang = Date.now();
		    	// console.log((finishLayHang - startLayHang));
		    	// console.log('after', width);
		    	page = 0;
		    	index = 0;
		    	totalPage = arrData.length;
		    	perPage = 1;
					var html = [];
					for (var i = 0; i < totalPage; i++) {
						html.push('<div>Test ' + i + '</div>');
					}
					document.getElementById('show-hang').innerHTML = html.join('');
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
		    }
		};
		xhttp.open("GET", "data.txt", true);
		xhttp.send();
	}, 0);
}
