import IPaddress  from "./calculus-ui/logic";
import Ipbase from '@everapi/ipbase-js'

const ipAddress = new IPaddress(document.querySelector(".ip__information"));
const form = document.querySelector('form');


form.addEventListener("submit", event => {
    event.preventDefault();
    const ip = form.address.value;
    ipAddress.getIpAddress(ip)
});



















