import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup, Marker
} from "react-simple-maps";

import andamannicobar from './topojsons/states/andamannicobar.json';
import andhrapradesh from './topojsons/states/andhrapradesh.json';
import arunachalpradesh from './topojsons/states/arunachalpradesh.json';
import assam from './topojsons/states/assam.json';
import bihar from './topojsons/states/bihar.json';
import chhattisgarh from './topojsons/states/chhattisgarh.json';
import delhi from './topojsons/states/delhi.json';
import goa from './topojsons/states/goa.json';
import gujarat from './topojsons/states/gujarat.json';
import haryana from './topojsons/states/haryana.json';
import himachalpradesh from './topojsons/states/himachalpradesh.json';
import jammukashmir from './topojsons/states/jammukashmir.json';
import jharkhand from './topojsons/states/jharkhand.json';
import karnataka from './topojsons/states/karnataka.json';
import kerala from './topojsons/states/kerala.json';
import lakshadweep from './topojsons/states/lakshadweep.json';
import madhyapradesh from './topojsons/states/madhyapradesh.json';
import maharashtra from './topojsons/states/maharashtra.json';
import manipur from './topojsons/states/manipur.json';
import meghalaya from './topojsons/states/meghalaya.json';
import mizoram from './topojsons/states/mizoram.json';
import nagaland from './topojsons/states/nagaland.json';
import odisha from './topojsons/states/odisha.json';
import punjab from './topojsons/states/punjab.json';
import rajasthan from './topojsons/states/rajasthan.json';
import sikkim from './topojsons/states/sikkim.json';
import tamilnadu from './topojsons/states/tamilnadu.json';
import telangana from './topojsons/states/telangana.json';
import tripura from './topojsons/states/tripura.json';
import uttarakhand from './topojsons/states/uttarakhand.json';
import uttarpradesh from './topojsons/states/uttarpradesh.json';
import westbengal from './topojsons/states/westbengal.json';

