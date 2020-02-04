const API = {
    getJournalEntries() {
        return fetch("http://localhost:3000/entries")
            .then(resp => resp.json())
        },
    postNewEntry(newJournalEntry) {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
    }
    }

export default API