import "./style/style.css";

class IPaddress {

     constructor(container) {
          this.container = container;
     }

     async getIpAddress(ipAddress) {
          const response = await fetch(`https://get.geojs.io/v1/ip/geo/${ipAddress}.json`);
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
          location.textContent = data.country;
          this.container.childNodes[3].append(location);
          
          const timezone = paragraph[2];
          timezone.textContent  =  data.timezone;
          this.container.childNodes[5].append(timezone);
          console.log(data)
     }
     getMap(data) {
          var map = L.map('map').setView([data.latitude, data.longitude], 13);

          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(map);
     }

}

export {IPaddress as default};

