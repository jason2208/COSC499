import Axios from "axios";
import React, { useEffect, useState } from "react";




function TransactionPage() {
    const [clientId, setClientId]=useState("");
    const [healerId, setHealerId]=useState("");
    const [tdate, setTransactionDate]=useState("");
    const [amount, setTransactionAmount]=useState("");
    const [transactionList,setTransactionList]=useState([]);


    useEffect(()=>{
        Axios.get("http://localhost:3001/Transaction/getTransaction").then((response)=>{
        console.log(response.data);
        setTransactionList(response.data);
    })
    },[])

    const submitTransaction=()=>{
        if(document.getElementById("clientId").selected){
            Axios.post("http://localhost:3001/Transaction/searchTransaction",{
                clientId: clientId,
            }).then(()=>{
                alert("successfully get.");
            })
        }
        if(document.getElementById("healerId").selected){
            Axios.post("http://localhost:3001/Transaction/searchTransaction",{
                healerId: healerId,
            }).then(()=>{
                alert("successfully get.");
            })
        }if(document.getElementById("tdate").selected){
            Axios.post("http://localhost:3001/Transaction/searchTransaction",{
                tdate: tdate
            }).then(()=>{
                alert("successfully get.");
            })
        }if(document.getElementById("amount").selected){
            Axios.post("http://localhost:3001/Transaction/searchTransaction",{
                amount: amount,
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
                <option id="tdate" value="Date">Date</option>
                <option id="amount" value="Amount">Amount</option>
            </select>
            <div>
            <input type="text" id="form" placeholder="" onChange={(event)=>(
                (
                setClientId(event.target.value),
                setHealerId(event.target.value),
                setTransactionDate(event.target.value),
                setTransactionAmount(event.target.value)
                )
            )}></input>
            <button type="submit" onClick={submitTransaction}>Search</button>
            <button type="reset" onClick={clear}>Clear</button>
            </div>
            <table>
                <tbody>
                <tr><th>Client ID</th><th>Healer ID</th><th>Date</th><th>Amount</th></tr>
                {transactionList.map((val)=>{
                    return <tr><td>{val.clientId}</td><td>{val.healerId}</td><td>{val.tdate}</td><td>{val.amount}</td></tr>
                })}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionPage;