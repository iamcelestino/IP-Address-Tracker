
import "./style/style.css";

class IPaddress {
     constructor() {
       this.IPaddressUrl = 'https://geo.ipify.org/api/v2/country?apiKey=at_Kp31QZqTgfJtLVeR8MGd64Em5ZDaq&';  
     }
     async getIpAddress(ip) {
          const query = `ipAddress=${ip}`;
          const response = await fetch(this.IPaddressUrl + query);
          const data = await response.json();
          return data;
     }
     UpadateUi () {
          
     }
}

export {IPaddress as default};

