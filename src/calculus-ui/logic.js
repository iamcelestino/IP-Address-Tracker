
import "./style/style.css";

class IPaddress {
     constructor(container) {
          this.container = container;
          this.IPaddressUrl = 'https://geo.ipify.org/api/v2/country?apiKey=at_Kp31QZqTgfJtLVeR8MGd64Em5ZDaq&';  
     }
     async getIpAddress(ip) {
          const query = `ipAddress=${ip}`;
          const response = await fetch(this.IPaddressUrl + query);
          const data = await response.json();
          return data;
     }
     UpadateUi (data) {
          const address = document.createElement('p');
          
          address.textContent = data.ip;
          this.container.childNodes[1].append(address);
          console.log(data.ip, data.location.country, data.isp,  data.location.timezone);
     }
}

export {IPaddress as default};

