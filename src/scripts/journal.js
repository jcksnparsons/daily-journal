import API from './data.js'
import putJournalOnDOM from './entriesDOM.js'

API.getJournalEntries().then(putJournalOnDOM)

const recordEntryButton = document.querySelector("#recordEntryButton")
const journalDate = document.querySelector("#journalDate")
const conceptsCovered = document.querySelector("#conceptsCoveredBox")
const journalContent = document.querySelector("#journalContent")
const moodForDay = document.getElementsByName("mood")

const moodChecker = (moodForDay) => {
    for (let i = 0; i < moodForDay.length; i++) {
        if (moodForDay[i].checked === true) {
            return moodForDay[i].value;
        }
    }
}

const journalEntryMaker = (date, concepts, content, mood) => {
    return {
        "journalDate": date,
        "conceptsCovered": concepts,
        "journalContent": content,
        "moodForDay": mood
    }
}

recordEntryButton.addEventListener('click', event => {
    const newJournalEntry = journalEntryMaker(journalDate.value, conceptsCovered.value, journalContent.value, moodChecker(moodForDay))
    fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
})


