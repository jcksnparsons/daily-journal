import API from './data.js'
import putJournalOnDOM from './entriesDOM.js'

API.getJournalEntries()
    .then(putJournalOnDOM)

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
    API.postNewEntry(newJournalEntry)
        .then(() => {
            API.getJournalEntries()
                .then(putJournalOnDOM);
        })
})

const filterMoodButtons = document.getElementsByName("filterMood")

filterMoodButtons.forEach(filterMoodButton =>
    filterMoodButton.addEventListener("click", event => {
        const mood = event.target.value
        API.getJournalEntries().then(arr => {
            putJournalOnDOM(arr.filter((el => el.moodForDay === mood)))
        })
    })
)