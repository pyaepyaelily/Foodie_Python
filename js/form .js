//function save(dialog) {
//			for (var i=0; i<form1.elements.length-2; i++){
//			localStorage.setItem(form1.elements[i].name,form1.elements[i].value);
//			}
//		dialog.dismiss();
//	return false;
//}

function gettime() {
	var ttime = document.getElementById("timee").value;
	localStorage.setItem("time", ttime);
	var mmonth = document.getElementById("monthh").value;
	localStorage.setItem("month", mmonth);
	var dday = document.getElementById("dayy").value;
	localStorage.setItem("day", dday);
	var hospital = localStorage.getItem("hospital");
	var totalinfo = hospital + dday + mmonth + ttime;
	document.getElementById("qrtext").value = totalinfo;
    $('#text').attr('src', totalinfo);
		var abc123 = $('#qrtext').val()
		var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + abc123 + '&amp;size=500x500';
		document.getElementById("barcode").src = url;
}

function compiler() {
	var hospital = localStorage.getItem("hospital");
	var day = localStorage.getItem("day");
	var month = localStorage.getItem("month");
	var time = localStorage.getItem("time");
	var totalinfo = hospital + day + month + time;
	localStorage.setItem("totalinfo",totalinfo);
}

function checknric() {
	var inputnric = document.getElementById("NRIClogin").value;
	var inputname = document.getElementById("name").value;
	var inputcontact = document.getElementById("contact").value;
	var inputemail = document.getElementById("email").value;
	inputnric = inputnric.toUpperCase();
	localStorage.setItem("NRIClogin", inputnric);
	localStorage.setItem("name", inputname);
	localStorage.setItem("contact", inputcontact);
	localStorage.setItem("email", inputemail);
}


window.onload = function displayNRIC() {
    var currentuser = localStorage.getItem("name");
	document.getElementById("nric_name").innerHTML = currentuser;
};

function selection_of_hospital() { 
    var currenthospital = document.getElementById("hospitalnclinic").value;
    var namehospital = ["Alexandra Hospital",
                        "Changi General Hospital",
                        "Institute of Metal Health",
                        "Kandang Kerbau Hospital",
                        "Khoo Teck Puat Hospital",
                        "National University Hospital",
                        "Singapore Generaal Hospital",
                        "Tan Tock Seng Hospital",
                        "Ang Mo Kio Polyclinics",
                        "Bukit Batok Polyclinics",
                        "Choa Chu Kang Polyclinics",
                        "Clementi Polyclinics",
                        "Hougang Polyclinics",
                        "Jurong Polyclinics",
                        "Toa Payoh Polyclinics",
                        "Woodlands Polyclinics",
                        "Yishun Polyclinics",
                        "Bedok SingHealth Polyclinics",
                        "Bukit Merah SingHealth Polyclinics",
                        "Geylang SingHealth Polyclinics",
                        "Marine SingHealth Polyclinics",
                        "Outram SingHealth Polyclinics",
                        "Pasir Ris SingHealth Polyclinics",
                        "Queenstown SingHealth Polyclinics",
                        "Sengkang SingHealth Polyclinics",
                        "Tampines SingHealth Polyclinics"
                       ];
           if (currenthospital == "01") {
        namehospital = namehospital[0];
    } else if (currenthospital == "02") {
        namehospital = namehospital[1];
    } else if (currenthospital == "02") {
        namehospital = namehospital[1];
    } else if (currenthospital == "03") {
        namehospital = namehospital[2];
    } else if (currenthospital == "04") {
        namehospital = namehospital[3];
    } else if (currenthospital == "05") {
        namehospital = namehospital[4];
    } else if (currenthospital == "06") {
        namehospital = namehospital[5];
    } else if (currenthospital == "07") {
        namehospital = namehospital[6];
    } else if (currenthospital == "08") {
        namehospital = namehospital[7];
    } else if (currenthospital == "11") {
        namehospital = namehospital[8];
    } else if (currenthospital == "12") {
        namehospital = namehospital[9];
    } else if (currenthospital == "13") {
        namehospital = namehospital[10];
    } else if (currenthospital == "14") {
        namehospital = namehospital[11];
    } else if (currenthospital == "15") {
        namehospital = namehospital[12];
    } else if (currenthospital == "16") {
        namehospital = namehospital[13];
    } else if (currenthospital == "17") {
        namehospital = namehospital[14];
    } else if (currenthospital == "18") {
        namehospital = namehospital[15];
    } else if (currenthospital == "19") {
        namehospital = namehospital[16];
    } else if (currenthospital == "21") {
        namehospital = namehospital[17];
    } else if (currenthospital == "22") {
        namehospital = namehospital[18];
    } else if (currenthospital == "23") {
        namehospital = namehospital[19];
    } else if (currenthospital == "24") {
        namehospital = namehospital[20];
    } else if (currenthospital == "25") {
        namehospital = namehospital[21];
    } else if (currenthospital == "26") {
        namehospital = namehospital[22];
    } else if (currenthospital == "27") {
        namehospital = namehospital[23];
    } else if (currenthospital == "28") {
        namehospital = namehospital[24];
    } else if (currenthospital == "29") {
        namehospital = namehospital[25];
    }
    document.getElementById("selectedhoscli").innerHTML = namehospital;
    localStorage.setItem("hospital",currenthospital);
}
