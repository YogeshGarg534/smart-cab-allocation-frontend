import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

const Map = ({cabsarray}) => {
  const mapContainer = useRef(null);


  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
      center: [23.8167384, 86.4404441],
      zoom: 12,
    });
    console.log('Test 1',cabsarray);
    new maplibregl.Marker().setLngLat([23.8167384,86.4404441]).addTo(map);
    // cabsarray.forEach(d => {
    //    new maplibregl.Marker().setLngLat([d.longitude, d.latitude]).addTo(map);
    // })

     return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ margin:"0 auto 0 auto", width: "90%", height: "400px" }} />;
};

export default Map;