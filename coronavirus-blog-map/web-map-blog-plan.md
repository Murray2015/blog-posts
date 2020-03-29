# Make your first web map of the Coronavirus outbreak in 5 easy steps - for free!

## “I heard about a spider cartographer. He makes web-based maps”

## Define audience

- People who want to make web maps
- Budding data scientists
- Geography degrees students
- People wanting to add a new skill to their tool belt
- People who need to make a map for a project / work task / hobby

## Plan subheadings

- Data is cool
- Some data is inherently spatial
- 5 steps to your first interactive web map
- 1. Make the map canvas
- 2. Add a base map
- 3. Add data
- 4. Style data
- 5. Add popups
- Further ideas

## Plan topic sentences

- When presented well, data can present some of the most profound facts about our world.
- Spatial data is data that has some sort of a location recorded.
- Making your first web map is far easier than you have probably realized.
- A map canvas is simply the <div></div> than contains the map
- A basemap is a recognizable map to allow the reader to orient themselves.
- Now we have an interactive web map, lets actually add interesting data to it.
- How to style the data depends on what you want to show.
- Popups on your web map give the user more to interact with.
- This basic map only scratches the surface of what you can do, both with web maps and with this dataset.

## Plan pictures

- Coronavirus
- Examples of the web map at each stage
  - Map canvas
  - Map canvas with base map
  - Map canvas with circles all same size
  - Map canvas with circles all different sizes
  - Final map with all of the above, plus popups open
- Mapaction map example

## Plan links

- Mapaction
- Coronavirus - WHO
- Github for data
- leaflet
- ArcGIS story mapbook
- ArcGIS and QGIS
- PapaParse
- csv to JSON online tool
- My Github repo (Make sure to do README better!)

## Outline

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
  - Other ideas :
    - Fix the bugs in the data - e.g. where there is no locations or duplicates.
    - Make time series animations.
    - Make daily updates.
    - Change the colour of the markers as a function of number of people recovered
    - Or display multivariate data by making the size of the circles the number of infected people, and the colour the proportion of the countries critical care beds used up.

Notes - aim for 2000 - 3000 words
