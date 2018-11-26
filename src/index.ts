import { Circle } from "./Shape";

import { Map, TileLayer, Projection } from 'leaflet';

let cir = new Circle(7);




var map = new Map(
    document.getElementById("map"),
    {
        center: [0, 0],
        zoom: 1
    }
);

var tdtLabelLayer = new TileLayer(
    // 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    "https://t{s}.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}",
    {
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']
    }
);
var tdtVecLayer = new TileLayer(
    // 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    "https://t{s}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}",
    {
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
    }
);

map.addLayer(tdtVecLayer);
map.addLayer(tdtLabelLayer);

window.navigator.geolocation.getCurrentPosition(
    (a) => {
        // console.log('success');
        // alert(`${a.coords.latitude} ${a.coords.longitude}`);
        console.log(a);
        map.flyTo([a.coords.latitude, a.coords.longitude], 16);

    },
    (b) => {
        // console.log('error');
        // alert('error');
        console.log(b);
    },
    {}
);
var app = {
    "leaflet": L,
    "map": map
};
window.app = app;

