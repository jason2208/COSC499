import Axios from "axios";
import React, { useEffect, useState } from "react";


function ServicePage() {
    const [serviceId, setServiceId]=useState("");
    const [sname, setServiceName]=useState("");
    const [fee, setServiceFee]=useState("");
    const [description, setServiceDescription]=useState("");
    const [serviceList,setServiceList]=useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/Service/getService").then((response)=>{
        console.log(response.data);
        setServiceList(response.data);
    })
    },[])

    const submitService=()=>{
        if(document.getElementById("serviceId").selected){
            Axios.post("http://localhost:3001/Service/searchService",{
                serviceId: serviceId,
            }).then(()=>{
                alert("successfully get.");
            })
        }
        if(document.getElementById("sname").selected){
            Axios.post("http://localhost:3001/Service/searchService",{
                sname: sname,
            }).then(()=>{
                alert("successfully get.");
            })
        }if(document.getElementById("fee").selected){
            Axios.post("http://localhost:3001/Service/searchService",{
                fee: fee
            }).then(()=>{
                alert("successfully get.");
            })
        }if(document.getElementById("description").selected){
            Axios.post("http://localhost:3001/Service/searchService",{
                description:description,
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
                <option id="serviceId" value="Service ID">Service ID</option>
                <option id="sname" value="Name">Service Name</option>
                <option id="fee" value="Fee">Fee(larger)</option>
                <option id="description" value="Description">Description</option>
            </select>
            <div>
            <input type="text" id="form" placeholder="" onChange={(event)=>(
                (
                setServiceId(event.target.value),
                setServiceName(event.target.value),
                setServiceFee(event.target.value),
                setServiceDescription(event.target.value)
                )
            )}></input>
            <button type="submit" onClick={submitService}>Search</button>
            <button type="reset" onClick={clear}>Clear</button>
            </div>
            <table>
                <tbody>
                <tr><th>Service ID</th><th>Service Name</th><th>Fee</th><th>Description</th></tr>
                {serviceList.map((val)=>{
                    return <tr><td>{val.serviceId}</td><td>{val.sname}</td><td>{val.fee}</td><td>{val.description}</td></tr>
                })}
                </tbody>
            </table>
        </div>
    );

    
}



export default ServicePage;