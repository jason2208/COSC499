import React, {useState} from 'react'
import './dropdown.css'
import { Tags } from "./tags";
import { Regions } from "./Regions.js";
import { Services } from "./Services";

function Dropdown(props){
    return(
<div>
    <div className="navbar">
        <ul className="navbar-nav"> {props.children }</ul>
    </div>
</div>
    );
}
export default Dropdown
function DropdownItem(props){



    const [open,setOpen] = useState(false);

    return(
        <li className="nav-item">
            <a href='#' className="icon-button" onClick={()=> setOpen(!open)}>
                {props.icon}
                { open }
            </a>
            {open && props.children}
        </li>
    )
}
export {DropdownItem}

function DropdownMenu1(){
    function DropdownMenuOption(props){

        return(
                <a href='#' className="menu-option">
                    <span className="icon-button">
                        <img className="dropdownImg" src={require("../../Images/Services/"+ props.children +".png")}></img>
                        </span>
                    {props.children}
                </a>
        );}

    return(
        <div className="dropdown1">
         {Regions.map((item,index)=>{
            return (
            <DropdownMenuOption leftIcon={item.name}>{item.name}</DropdownMenuOption>
            )
        })};
    
        </div>
    )
}
export {DropdownMenu1}

function DropdownMenu2(){
    function DropdownMenuOption(props){

        return(
                <a href='#' className="menu-option">
                    <span className="icon-button">
                        <img className="dropdownImg" src={require("../../Images/Services/"+ props.children +".png")}></img>
                        </span>
                    {props.children}
                </a>
        );}

    return(
        <div className="dropdown2">
         {Services.map((item,index)=>{
            return (
            <DropdownMenuOption leftIcon={item.name}>{item.name}</DropdownMenuOption>
            )
        })};
    
        </div>
    )
}
export {DropdownMenu2}

function DropdownMenu3(){
    function DropdownMenuOption(props){

        return(
                <a href='#' className="menu-option">
                    <span className="icon-button">
                        <img className="dropdownImg" src={require("../../Images/Services/"+ props.children +".png")}></img>
                        </span>
                    {props.children}
                </a>
        );}

    return(
        <div className="dropdown3">
         {Tags.map((item,index)=>{
            return (
            <DropdownMenuOption leftIcon={item.name}>{item.name}</DropdownMenuOption>
            )
        })};
    
        </div>
    )
}
export {DropdownMenu3}