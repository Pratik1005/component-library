// alert
const alertWithDismiss = document.querySelector(".alert-dismiss");
const alertDismissBtn = document.querySelector("#alert-dismiss-btn");

const removeDismissAlert = () => {
    alertWithDismiss.classList.add('alert-dismiss-remove');
}

alertDismissBtn.addEventListener("click", removeDismissAlert);