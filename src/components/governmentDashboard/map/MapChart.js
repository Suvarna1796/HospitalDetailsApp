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
  {bubblesize:23, name: "Orissa",coordinates: [84.4, 20.25]},
  { bubblesize:3, name: "Andaman & Nicobar Island", coordinates: [93,10] },
  {bubblesize:2, name: "Assam", coordinates: [92.9,26] },
  { bubblesize:5, name: "NCT of Delhi", coordinates: [77.05, 28.6] },
  { bubblesize:20, name: "Goa", coordinates: [74,15.25] },
  { bubblesize:10, name: "Maharashtra", coordinates: [76.8,19.3] },
  { bubblesize:1, name: "Georgetown", coordinates: [17.72, 83.21] },
  { bubblesize:25, name: "Visakhapatnam", coordinates: [ 83.21,17.68] },
  { bubblesize:20, name: "Chennai", coordinates: [80.27,13.08] },
  {bubblesize:25, name: "Rajasthan", coordinates: [74.2179, 27.0238] }
];

const MapChart = ({ setTooltipContent, setStateName, setShowDistrict }) => {
    return (
      <>
        <ComposableMap  data-tip="" projection="geoMercator" width={150} height={150} projectionConfig={{ scale: 220 }}>
          <ZoomableGroup zoom={1} center={[80,22]} >
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
                    onClick = {() => {
                      const { ST_NM } = geo.properties;
                      setStateName(`${ST_NM}`);
                      setShowDistrict(true);
                    }}
                    style={{
                      default: {
                        fill: "transparent",
                        outline: "none",
                        stroke:'#D6EBFF',
                        strokeWidth: 0.75,
                      },
                      hover: {
                        fill: "transparent",
                        outline: "none",
                        stroke:'#D6EBFF'
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
      {markers.map(({ name,bubblesize, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle  fill="#8ECAFF" 
           r={20  *  (bubblesize / 100)}
            stroke={'2'}  fillOpacity={0.5}/>
        
          
        </Marker>
      ))}
          </ZoomableGroup>
        
        </ComposableMap>
      </>
    );
};

export default MapChart;