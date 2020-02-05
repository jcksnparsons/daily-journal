const journalRenderFunctions = {

    makeJournalEntry(journalEntry) {
        return `<div class="journalEntry" id="journalEntry--${journalEntry.id}">
        <h2 id="journalDate">${journalEntry.journalDate}</h2>
        <h3 id="conceptsCovered">${journalEntry.conceptsCovered}</h3>
        <p id="journalEntry">${journalEntry.journalContent}</p>
        <h3 id="mood">${journalEntry.moodForDay}</h3>
        <button id="entryDelete--${journalEntry.id}">Delete</button>
    </div>
    `
    },

    journalEntryMaker(date, concepts, content, mood) {
        return {
            "journalDate": date,
            "conceptsCovered": concepts,
            "journalContent": content,
            "moodForDay": mood
        }
    }
}

export default journalRenderFunctions