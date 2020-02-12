const journalRenderFunctions = {
  makeJournalEntry(journalEntry) {
    return `<div class="journalEntry" id="journalEntry--${journalEntry.id}">
                <h2 id="journalDate">${journalEntry.journalDate}</h2>
                <h3 id="conceptsCovered">${journalEntry.conceptsCovered}</h3>
                <p id="journalEntry">${journalEntry.journalContent}</p>
                <h3 id="mood">${journalEntry.mood.moodName}</h3>
                <div class="buttonDiv">
                <button class="journalButton" id="entryEdit--${journalEntry.id}">Edit</button>
                <button class="journalButton" id="entryDelete--${journalEntry.id}">Delete</button>
                </div>
            </div>`;
  },
  journalEntryMaker(date, concepts, content, moodId) {
    return {
      journalDate: date,
      conceptsCovered: concepts,
      journalContent: content,
      moodId: moodId
    };
  },
  makeJournalFilterButtons(mood) {
    return `<div>
            <input type="radio" name="filterMood" value=${mood.id}> ${mood.moodDescribe}
            </div>`;
  }
};

export default journalRenderFunctions;
