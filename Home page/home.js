

function chng() {
	var a = document.getElementById('upcars').value;
	var b = document.getElementById('upcarimgid');
	var c = document.getElementById('text');
	var d = document.getElementById('text1');
	var e = document.getElementById('upcarfnt2');


if(a=="1"){
	b.src="eoe.jpg";
	c.innerHTML = "The New 2023";
	d.innerHTML = "EQE SUV";
	e.innerHTML = "The electric allrounder for the year";
}
else if(a=="2"){
    b.src = "eqeamg.jpg";
    c.innerHTML = "The New 2024";
    d.innerHTML = "AMG EQE SUV"
    e.innerHTML = "EQE SUV. AMG Power. Design at sleek";
        }

else if(a=="3"){
	b.src="camg.jpg";
	c.innerHTML = "The New 2024";
	d.innerHTML = "AMG C 63 S"
	e.innerHTML = "Power leashing beast on the roads";
}
}