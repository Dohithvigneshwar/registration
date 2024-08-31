function validate(){
	let fn = document.getElementById("fname").value;
	let ln = document.getElementById("lname").value;
	let count = 0;
	const namePattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(fn)) {
    	alert("Invalid First Name try again !!!");
    	count+=1;
    }
    if (!namePattern.test(ln)) {
    	alert("Invalid Last Name try again !!!");
    	count+=1;
    }
    let mail = document.getElementById("mail").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(mail)){
    	alert("Invalid Mail Id try again !!!");
    	count+=1;
    }
    let contact = document.getElementById("contact").value;
    const mobilePattern = /^[6-9]\d{9}$/;
    if(!mobilePattern.test(contact)){
    	alert("Invalid Contact No try again !!!");
    	count+=1;
    }
    const addressPattern = /^[a-zA-Z0-9\s,'-./]+$/;
    let addr = document.getElementById("address").value;
    if(!addressPattern.test(addr)){
    	alert("Invalid Address try again !!!");
    	count+=1;
    }
   	let city = document.getElementById("city").value;
    const cityPattern = /^[a-zA-Z\s'-]+$/;
    if(!cityPattern.test(city)){
    	alert("Invalid City try again !!!");
    	count+=1;
    }
    if(count == 0){
    	alert("Registration Successfully Completed");
    }
}