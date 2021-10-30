function TransactionPage() {
    return (
        <div>
            <p>Search Options</p>
            <input type="text" placeholder="Client ID"></input>
            <input type="text" placeholder="Healer ID"></input>
            <input type="text" placeholder="Email"></input>
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
                <tr><th>Client ID</th><th>Healer ID</th><th>Amount</th><th>Date Created</th></tr>
                <tr></tr>
                <tr></tr>
            </table>
        </div>
    );
}

export default TransactionPage;