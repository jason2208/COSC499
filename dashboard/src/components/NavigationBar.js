import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <nav>
            <ul>
                <Link to="/Client"><li>Client</li></Link>
                <Link to="/Healer"><li>Healer</li></Link>
                <Link to="/Appointment"><li>Appointment</li></Link>
                <Link to="/Transaction"><li>Transaction</li></Link>
                <Link to="/Service"><li>Service</li></Link>
                <Link to="/Review"><li>Review</li></Link>
            </ul>
        </nav>
    );
}

export default NavigationBar;