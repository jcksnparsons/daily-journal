const journalEntry1 = {
    journalDate: "2020-01-17",
    conceptsCovered: "Functions in Javascript",
    journalEntry: "My brain feels like a large bowl of mashed potatoes.",
    moodForDay: "flustered",
}

let journalCollection = []

function addJournalEntry(journalEntry) {
    journalCollection.push(journalEntry);
    console.log(journalEntry);
}

const journalEntry2 = {
    journalDate: "2020-01-16",
    conceptsCovered: "Objects in javascript",
    journalEntry: "Actually not too bad. Objects seem a lot less scary after today.",
    moodForDay: "notSoBad",
}

const journalEntry3 = {
    journalDate: "2020-01-15",
    conceptsCovered: "jQuery and manipulating the DOM",
    journalEntry: "Wow, the DOM now seems way less terrifying. Glad I'm starting to pick things up!",
    moodForDay: "prettyGood",
}

addJournalEntry(journalEntry1);
addJournalEntry(journalEntry2);
addJournalEntry(journalEntry3);

console.log(journalCollection)