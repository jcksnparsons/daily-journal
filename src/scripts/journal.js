import API from "./data.js";
import putJournalOnDOM from "./entriesDOM.js";
import events from "./events.js";

API.getJournalEntries().then(putJournalOnDOM);

events.recordEntry();
events.filterByMood();
events.editEntry();
events.deleteEntry();