import React from 'react'
import {Helmet} from "react-helmet";

// Get a client instance using your API Key 
var Datelist = require("../index");
let client = Datelist.client("GYoEMiHNvKEBNMdtpXc9TwGb");

// You can now use the client to retrieve or edit data from Datelist
let calendars = await client.list_calendars(); 
let products = await client.list_products({ calendar_id: 441, name: "Table" }); 
let slots = 
await client.list_booked_slots({
  email: "test@test.com",
  calendar_id: 441,
  from: "2021-08-04T04:51:59.945Z",
  to: "2021-08-30T04:51:59.945Z",
})
; 

console.log(calendars); 
console.log(products); 
console.log(slots); 

console.log(await client.update_booked_slot(slots[0].id, {email: 'test2@test.com'})); 
console.log(await client.update_booked_slot(slots[0].id, {email: 'test@test.com'})); 

const str=`<p>444</p><script type="text/javascript" src="https://datelist.io/dist/datelist/1.3.6/js/app.js"></script>
            <div><div id="dlist"></div></div>
            <script type="text/javascript">dlist('a75b583b-e2d1-4241-9dd8-9debd5f705cb');</script>
            <p>123</p>`;
class Booking extends React.Component{
    render(){
        return(
            <tbody>
                <div> 
                    <div> 
                        <script type="text/javascript" src="https://datelist.io/dist/datelist/1.3.6/js/app.js"/>
                        <div><div id="dlist"></div></div>
                        <script type="text/javascript">dlist("a75b583b-e2d1-4241-9dd8-9debd5f705cb");</script>
                    </div>
                </div>
            </tbody>
        );
    }
}

export default Booking