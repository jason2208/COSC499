function HealerPage() {
    return (
        <div>
            <p>Search Options</p>
            <input type="text" placeholder="Client ID"></input>
            <input type="text" placeholder="Fullname"></input>
            <input type="text" placeholder="Email"></input>
            <p>Start Date</p>
            <input type="text" placeholder="YYYY:MM:DD"></input>
            <p>End Date</p>
            <input type="text" placeholder="YYYY:MM:DD"></input>
            <p>Status</p>
            <select>
                <option value="Enabled">Enabled</option>
                <option value="Disabled">Disabled</option>
            </select>
            <p>Selection Options</p>
            <button>Clear</button>
            <button>Disable</button>
            <button>Delete</button>
            <table>
                <tr><th>Healer ID</th><th>Full Name</th><th>Email</th><th>City</th><th>Province</th><th>Date Created</th><th>Status</th></tr>
                <tr></tr>
                <tr></tr>
            </table>
        </div>
    );
}

export default HealerPage;