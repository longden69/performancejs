var chayNgayDi = document.getElementById("chay-ngay-di");

width = 0;
flag = 1;
setInterval(() => {
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
}, 1000);