const markers = [
    // { bubblesize: 23, name: "Orissa", coordinates: [84.4, 20.25] },
    // { bubblesize: 3, name: "Andaman & Nicobar Island", coordinates: [93, 10] },
    // { bubblesize: 2, name: "Assam", coordinates: [92.9, 26] },
    // { bubblesize: 5, name: "NCT of Delhi", coordinates: [77.05, 28.6] },
    // { bubblesize: 20, name: "Goa", coordinates: [74, 15.25] },
    // { bubblesize: 10, name: "Maharashtra", coordinates: [76.8, 19.3] },
    // { bubblesize: 25, name: "Visakhapatnam", coordinates: [83.21, 17.68] },
    // { bubblesize: 40, name: "Chennai", coordinates: [80.27, 13.08] },
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

const StateChart = ({ setTooltipContent, setDistrictName, selectedState, data }) => {
    var propValue = data;
    if (propValue) {
        if (markers) {
            propValue.map((i) => {
                markers.map((v) => {
                    if (i.State === v.name) {
                        i.coordinates = v.coordinates;
                        v.bubblesize = i.Active;
                    }
                })
            })
        }
    }
    let geoURL;
    let centerMap = [80, 22];
    let scaleMap = 400;
    if (selectedState === 'Andaman & Nicobar Island') {
        geoURL = andamannicobar;
        scaleMap = 1000;
        centerMap = [93, 10];
    } else if (selectedState === 'Andhra Pradesh') {
        geoURL = andhrapradesh;
        scaleMap = 800;
        centerMap = [80, 17];
    } else if (selectedState === 'Arunachal Pradesh') {
        geoURL = arunachalpradesh;
        scaleMap = 1200;
        centerMap = [94.5, 28];
    } else if (selectedState === 'Assam') {
        geoURL = assam;
        scaleMap = 1350;
        centerMap = [92.9, 26];
    } else if (selectedState === 'Bihar') {
        geoURL = bihar;
        scaleMap = 1300;
        centerMap = [85.5, 26];
    } else if (selectedState === 'Chhattisgarh') {
        geoURL = chhattisgarh;
        scaleMap = 1100;
        centerMap = [82, 21];
    } else if (selectedState === 'NCT of Delhi') {
        geoURL = delhi;
        scaleMap = 11000;
        centerMap = [77.05, 28.6];
    } else if (selectedState === 'Goa') {
        geoURL = goa;
        scaleMap = 6000;
        centerMap = [74, 15.25];
    } else if (selectedState === 'Gujarat') {
        geoURL = gujarat;
        scaleMap = 1000;
        centerMap = [71.5, 22];
    } else if (selectedState === 'Haryana') {
        geoURL = haryana;
        scaleMap = 1700;
        centerMap = [76, 29];
    } else if (selectedState === 'Himachal Pradesh') {
        geoURL = himachalpradesh;
        scaleMap = 2000;
        centerMap = [77.4, 31.8];
    } else if (selectedState === 'Jammu & Kashmir') {
        geoURL = jammukashmir;
        scaleMap = 1000;
        centerMap = [76.3, 35];
    } else if (selectedState === 'Jharkhand') {
        geoURL = jharkhand;
        scaleMap = 1700;
        centerMap = [85.7, 23.6];
    } else if (selectedState === 'Karnataka') {
        geoURL = karnataka;
        scaleMap = 1100;
        centerMap = [76.5, 15];
    } else if (selectedState === 'Kerala') {
        geoURL = kerala;
        scaleMap = 1800;
        centerMap = [76, 10.5];
    } else if (selectedState === 'Lakshadweep') {
        geoURL = lakshadweep;
        scaleMap = 2300;
        centerMap = [73, 11];
    } else if (selectedState === 'Madhya Pradesh') {
        geoURL = madhyapradesh;
        scaleMap = 900;
        centerMap = [78.5, 24];
    } else if (selectedState === 'Maharashtra') {
        geoURL = maharashtra;
        scaleMap = 1000;
        centerMap = [76.8, 19.3];
    } else if (selectedState === 'Manipur') {
        geoURL = manipur;
        scaleMap = 3400;
        centerMap = [93.8, 24.7];
    } else if (selectedState === 'Meghalaya') {
        geoURL = meghalaya;
        scaleMap = 2500;
        centerMap = [91.3, 25.4];
    } else if (selectedState === 'Mizoram') {
        geoURL = mizoram;
        scaleMap = 2900;
        centerMap = [92.8, 23.25];
    } else if (selectedState === 'Nagaland') {
        geoURL = nagaland;
        scaleMap = 4000;
        centerMap = [94.3, 26.1];
    } else if (selectedState === 'Odisha') {
        geoURL = odisha;
        scaleMap = 1300;
        centerMap = [84.4, 20.25];
    } else if (selectedState === 'Punjab') {
        geoURL = punjab;
        scaleMap = 2300;
        centerMap = [75.35, 31.1];
    } else if (selectedState === 'Rajasthan') {
        geoURL = rajasthan;
        scaleMap = 900;
        centerMap = [74, 26.3];
    } else if (selectedState === 'Sikkim') {
        geoURL = sikkim;
        scaleMap = 6000;
        centerMap = [88.45, 27.6];
    } else if (selectedState === 'Tamil Nadu') {
        geoURL = tamilnadu;
        scaleMap = 1300;
        centerMap = [78.25, 10.8];
    } else if (selectedState === 'Telangana') {
        geoURL = telangana;
        scaleMap = 1800;
        centerMap = [79.5, 17.9];
    } else if (selectedState === 'Tripura') {
        geoURL = tripura;
        scaleMap = 4500;
        centerMap = [91.75, 23.75];
    } else if (selectedState === 'Uttarakhand') {
        geoURL = uttarakhand;
        scaleMap = 2000;
        centerMap = [79.3, 30];
    } else if (selectedState === 'Uttar Pradesh') {
        geoURL = uttarpradesh;
        scaleMap = 1000;
        centerMap = [80.8, 27];
    } else if (selectedState === 'West Bengal') {
        geoURL = westbengal;
        scaleMap = 1200;
        centerMap = [87.7, 24.2];
    }

    return (
        <>
            <ComposableMap data-tip="" projection="geoMercator" width={150} height={150} projectionConfig={{ scale: scaleMap }}>
                <ZoomableGroup zoom={1} center={centerMap} >
                    <Geographies geography={geoURL}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        const { district } = geo.properties;
                                        setTooltipContent(`${district}`);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                    style={{
                                        default: {
                                            fill: "transparent",
                                            outline: "none",
                                            stroke: '#D6EBFF',
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
                    {markers.map(({ name, bubblesize, coordinates, markerOffset }) => (
                        <Marker key={name} coordinates={coordinates}>
                            <circle fill="#8ECAFF"
                                r={20 * (bubblesize / 100000)}
                                stroke={'2'} fillOpacity={0.5} />
                        </Marker>
                    ))}

                </ZoomableGroup>
            </ComposableMap>
        </>
    );
};

export default StateChart;