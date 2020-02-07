import journalRenderFunctions from "./entryComponent.js";

const putJournalOnDOM = entries => {
  const entryLog = document.getElementById("entryLog");
  entryLog.innerHTML = "";
  entries.forEach(entry => {
    entryLog.innerHTML += journalRenderFunctions.makeJournalEntry(entry);
  });
};

export default putJournalOnDOM;