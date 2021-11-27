import Axios from "axios";
import React, { useEffect, useState } from "react";



function AppointmentPage() {
    const [clientId, setClientId]=useState("");
    const [healerId, setHealerId]=useState("");
    const [adate, setAppointmentDate]=useState("");
    const [alocation, setAppointmentLocation]=useState("");
    const [service, setAppointmentService]=useState("");
    const [appointmentList,setAppointmentList]=useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/Appointment/getAppointment").then((response)=>{
        console.log(response.data);
        setAppointmentList(response.data);
    })
    },[])

    const submitAppointment=()=>{
        if(document.getElementById("clientId").selected){
            Axios.post("http://localhost:3001/Appointment/searchAppointment",{
                clientId: clientId,
            }).then(()=>{
                alert("successfully get.");
            })
        }
        if(document.getElementById("healerId").selected){
            Axios.post("http://localhost:3001/Appointment/searchAppointment",{
                healerId: healerId,
            }).then(()=>{
                alert("successfully get.");
            })
        }if(document.getElementById("adate").selected){
            Axios.post("http://localhost:3001/Appointment/searchAppointment",{
                adate: adate
            }).then(()=>{
                alert("successfully get.");
            })
        }if(document.getElementById("service").selected){
            Axios.post("http://localhost:3001/Appointment/searchAppointment",{
                service: service,
            }).then(()=>{
                alert("successfully get.");
            })
        }if(document.getElementById("alocation").selected){
            Axios.post("http://localhost:3001/Appointment/searchAppointment",{
                alocation: alocation
            }).then(()=>{
                alert("successfully get.");
            })
        }
    }

    const clear=()=>{
        document.getElementById("form").value='';
        
    }









    return (
        <div>
            <p>Search Options</p>
            <select>
                <option>select</option>
                <option id="clientId" value="Client ID">Client ID</option>
                <option id="healerId" value="Healer ID">Healer ID</option>
                <option id="adate" value="Date">Date</option>
                <option id="alocation" value="Location">Location</option>
                <option id="service" value="service">Service</option>
            </select>
            <div>
            <input type="text" id="form"  placeholder="" onChange={(event)=>(
                (
                setClientId(event.target.value),
                setHealerId(event.target.value),
                setAppointmentDate(event.target.value),
                setAppointmentLocation(event.target.value),
                setAppointmentService(event.target.value)
                )
            )}></input>
            <button type="submit" onClick={submitAppointment}>Search</button>
            <button type="reset" onClick={clear}>Clear</button>
            </div>
            <table>
                <tbody>
                <tr><th>Client ID</th><th>Healer ID</th><th>Date</th><th>Location</th><th>Service</th></tr>
                {appointmentList.map((val)=>{
                    return <tr><td>{val.clientId}</td><td>{val.healerId}</td><td>{val.adate}</td><td>{val.location}</td><td>{val.service}</td><td>{val.city}</td><td>{val.province}</td></tr>
                })}
                </tbody>
            </table>
        </div>
    );
}

export default AppointmentPage;