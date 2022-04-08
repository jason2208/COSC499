import React from 'react'
import {Button} from '../Button/button';
import Dropdown, {DropdownItem,DropdownMenu1,DropdownMenu2,DropdownMenu3} from '../dropdown/Dropdown';
import {ReactComponent as Down } from '../../Images/icons/down.svg'

class Services extends React.Component{
    render(){
        return(
        <div className=''>
            <div className="">
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
        </div>
);
}
}

export default Services