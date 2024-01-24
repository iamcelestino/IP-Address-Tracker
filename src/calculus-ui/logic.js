import "./style/style.css";
import Ipbase from '@everapi/ipbase-js';

class IPaddress {
     constructor(container) {
          this.container = container;
     }
     async getIpAddress(ipAddress) {
          const ipBase = new Ipbase('ipb_live_Svo23KL36aF3ULKKIJJwqu7Fkrw96t1voFDMGQt0');
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
          location.textContent = data.data.location.country.name;
          this.container.childNodes[3].append(location);
          
          const provider = paragraph[2];
          provider.textContent  = data.data.connection.isp;
          this.container.childNodes[5].append(provider);
     }
     getMap(data) {
          var map = L.map('map').setView([data.data.location.latitude, data.data.location.longitude], 13);
          var circle = L.circle([data.data.location.latitude, data.data.location.longitude], {
               color: 'red',
               fillColor: '#f03',
               fillOpacity: 0.5,
               radius: 500
           }).addTo(map);
     
          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(map);
     }
};

export {IPaddress as default};

