// alert
const alertWithDismiss = document.querySelector(".alert-dismiss");
const alertDismissBtn = document.querySelector("#alert-dismiss-btn");

const removeDismissAlert = () => {
    alertWithDismiss.classList.add('alert-dismiss-remove');
}

alertDismissBtn.addEventListener("click", removeDismissAlert);

// Input form
const formButton = document.querySelector("#form-submit");
const formName = document.querySelector("#form-name");
const formNumber = document.querySelector("#form-number");
const formChecked = document.querySelector("#terms");

const formValidation = () => {
    if (formName.value === "") {
        setError(formName, 'Name cannot be empty')
    }else {
        setSuccess(formName)
    }

    if (!formChecked.checked) {
        console.log("checkbox clicked");
        setError(formChecked, "Please click on the box")
    }else {
        setSuccess(formChecked)
    }
}

const setError = (inputElement, message) => {
    const formField = inputElement.parentElement;
    const errorMsg = formField.querySelector(".error-mssg");
    errorMsg.textContent = message;
    formField.classList = "form-field error";
}

const setSuccess = (inputElement, message) => {
    const formField = inputElement.parentElement;
    formField.classList = "form-field success";
}

formButton.addEventListener("click", formValidation)