const entryLog = document.getElementById("entryLog")

const makeJournalEntry = (journalEntry) => {
    return `<div class="journalEntry">
        <h2 id="journalDate">${journalEntry.journalDate}</h2>
        <h3 id="conceptsCovered">${journalEntry.conceptsCovered}</h3>
        <p id="journalEntry">${journalEntry.journalContent}</p>
        <h3 id="mood">${journalEntry.moodForDay}</h3>
    </div>
    `
}

fetch("http://localhost:3000/entries") // Fetch from the API
    .then(resp => resp.json())  // Parse as JSON
    .then(entries => {
        entries.forEach(entry => {
            entryLog.innerHTML += makeJournalEntry(entry)
        })
        // What should happen when we finally have the array?
    })