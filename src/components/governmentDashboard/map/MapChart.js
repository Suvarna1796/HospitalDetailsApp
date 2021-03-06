import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

import india from './topojsons/india.json';

//cordinates e,n
const markers = [
  // { bubblesize: 23, name: "Orissa", coordinates: [84.4, 20.25] },
  // { bubblesize: 15, name: "Andaman & Nicobar Island", coordinates: [93, 10] },
  // { bubblesize: 2, name: "Assam", coordinates: [92.9, 26] },
  // { bubblesize: 5, name: "NCT of Delhi", coordinates: [77.05, 28.6] },
  // { bubblesize: 20, name: "Goa", coordinates: [74, 15.25] },
  // { bubblesize: 10, name: "Maharashtra", coordinates: [76.8, 19.3] },
  // { bubblesize: 1, name: "Georgetown", coordinates: [17.72, 83.21] },
  // { bubblesize: 25, name: "Visakhapatnam", coordinates: [83.21, 17.68] },
  // { bubblesize: 20, name: "Chennai", coordinates: [80.27, 13.08] },
  // { bubblesize: 25, name: "Rajasthan", coordinates: [74.2179, 27.0238] },
  { name: 'Andhra Pradesh', coordinates: [79.74, 15.91] },
  { name: 'Arunachal Pradesh', coordinates: [94.72, 28.21] },
  { name: 'Assam', coordinates: [92.93, 26.20] },
  { name: 'Bihar', coordinates: [85.31, 25.09] },
  { name: 'Chhattisgarh', coordinates: [81.86, 21.27] },
  { name: 'Goa', coordinates: [74.12, 15.29] },
  { name: 'Gujarat', coordinates: [71.19, 22.25] },
  { name: 'Haryana', coordinates: [76.08, 29.05] },
  { name: 'Himachal Pradesh', coordinates: [77.17, 31.10] },
  { name: 'Jammu and Kashmir', coordinates: [76.57, 33.77] },
  { name: 'Jharkhand', coordinates: [85.27, 23.61] },
  { name: 'Karnataka', coordinates: [75.71, 15.31] },
  { name: 'Kerala', coordinates: [76.27, 10.85] },
  { name: 'Madhya Pradesh', coordinates: [78.65, 22.97] },
  { name: 'Maharashtra', coordinates: [75.71, 19.75] },
  { name: 'Manipur', coordinates: [93.90, 24.66] },
  { name: 'Meghalaya', coordinates: [91.36, 25.46] },
  { name: 'Mizoram', coordinates: [92.93, 23.16] },
  { name: 'Nagaland', coordinates: [94.56, 26.15] },
  { name: 'Odisha', coordinates: [85.09, 20.95] },
  { name: 'Punjab', coordinates: [75.34, 31.14] },
  { name: 'Rajasthan', coordinates: [74.21, 27.02] },
  { name: 'Sikkim', coordinates: [88.51, 27.53] },
  { name: 'Tamil Nadu', coordinates: [78.65, 11.12] },
  { name: 'Tripura', coordinates: [91.98, 23.94] },
  { name: 'Uttarakhand', coordinates: [79.01, 30.06] },
  { name: 'Uttar Pradesh', coordinates: [80.94, 26.84] },
  { name: 'West Bengal', coordinates: [87.85, 22.98] }
];

const MapChart = ({ setTooltipContent, setStateName, setShowDistrict, data }) => {
  var propValue = data;
  if (propValue) {
    if (markers) {
      propValue.map((i) => {
        markers.map((v) => {
          if (i.State === v.name) {
            i.coordinates = v.coordinates;
            v.bubblesize = i.Active;
          }
          return null
        })
        return null
      })
    }
  }
  return (
    <>
      <ComposableMap data-tip="" projection="geoMercator" width={150} height={150} projectionConfig={{ scale: 220 }}>
        <ZoomableGroup zoom={1} center={[80, 22]} >
          <Geographies geography={india}>
            {({ geographies }) =>
              // {console.log(geographies)}
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { ST_NM } = geo.properties;
                    setTooltipContent(`${ST_NM}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={() => {
                    const { ST_NM } = geo.properties;
                    setStateName(`${ST_NM}`);
                    setShowDistrict(true);
                  }}
                  style={{
                    default: {
                      fill: "transparent",
                      outline: "none",
                      stroke: '#D6EBFF',
                      strokeWidth: 0.75,
                    },
                    hover: {
                      fill: "transparent",
                      outline: "none",
                      stroke: '#D6EBFF'
                    },
                    pressed: {
                      fill: "#8ECAFF",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
          {propValue && markers.length > 0 ? markers.map(({ name, bubblesize, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle fill="#8ECAFF"
                r={20 * (bubblesize / 150000)}
                stroke={'2'} fillOpacity={0.5} />
            </Marker>
          )) : ''}
        </ZoomableGroup>

      </ComposableMap>
    </>
  );
};

export default MapChart;