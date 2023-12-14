import "./style/style.css";
import Ipbase from '@everapi/ipbase-js'

class IPaddress {

     constructor(container) {
          this.container = container;
          
     }
     async getIpAddress(ipAddress) {
          const ipBase = new Ipbase('ipb_live_IVbYzCVWz1BD7Hw0g0VyMq9BUGoW6J2jgc3oVBcJ')
          ipBase.info({
               ip: ipAddress
          }).then(response => {
               this.UpadateUi(response);
               this.getMap(response);
          });
     }
     UpadateUi (data) {

          const paragraph = [];
          for (let i = 0; i < 3; i++) {
               const p = document.createElement('p'); 
               paragraph.push(p);  
          }

          const ip = paragraph[0];
          ip.textContent = data.data.ip;
          this.container.childNodes[1].append(ip);
          
          const location = paragraph[1];
          location.textContent = data.country;
          this.container.childNodes[3].append(location);
          
          const timezone = paragraph[2];
          timezone.textContent  =  data.timezone;
          this.container.childNodes[5].append(timezone);
          console.log(data.data)
          console.log(data.data.timezone)
     }
     getMap(data) {
          var map = L.map('map').setView([data.data.location.latitude, data.data.location.longitude], 13);

          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(map);
          console.log(data)
     }
};

export {IPaddress as default};

