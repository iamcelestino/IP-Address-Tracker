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

          const html = `
          <div class="address">
               <h3>IP Address</h3>
               <p>${data.data.ip}</p>
           </div>
          <div class="location">
               <h3>Location</h3>
               <p>${data.data.location.country.name}</p>
          </div>
          <div class="ISP">
               <h3>ISP</h3>
               <p>${data.data.connection.isp}</p>
          </div>
          
          `;
          this.container.innerHTML = html;
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

