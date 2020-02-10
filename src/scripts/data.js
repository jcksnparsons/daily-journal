const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries").then(resp => resp.json());
  },
  postNewEntry(newJournalEntry) {
    return fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJournalEntry)
    });
  },
  updateEntry(entry) {
    return fetch(`http://localhost:3000/entries/${entry.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    })
      .then(resp => resp.json())
      .then(() => {
        document.querySelector("#journalId").value = ""
      });
  },
  deleteEntry(entryId) {
    return fetch(`http://localhost:3000/entries/${entryId}`, {
      method: "DELETE"
    });
  }
};

export default API;