const makeJournalEntry = (journalEntry) => {
    return `<div class="journalEntry">
        <h2 id="journalDate">${journalEntry.journalDate}</h2>
        <h3 id="conceptsCovered">${journalEntry.conceptsCovered}</h3>
        <p id="journalEntry">${journalEntry.journalContent}</p>
        <h3 id="mood">${journalEntry.moodForDay}</h3>
    </div>
    `
}