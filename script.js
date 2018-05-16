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
		number = 0;
	  	xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	setInterval(() => {
		    		number ++;
		    		if (number < 10000) {
		    			document.getElementById("show-hang").innerHTML += '<p>this.responseText</p>';
		    		}
		    	}, 15)
		    	
		    	
		    	finishLayHang = Date.now();
		    	console.log((finishLayHang - startLayHang));
		    	console.log('after', width);
		    }
		};
		xhttp.open("GET", "data.txt", true);
		xhttp.send();
	}, 0);
}
