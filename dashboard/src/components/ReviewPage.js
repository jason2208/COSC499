import Axios from "axios";
import React, { useEffect, useState } from "react";


function ReviewPage() {
    const [reviewId, setReviewId]=useState("");
    const [clientId, setClientId]=useState("");
    const [healerId, setHealerId]=useState("");
    const [rating, setReviewRating]=useState("");
    const [reviewList,setReviewList]=useState([]);


    useEffect(()=>{
        Axios.get("http://localhost:3001/Review/getReview").then((response)=>{
        console.log(response.data);
        setReviewList(response.data);
    })
    },[])

    const submitReview=()=>{
        if(document.getElementById("reviewId").selected){
            Axios.post("http://localhost:3001/Review/searchReview",{
                reviewId: reviewId,
            }).then(()=>{
                alert("successfully get.");
            })
        }
        if(document.getElementById("clientId").selected){
            Axios.post("http://localhost:3001/Review/searchReview",{
                clientId: clientId,
            }).then(()=>{
                alert("successfully get.");
            })
        }if(document.getElementById("healerId").selected){
            Axios.post("http://localhost:3001/Review/searchReview",{
                healerId: healerId,
            }).then(()=>{
                alert("successfully get.");
            })
        }if(document.getElementById("rating").selected){
            Axios.post("http://localhost:3001/Review/searchReview",{
                rating:rating
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
                <option id="reviewId" value="Review ID">Review ID</option>
                <option id="clientId" value="Client ID">Client ID</option>
                <option id="healerId" value="Healer ID">Healer ID</option>
                <option id="rating" value="Rating">Rating(Max 5)</option>
            </select>
            <div>
            <input type="text" id="form" placeholder="" onChange={(event)=>(
                (
                setReviewId(event.target.value),
                setClientId(event.target.value),
                setHealerId(event.target.value),
                setReviewRating(event.target.value)
                )
            )}></input>
            <button type="submit" onClick={submitReview}>Search</button>
            <button type="reset" onClick={clear}>Clear</button>
            </div>
            <table>
                <tbody>
                <tr><th>Review ID</th><th>Client ID</th><th>Healer ID</th><th>Description</th><th>Rating</th></tr>
                {reviewList.map((val)=>{
                    return <tr><td>{val.reviewId}</td><td>{val.clientId}</td><td>{val.healerId}</td><td>{val.description}</td><td>{val.rating}</td></tr>
                })}
                </tbody>
            </table>
        </div>
    );
}

export default ReviewPage;