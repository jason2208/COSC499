function AppointmentPage() {
    return (
        <div>
            <p>Search Options</p>
            <input type="text" placeholder="Client ID"></input>
            <input type="text" placeholder="Healer ID"></input>
            <input type="text" placeholder="Service ID"></input>
            <p>Start Date</p>
            <input type="text" placeholder="YYYY:MM:DD"></input>
            <p>End Date</p>
            <input type="text" placeholder="YYYY:MM:DD"></input>
            <input type="text" placeholder="Location"></input>
            <p>Selection Options</p>
            <button>Clear</button>
            <button>Delete</button>
            <table>
                <tr><th>Client ID</th><th>Healer ID</th><th>Service ID</th><th>Start Date</th><th>End Date</th><th>Location</th><th>Date Created</th></tr>
                <tr></tr>
                <tr></tr>
            </table>
        </div>
    );
}

export default AppointmentPage;