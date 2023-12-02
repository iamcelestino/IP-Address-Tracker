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

          const paragraph = [];
          for (let i = 0; i < 4; i++) {
               const p = document.createElement('p'); 
               paragraph.push(p);  
          }

          const ip = paragraph[0];
          ip.textContent = data.ip;
          this.container.childNodes[1].append(ip);
          
          const location = paragraph[1];
          location.textContent = data.location.country;
          this.container.childNodes[3].append(location);
          
          const timezone = paragraph[2];
          timezone.textContent  =  data.location.timezone;
          this.container.childNodes[3].append(timezone);

          const isp = paragraph[3];
          isp.textContent = data.isp;
          this.container.childNodes[7].append(isp);
     }

}

export {IPaddress as default};

