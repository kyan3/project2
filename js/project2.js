function validate() {

	if (document.myForm.user.value == "") {
		alert("Please provide your Email!");
		document.myForm.user.focus();
		return false;
	}

	if (document.myForm.password.value == "") {
		alert("Please enter your Password!");
		document.myForm.password.focus();
		return false;
	}
	return (true);
}