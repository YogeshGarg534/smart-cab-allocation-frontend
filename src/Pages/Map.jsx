import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

const Map = ({cabsarray}) => {
  const mapContainer = useRef(null);


  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
      center: [cabsarray[0].longitude,cabsarray[0].latitude],
      zoom: 12,
    });
    console.log('Test 1',cabsarray);
    //new maplibregl.Marker().setLngLat([longitude,latitude]).addTo(map);
    cabsarray.forEach(d => {
       new maplibregl.Marker().setLngLat([d.longitude, d.latitude]).addTo(map);
    })

     return () => map.remove();
  }, [cabsarray]);

  return <div ref={mapContainer} style={{ width: "90%", height: "400px" }} />;
};

export default Map;