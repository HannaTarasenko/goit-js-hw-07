
const userNameInput = document.querySelector('#name-input');
const userNameOutput = document.querySelector('#name-output');
userNameInput.addEventListener('input', onUserNameInput);
function onUserNameInput () {
    const trimmedvalue = userNameInput.value.trim();
    if (trimmedvalue === '') {
       userNameOutput.textContent = 'Anonymous';
    } else {
       userNameOutput.textContent = trimmedvalue;
    }
    console.log(trimmedvalue);
}