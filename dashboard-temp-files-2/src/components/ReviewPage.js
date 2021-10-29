function ReviewPage() {
    return (
        <div>
            <p>Search Options</p>
            <input type="text" placeholder="Client ID"></input>
            <input type="text" placeholder="Healer ID"></input>
            <input type="text" placeholder="Service ID"></input>
            <p>Lower Rating</p>
            <input type="text" placeholder="1-5"></input>
            <p>Upper Rating</p>
            <input type="text" placeholder="1-5"></input>
            <p>Selection Options</p>
            <button>Clear</button>
            <button>Delete</button>
            <table>
                <tr><th>Client ID</th><th>Healer ID</th><th>Service ID</th><th>Description</th><th>Rating</th><th>Date Created</th><th>Status</th></tr>
                <tr></tr>
                <tr></tr>
            </table>
        </div>
    );
}

export default ReviewPage;