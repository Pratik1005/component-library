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
        setSuccessFor(formName)
    }

    if (!formChecked.checked) {
        setError(formChecked)
    }
}

formButton.addEventListener("click", formValidation)