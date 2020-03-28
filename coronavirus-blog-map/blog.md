# Web mapping

## “I heard about a spider cartographer. He makes web-based maps”

### Plan

- I probably don't need to sell how cool maps are to you if you've clicked this link
- Some data is inherently spatial.
  - income distribution and poverty
  - crime
  - pollution
  - public health emergencies
- The value of spatial data
  - evenness of distributions
  - clusters
  - spread through time
- A very current dataset
  - Coronavirus
    - https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_daily_reports/* 03-25-2020.csv
- Make a basic map in leaflet
  - Making a map
    - L.map
    - needs a setView
    - which in turn needs a location and a centre and a zoom
  - Making a base map
    - tileLayer
  - Adding points
    - looping over data
    - scaling and styling markers
    - adding popups
- Finish
  - https://storymaps.arcgis.com/stories/4fdc0d03d3a34aa485de1fb0d2650ee0
  - Other ideas : Make time series animations. Or daily updates.
