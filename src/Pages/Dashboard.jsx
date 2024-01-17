import React, { useEffect, useState } from "react";
import Map from "./Map";
import axios from "axios";
import { Button } from "react-bootstrap";

const Dashboard = () => {
    const [latitude,setlatitude] = useState();
    const [longitude,setlongitude] = useState();
    const [cabsarray,setcabsarray] = useState([
        
            {"latitude":23.8209,
            "longitude":86.4697,
            "isCabEmpty":true
            }
    ]);
    useEffect(()=> {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setlatitude(position.coords.latitude);
                setlongitude(position.coords.longitude);
            }, (err)=> {
                console.log(err)
            });
        }
    }, [])

    useEffect(() =>{
        if(longitude && latitude) {
            axios.post(`${process.env.REACT_APP_API}/user/shownearbycabs`,{latitude,longitude}).then((data)=> {
                console.log('Data is',data);
                setcabsarray(data.data.data);
            }).catch(err=> {
                console.log(err);
            })
        }
    },[latitude, longitude])
    const handleClick = () =>{
        const userId = localStorage.getItem("userId")
        axios.post(`${process.env.REACT_APP_API}/user/booknearestcab`,{latitude,longitude,userId}).then((data)=> {
            console.log(data.data.data._id);
            alert(`Cab Booked with cab ID ` + data.data.data._id);
            console.log("Booked cab data", data);
        }).catch(err=> {
            console.log(err);
        })
    }
    const d = [{
        latitude: 23.8209,
        longitude: 86.4697
      },
      {
        latitude: 23.8409,
        longitude: 86.4600
      }]
      console.log('cabsarray',cabsarray);
      console.log('size of array', cabsarray.length);
    return(
        <div>
            <div className="parent">
            {/* <Map cabsarray={d}/> */}
            <Map cabsarray={cabsarray}/>
            <br/>
            
        </div>
        <Button className="button" onClick={handleClick}>Book nearset cab</Button>
        </div>
        
    )
}

export default Dashboard