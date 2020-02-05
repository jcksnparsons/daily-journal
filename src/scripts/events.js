import API from './data.js'
import journalRenderFunctions from './entryComponent.js'
import putJournalOnDOM from './entriesDOM.js'



const events = {

    recordEntry() {
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

        recordEntryButton.addEventListener('click', event => {
            const newJournalEntry = journalRenderFunctions.journalEntryMaker(journalDate.value, conceptsCovered.value, journalContent.value, moodChecker(moodForDay))
            API.postNewEntry(newJournalEntry)
                .then(() => {
                    API.getJournalEntries()
                        .then(putJournalOnDOM);
                })
        })
    },

    filterByMood() {
        const filterMoodButtons = document.getElementsByName("filterMood")
        filterMoodButtons.forEach(filterMoodButton =>
            filterMoodButton.addEventListener("click", event => {
                const mood = event.target.value
                API.getJournalEntries().then(arr => {
                    putJournalOnDOM(arr.filter((el => el.moodForDay === mood)))
                })
            })
        )
    },

    deleteEntry() {
        const journalRecord = document.getElementById("entryLog")
        journalRecord.addEventListener("click", event => {
            if (event.target.id.startsWith("entryDelete--")) {
                const deleteButtonId = event.target.id
                const deleteButtonArray = deleteButtonId.split("--");
                const entryToDelete = deleteButtonArray[1];
                

                API.deleteEntry(entryToDelete)
                    .then(API.getJournalEntries)
                    .then(putJournalOnDOM)
            }
        })
    }
}

export default events