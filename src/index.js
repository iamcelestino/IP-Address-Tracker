import IPaddress  from "./calculus-ui/logic";
const ipAddress = new IPaddress();
const form = document.querySelector('form');


form.addEventListener("submit", event => {
    event.preventDefault();
    const ip = form.address.value;
    ipAddress.getIpAddress(ip)
        .then(data => console.log(data))
        .catch(error => console.log(error));
});


















