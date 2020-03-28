const minConfirmed = 10;
const mymap = L.map("mapid").setView([45, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  tileSize: 512,
  zoomOffset: -1
}).addTo(mymap);

data
  .filter(d => d.Confirmed > minConfirmed)
  .forEach(d => {
    const marker = L.circle([d.Lat, d.Long_], {
      color: "red",
      fillColor: "red",
      fillOpacity: 0.5,
      radius: d.Confirmed * 10
    }).addTo(mymap);
    marker.bindPopup(
      `<h2>${d.Province_State ||
        d.Country_Region}</h2><p class="popup"><br>Confirmed cases:${
        d.Confirmed
      }<br>Deaths:${d.Deaths}<br>Recovered:${d.Recovered}<br>Active:${
        d.Active
      }</p>`
    );
  });
