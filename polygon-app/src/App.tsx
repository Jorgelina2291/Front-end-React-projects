import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import { useState } from "react";
import L from "leaflet";
import { renderToString } from "react-dom/server";
import { SVGIconComponent } from "./SVGIconComponent";
import { Grid } from "@mui/material";
import ListaDeRutas from "./components/ListaDeRutas";
//import OutlinedInput from "./components/ListaDeRutas";
//const style = "reduced.day";
//const apiKey = "qmkRTSOkHRyl9te4UYp1ja5ZomYsH6qT_5Ce-Axd6DY";
//const hereTileUrl = `https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/${style}/{z}/{x}/{y}/512/png8?apiKey=${apiKey}&ppi=320`;

const tandil: LatLngTuple = [-37.32778867164241, -59.1340406258648];

const pathOptions = [
  {
    color: "purple",
    fillOpacity: 0.5,
    weight: 1,
    opacity: 0.9 /** lineCap:"square" dashArray: '20, 20', dashOffset: '20'*/,
  },
  { color: "green", fillOpacity: 0.7, weight: 2, opacity: 0.9 },
  { color: "blue", fillOpacity: 0.3, weight: 2, opacity: 0.9 },
  { color: "red", fillOpacity: 0.3, weight: 2, opacity: 0.9 },
  { color: "yellow", fillOpacity: 0.3, weight: 2, opacity: 0.9 },
];
const message = ["violeta", "verde", "azul", "rojo", "amarillo"];

const polygons: LatLngTuple[][] = [
  [
    [-37.338739, -59.153996],
    [-37.334269, -59.14228],
    [-37.339148, -59.13919],
    [-37.339797, -59.140821],
    [-37.3414, -59.139662],
    [-37.342663, -59.140949],
    [-37.34529, -59.148245],
    [-37.338739, -59.153996],
  ],
  [
    [-37.339814, -59.140713],
    [-37.339131, -59.139104],
    [-37.336811, -59.140627],
    [-37.333706, -59.132495],
    [-37.341656, -59.130929],
    [-37.341724, -59.129727],
    [-37.341161, -59.129255],
    [-37.340803, -59.128182],
    [-37.343157, -59.126744],
    [-37.34372, -59.127688],
    [-37.344283, -59.128032],
    [-37.345426, -59.127195],
    [-37.346586, -59.12653],
    [-37.349094, -59.127109],
    [-37.352505, -59.131765],
    [-37.351379, -59.133482],
    [-37.351857, -59.13949],
    [-37.348991, -59.13655],
    [-37.347439, -59.138267],
    [-37.346228, -59.13522],
    [-37.341776, -59.137666],
    [-37.341383, -59.139597],
    [-37.339814, -59.140713],
  ],
  [
    [-37.336802, -59.140638],
    [-37.331411, -59.126433],
    [-37.320491, -59.132828],
    [-37.325883, -59.147118],
    [-37.336802, -59.140638],
  ],
  [
    [-37.325887, -59.147118],
    [-37.320482, -59.132822],
    [-37.312291, -59.137688],
    [-37.317581, -59.152021],
    [-37.325887, -59.147118],
  ],
  [
    [-37.333702, -59.13249],
    [-37.341648, -59.130934],
    [-37.341729, -59.129722],
    [-37.341153, -59.12926],
    [-37.340803, -59.128198],
    [-37.339677, -59.125232],
    [-37.34204, -59.123837],
    [-37.340871, -59.120736],
    [-37.338517, -59.122195],
    [-37.335207, -59.113183],
    [-37.332716, -59.114642],
    [-37.333894, -59.117582],
    [-37.332716, -59.118354],
    [-37.330857, -59.12492],
    [-37.333702, -59.13249],
  ],
  [
    [-37.331424, -59.126417],
    [-37.328024, -59.117496],
    [-37.325618, -59.118934],
    [-37.32456, -59.11593],
    [-37.319578, -59.118826],
    [-37.324049, -59.130671],
    [-37.331424, -59.126417],
  ],
  [
    [-37.325623, -59.118928],
    [-37.32456, -59.115924],
    [-37.319569, -59.118837],
    [-37.31596, -59.120908],
    [-37.314612, -59.117668],
    [-37.314015, -59.116702],
    [-37.321216, -59.107368],
    [-37.326932, -59.114535],
    [-37.328016, -59.117501],
    [-37.325623, -59.118928],
  ],
  [
    [-37.335199, -59.113178],
    [-37.333979, -59.110286],
    [-37.326911, -59.114508],
    [-37.330861, -59.124915],
    [-37.332716, -59.118311],
    [-37.333885, -59.117593],
    [-37.332691, -59.114642],
    [-37.335199, -59.113178],
  ],
  [
    [-37.321212, -59.107368],
    [-37.323003, -59.10504],
    [-37.326437, -59.109321],
    [-37.329381, -59.105673],
    [-37.332102, -59.108945],
    [-37.332895, -59.110887],
    [-37.326915, -59.114497],
    [-37.321212, -59.107368],
  ],
  [
    [-37.307017, -59.126272],
    [-37.306232, -59.125757],
    [-37.30444, -59.12329],
    [-37.311881, -59.113848],
    [-37.31401, -59.116707],
    [-37.314595, -59.117619],
    [-37.315951, -59.120935],
    [-37.307017, -59.126272],
  ],
  [
    [-37.319582, -59.118832],
    [-37.324061, -59.130719],
    [-37.318085, -59.134244],
    [-37.314731, -59.125457],
    [-37.319544, -59.122517],
    [-37.318383, -59.119492],
    [-37.319582, -59.118832],
  ],
  [
    [-37.314727, -59.125451],
    [-37.313567, -59.122345],
    [-37.318375, -59.119508],
    [-37.319544, -59.122522],
    [-37.314727, -59.125451],
  ],
  [
    [-37.33397, -59.110308],
    [-37.33577, -59.109203],
    [-37.336257, -59.108988],
    [-37.336564, -59.109364],
    [-37.336794, -59.109997],
    [-37.337707, -59.110179],
    [-37.338995, -59.109943],
    [-37.340206, -59.110265],
    [-37.341161, -59.109042],
    [-37.343004, -59.111263],
    [-37.342083, -59.112593],
    [-37.342987, -59.113612],
    [-37.342108, -59.114867],
    [-37.343874, -59.11711],
    [-37.341238, -59.12043],
    [-37.340876, -59.120725],
    [-37.338513, -59.122217],
    [-37.33397, -59.110308],
  ],
];

