function Login() {

	var id = document.getElementById("Lmail").value;
	var pass = document.getElementById("Lpass").value;
	console.log("id " + id);
	console.log("pass " + pass);
	console.log("id " + localStorage.getItem("id"));
	console.log("pass " + localStorage.getItem("pass"));
	if (id != localStorage.getItem("id") || pass != localStorage.getItem("pass")) {
		alert("Invalid UserId and/or Password ");
	}
	else {

		window.open("../index.html");
	}


}
function Register() {
	var id = document.getElementById("Rmail").value;
	var pass = document.getElementById("Rpass").value;
	var con_pass = document.getElementById("confirm-pass").value;
	console.log("pass>>"+pass);
	console.log("pass>>"+con_pass);
	if(pass!=con_pass)
	{
		alert("password must be same .");
		return;
	}
	localStorage.setItem("id", id);
	localStorage.setItem("pass", pass);
	console.log("Id  " + localStorage.getItem("id") + "   :    " + "pass  " + localStorage.getItem("pass"));

}

function switchForm(className, e) {
	e.preventDefault();
	const allForm = document.querySelectorAll('form');
	const form = document.querySelector(`form.${className}`);

	allForm.forEach(item => {
		item.classList.remove('active');
	})
	form.classList.add('active');
}
