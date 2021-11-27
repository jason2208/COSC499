import Axios from "axios";
import React, { useEffect, useState } from "react";


function HealerPage() {
    const [healerId, setHealerId]=useState("");
    const [hname, setHealerName]=useState("");
    const [hemail, setHealerEmail]=useState("");
    const [haddress, setHealerAddress]=useState("");
    const [healerList,setHealerList]=useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/Healer/getHealer").then((response)=>{
        console.log(response.data);
        setHealerList(response.data);
    })
    },[])

    const submitHealer=()=>{
        if(document.getElementById("healerId").selected){
            Axios.post("http://localhost:3001/Healer/searchHealer",{
                healerId: healerId,
            }).then(()=>{
                alert("successfully get.");
            })
        }
        if(document.getElementById("hname").selected){
            Axios.post("http://localhost:3001/Healer/searchHealer",{
                hname: hname,
            }).then(()=>{
                alert("successfully get.");
            })
        }if(document.getElementById("hemail").selected){
            Axios.post("http://localhost:3001/Healer/searchHealer",{
                hemail: hemail,
            }).then(()=>{
                alert("successfully get.");
            })
        }if(document.getElementById("haddress").selected){
            Axios.post("http://localhost:3001/Healer/searchHealer",{
                haddress: haddress
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
                <option id="healerId" value="Healer ID">Healer ID</option>
                <option id="hname" value="Name">Name</option>
                <option id="hemail" value="Email">Email</option>
                <option id="haddress" value="Address">Address</option>
            </select>
            <div>
            <input type="text" id="form"  placeholder="" onChange={(event)=>(
                (
                setHealerId(event.target.value),
                setHealerName(event.target.value),
                setHealerEmail(event.target.value),
                setHealerAddress(event.target.value)
                )
            )}></input>
            <button type="submit" onClick={submitHealer}>Search</button>
            <button type="reset" onClick={clear}>Clear</button>
            </div>
            {/* <p>Selection Options</p>
            <button>Clear</button>
            <button>Disable</button>
            <button>Delete</button> */}
            <table>
                <tbody>
                <tr><th>Healer ID</th><th>Full Name</th><th>Email</th><th>Address</th><th>City</th><th>Province</th></tr>
                {healerList.map((val)=>{
                    return <tr><td>{val.healerId}</td><td>{val.hname}</td><td>{val.hemail}</td><td>{val.address}</td><td>{val.city}</td><td>{val.province}</td></tr>
                })}
                </tbody>
            </table>
        </div>
    );
}

export default HealerPage;