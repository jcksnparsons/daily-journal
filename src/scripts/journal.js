import API from "./data.js";
import domFunctions from "./entriesDOM.js";
import events from "./events.js";

API.getJournalEntries().then(domFunctions.putJournalOnDOM);
API.getMoods().then(domFunctions.putMoodButtonsOnDOM).then(events.filterByMood)

events.recordEntry();
events.editEntry();
events.searchEntries();
events.deleteEntry();