function App() {
  // Indice del poligono que vamos a cambiar de color cuando le pasamos el mouse
  const [indexHover, setIndexHover] = useState(-1);
  console.log(indexHover);

  const Icon = L.divIcon({
    className: "custom-div-icon",
    html: renderToString(<SVGIconComponent percentage={20} />),
    iconSize: [30, 42],
    iconAnchor: [15, 42],
  });

  return (
    <Grid container>
      <Grid xs={3} item>
        <ListaDeRutas />
      </Grid>

      <Grid xs={9} item>
        <MapContainer
          style={{ height: 600 }}
          center={tandil}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution=""
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker
            position={[-37.326884332350666, -59.114466468178364]}
            icon={Icon}
          >
            <Popup>Aguante Garmense</Popup>
          </Marker>

          {polygons.map((polygon) => (
            <Marker
              position={L.latLngBounds(polygon).getCenter()}
              icon={Icon}
            ></Marker>
          ))}

          {polygons.map((_, index) => (
            <Polygon
              eventHandlers={{
                mouseover: () => {
                  console.log("hover en poligono " + index);
                  setIndexHover(index);
                },
                mouseout: () => {
                  console.log("me fui del poligono" + index);
                  setIndexHover(-1);
                },
              }}
              pathOptions={{
                color: pathOptions[index % pathOptions.length].color,
                fillOpacity: index === indexHover ? 1 : 0.2,
              }}
              // pathOptions={pathOptions[index % pathOptions.length]}
              positions={polygons[index]}
            >
              <Popup>{message[index % message.length]}</Popup>
            </Polygon>
          ))}
        </MapContainer>
      </Grid>
    </Grid>
  );
}

export default App;
