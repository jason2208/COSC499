import Axios from "axios";
import React, { useEffect, useState } from "react";


function ClientPage() {
    const [clientId, setClientId]=useState("");
    const [cname, setClientName]=useState("");
    const [cemail, setClientEmail]=useState("");
    const [caddress, setClientAddress]=useState("");
    const [clientList,setClientList]=useState([]);



    useEffect(()=>{
        Axios.get("http://localhost:3001/Client/getClient").then((response)=>{
        console.log(response.data);
        setClientList(response.data);
    })
    },[])

    const submitClient=()=>{
        if(document.getElementById("clientId").selected){
            Axios.post("http://localhost:3001/Client/searchClient",{
                clientId: clientId,
            }).then(()=>{
                alert("successfully get.");
            })
        }
        if(document.getElementById("cname").selected){
            Axios.post("http://localhost:3001/Client/searchClient",{
                cname: cname,
            }).then(()=>{
                alert("successfully get.");
            })
        }if(document.getElementById("cemail").selected){
            Axios.post("http://localhost:3001/Client/searchClient",{
                cemail: cemail,
            }).then(()=>{
                alert("successfully get.");
            })
        }if(document.getElementById("caddress").selected){
            Axios.post("http://localhost:3001/Client/searchClient",{
                caddress: caddress
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
                <option id="cname" value="Name">Full Name</option>
                <option id="cemail" value="Email">Email</option>
                <option id="caddress" value="Address">Address</option>
            </select>
            <div>
            <input type="text" id="form"  placeholder="" onChange={(event)=>(
                (
                setClientId(event.target.value),
                setClientName(event.target.value),
                setClientEmail(event.target.value),
                setClientAddress(event.target.value)
                )
            )}></input>
            <button type="submit" onClick={submitClient}>Search</button>
            <button type="reset" onClick={clear}>Clear</button>
            </div>
            {/* <select>
                <option value="Enabled">Enabled</option>
                <option value="Disabled">Disabled</option>
            </select>
            <button>Apply</button>
            <button>Delete</button> */}
            <table>
                <tbody>
                <tr>
                    <th>Client ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Status</th>
                </tr>
                {clientList.map((val)=>{
                    return <tr><td>{val.clientId}</td><td>{val.cname}</td><td>{val.cemail}</td><td>{val.caddress}</td><td>{val.enabled}</td></tr>
                })}
                </tbody>
            </table>
        </div>
    );
}
export default ClientPage;