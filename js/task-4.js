
const formElement = document.querySelector('.login-form');
formElement.addEventListener("submit", event => {
    event.preventDefault();
    const email = formElement.elements.email.value.trim();
    const password = formElement.elements.password.value.trim();
    if (email === "" || password === "") {
        return alert("All form fields must be filled in");
    } else {
        const data  = {};
        for (let i = 0; i < formElement.length; i++) {
            const element = formElement.elements[i];
            if (element.type !== "submit") {
                data[element.name] = element.value.trim();
            }
        }
        console.log(data);
        formElement.reset();
    }
});