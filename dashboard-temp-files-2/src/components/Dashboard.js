import NavigationBar from "./NavigationBar.js";
import ClientPage from "./ClientPage.js";
import HealerPage from "./HealerPage.js";
import AppointmentPage from "./AppointmentPage.js";
import TransactionPage from "./TransactionPage.js";
import ServicePage from "./ServicePage.js";
import ReviewPage from "./ReviewPage.js";

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function Dashboard() {
    return (
        <Router>
            <h1>Control Dashboard</h1>
            <Redirect to="/Client" />
            <NavigationBar />
            <Route path="/Client" component={ClientPage}/>
            <Route path="/Healer" component={HealerPage}/>
            <Route path="/Appointment" component={AppointmentPage}/>
            <Route path="/Transaction" component={TransactionPage}/>
            <Route path="/Service" component={ServicePage}/>
            <Route path="/Review" component={ReviewPage}/>
        </Router>

    );
}

export default Dashboard;