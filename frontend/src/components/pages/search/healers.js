import React, {} from "react";
import { Link } from "react-router-dom";
import './search.css'
import './healerFrame.css'
import healerData from './healer-data.js'
import Dropdown, {DropdownItem,DropdownMenu1,DropdownMenu2,DropdownMenu3} from '../../dropdown/Dropdown';
import {ReactComponent as Down } from '../../../Images/icons/down.svg';


class healers extends React.Component{
 constructor(props) {
    super(props)
    this.state = {
      expandedTicket: false,
      healer: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick( healer , healerState) {
    return function() {
      //console.log(healer);
      //
      if(healer != null){
      healerState.setState( { healer: healer },
      function(){
      console.log(healerState.state.healer);
      healerState.setState({ expandedTicket: !healerState.expandedTicket, });
      });
      //console.log(healerState.healer);
    }
  else{
    healerState.setState({ expandedTicket: !healerState.expandedTicket, });
  };
  };
}

testClick(){
  console.log("You Selected:  ");
}


exitClick(healerState) {
  return function() {

    healerState.setState({ expandedTicket: !healerState.state.expandedTicket,});

  }
}

  render(){

  
    return(
      <div>
{(() => {
if(this.state.expandedTicket){ return(


<div className="healerClicked">
<div className="singleHealer"> {this.state.healer.name} 
<div className="exit">
            <button className="exitButton" onClick={this.exitClick(this)}>
              close
            </button>
              </div>

           
                
            <div   className="healerSelected" >
              
                  
                  <div className = "healerSelectedColumn1">
                    <img class="img_healerSelected" src={require("../../../Images/" + this.state.healer.id +".jpg" )}/>
                  </div>
                  <div className = "healerSelectedrColumn2">
                    <div className="healerSelectedTop">
                      <p>{this.state.healer.name}</p>
                      
                    </div>
                    <div className="healerSelectedMiddle">
                      <p>{this.state.healer.service}</p>
                    </div>
                    <hr/>
                    <div className="healerSelectedBottom">
                    <div className='icons'>
                      <div className="icons">
                      
                      </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="description">
                  <p>{this.state.healer.description}</p>
                  </div>
                  </div>
                  <div className='right_frame'>
                <div className='center_bar'> 



            </div>
       
            </div>
               
        



</div> 
</div>


);}
})()}

      <div className="top_left">
        <div className="healerResults">
          <div className="page-deets">
            <img class="img_region" src={require("../../../Images/regions/" + "toronto" +".jpg" )}/>
            <h1>Toronto</h1>
            <div className="sortBar">
     
               <Dropdown>
                <p>City</p>
                <DropdownItem icon={ <Down /> }>
                    <DropdownMenu1></DropdownMenu1>
                </DropdownItem>
                <p>Services</p>
                <DropdownItem icon={ <Down /> }>
                    <DropdownMenu2></DropdownMenu2>
                </DropdownItem>
                <p>Tags</p>
                <DropdownItem icon={ <Down /> }>
                    <DropdownMenu3></DropdownMenu3>
                </DropdownItem>
               </Dropdown>
        
            </div>
              <hr/>
          </div>
        </div>
      
      <div className="users">
        {healerData.map(
           (healer,key) =>{
             return(
              <li key={healer.id} >

                <div   className="healer" crap={`row ${this.state.expandedTicket ? 'healer-selected' : 'healer'}`}
                  onClick={this.handleClick(healer,this) }>
                  
                  <div className = "healerColumn1">
                    <img class="img_healer" src={require("../../../Images/" + healer.id +".jpg" )}/>
                  </div>
                  <div className = "healerColumn2">
                    <div className="healerTop">
                      <p>{healer.name}</p>
                      <div className='icons'>
                        <img class="icon1" src={require("../../../Images/icons/1.png" )}/>
                        <img class="icon" src={require("../../../Images/icons/2.png" )}/>
                        <img class="icon" src={require("../../../Images/icons/3.png" )}/>
                      </div>
                    </div>
                    <div className="healerMiddle">
                      <p>{healer.service}</p>
                    </div>
                    <hr/>
                    <div className="healerBottom">
                      <p>{healer.description}</p>
                    </div>
                  </div>
               
                </div>
               
        
             </li>
             )
          })
        }
      </div>
    </div>

    

   </div>
   
    );
      
      
  }
}

export default healers