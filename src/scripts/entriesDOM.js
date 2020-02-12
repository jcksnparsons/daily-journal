import journalRenderFunctions from "./entryComponent.js";

const domFunctions = {
  putJournalOnDOM(entries) {
    const entryLog = document.getElementById("entryLog");
    entryLog.innerHTML = "";
    entries.forEach(entry => {
      entryLog.innerHTML += journalRenderFunctions.makeJournalEntry(entry);
    });
  },
  putMoodButtonsOnDOM(buttons) {
    const filterElement = document.querySelector(".filterBox");
    buttons.forEach(button => {
      filterElement.innerHTML += journalRenderFunctions.makeJournalFilterButtons(button)
    })
  }
};

export default domFunctions;
