const journalEntry1 = {
    journalDate: "2020-01-17",
    conceptsCovered: "Functions in Javascript",
    journalContent: "My brain feels like a large bowl of mashed potatoes.",
    moodForDay: "flustered",
}

let journalCollection = []

function addJournalEntry(journalEntry) {
    journalCollection.push(journalEntry)
}

const journalEntry2 = {
    journalDate: "2020-01-16",
    conceptsCovered: "Objects in javascript",
    journalContent: "Actually not too bad. Objects seem a lot less scary after today.",
    moodForDay: "notSoBad",
}

const journalEntry3 = {
    journalDate: "2020-01-15",
    conceptsCovered: "jQuery and manipulating the DOM",
    journalContent: "Wow, the DOM now seems way less terrifying. Glad I'm starting to pick things up!",
    moodForDay: "prettyGood",
}

const journalEntry4 = {
    journalDate: "2020-01-20",
    conceptsCovered: "mainpulating HTML with javascript functions",
    journalContent: "Today was a solid 50/50. I felt pretty good about things half the time, but also felt like I was looking at hieroglyphics at points. At least I'm not the only one at that point.",
    moodForDay: "notSoBad",
}

addJournalEntry(journalEntry1);
addJournalEntry(journalEntry2);
addJournalEntry(journalEntry3);
addJournalEntry(journalEntry4);

const makeJournalEntry = (journalEntry) => {
    return `<div class="journalEntry">
        <h2 id="journalDate">${journalEntry.journalDate}</h2>
        <h3 id="conceptsCovered">${journalEntry.conceptsCovered}</h3>
        <p id="journalEntry">${journalEntry.journalContent}</p>
        <h3 id="mood">${journalEntry.moodForDay}</h3>
    </div>
    `
}

const entryLog = document.getElementById("entryLog")

const renderJournalEntries = (journalCollection) => {
    for (i = 0; i < journalCollection.length; i++) {
        entryLog.innerHTML += makeJournalEntry(journalCollection[i])
    }
}

renderJournalEntries(journalCollection)