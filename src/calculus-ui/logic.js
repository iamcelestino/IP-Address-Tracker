
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
          let paragraph = [];
          for (let i = 0; i < 4; i++){
              const p = document.createElement('p');
              paragraph.push(p)
          }
          this.container.innerHTML =  paragraph[0];
          console.log(paragraph)
          console.log(data.ip, data.location.country, data.isp,  data.location.timezone);
     }
}

export {IPaddress as default};

