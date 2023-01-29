function validate() {
   let submitBtn = document.getElementById('submit');
   submitBtn.addEventListener('click', validateFormatHandler);
   let isCompanyCheckBox = document.getElementById('company');
   isCompanyCheckBox.addEventListener('change', onIsCompanyHandler);

   function validateFormatHandler(e) {
       e.preventDefault();
       let usernameInput = document.getElementById('username');
       let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
       let usernameIsValid = usernameRegex.test(usernameInput.value);
       setBorder(usernameInput, usernameIsValid);

       let emailInput = document.getElementById('email');
       let emailRegex = /^.*@.*\..*$/;
       let emailIsValid = emailRegex.test(emailInput.value);
       setBorder(emailInput, emailIsValid);

       let passwordRegex = /^\w{5,15}$/;
       let passwordInput = document.getElementById('password');
       let passwordIsValid = passwordRegex.test(passwordInput.value);

       let confirmPasswordInput = document.getElementById('confirm-password');
       let confirmPasswordIsValid = passwordRegex.test(confirmPasswordInput.value);
       let passwordsAreOk = passwordIsValid &&
        confirmPasswordIsValid && 
        passwordInput.value == confirmPasswordInput.value;
       setBorder(passwordInput, passwordsAreOk);
       setBorder(confirmPasswordInput, passwordsAreOk); 
   }

   function onIsCompanyHandler(e) {
      let companyInfoFieldset = document.getElementById('companyInfo');
      companyInfoFieldset.style.display = e.target.checked ? 'block': 'none';
   }

   function setBorder(element, isValid) {
       if(isValid) {
        element.style.setProperty('border', 'none');
       } else {
        element.style.setProperty('border-color', 'red');
       }
       
   }
}
