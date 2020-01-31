const API = {
    getJournalEntries() {
        return fetch("http://localhost:3000/entries")
            .then(resp => resp.json())
        }
    }

export default API