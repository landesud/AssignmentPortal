var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
	var nn = d.getDate();
	
	var m = new Array(12);
	
	m[0] = "January";
	m[1] = "February";
	m[2] = "March";
	m[3] = "April";
	m[4] = "May";
	m[5] = "June";
	m[6] = "July";
	m[7] = "August";
	m[8] = "September";
	m[9] = "October";
	m[10] = "November";
	m[11] = "December";
	
	var mm = m[d.getMonth()];
	var y = d.getFullYear();
    document.getElementById("currentdate").innerHTML = n + " , " + nn + " " + mm + " " + y;