const minConfirmed = 50;
const myMap = L.map("mapid").setView([45, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(myMap);

data
  .filter(d => d.Confirmed > minConfirmed)
  .forEach(d => {
    const marker = L.circle([d.Lat, d.Long_], {
      color: "red",
      fillColor: "red",
      fillOpacity: 0.5,
      // radius: (5000000 * d.Deaths) / (d.Confirmed + d.Deaths + d.Active)
      radius: d.Deaths * 100
    }).addTo(myMap);
    marker.bindPopup(
      `<h2>${d.Province_State ||
        d.Country_Region}</h2><p class="popup"><br>Confirmed cases:${
        d.Confirmed
      }<br>Deaths:${d.Deaths}<br>Recovered:${d.Recovered}<br>Active:${
        d.Active
      }</p>`
    );
  });
