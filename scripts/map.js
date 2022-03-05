console.log('This is the map file');
import * as L from 'leaflet';
import homicides from '../_data/harvard_park_homicides.json';

console.log('Leaflet', L);

const map = L.map('map');
const satelliteLayer = L.tileLayer(
  'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA'
);
satelliteLayer.addTo(map);
map.setView([33.983265, -118.306799], 15);

homicides.forEach((obj) => {
  L.circleMarker([obj.latitude, obj.longitude])
    .addTo(map)
    .bindTooltip(obj.first_name + ' ' + obj.last_name, { permanent: true });
});
