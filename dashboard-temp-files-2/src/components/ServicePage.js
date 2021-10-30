function ServicePage() {
    return (
        <div>
            <p>Search Options</p>
            <input type="text" placeholder="Service ID"></input>
            <input type="text" placeholder="Service Name"></input>
            <p>Lower Amount</p>
            <input type="text" placeholder="$"></input>
            <p>Upper Amount</p>
            <input type="text" placeholder="$"></input>
            <p>Start Date</p>
            <input type="text" placeholder="YYYY:MM:DD"></input>
            <p>End Date</p>
            <input type="text" placeholder="YYYY:MM:DD"></input>
            <p>Status</p>
            <p>Selection Options</p>
            <button>Clear</button>
            <button>Delete</button>
            <table>
                <tr><th>Service ID</th><th>Service Name</th><th>Hourly Fee</th><th>Description</th><th>Creation Date</th></tr>
                <tr></tr>
                <tr></tr>
            </table>
        </div>
    );
}

export default ServicePage;