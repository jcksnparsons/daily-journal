import API from './data.js'
import putJournalOnDOM from './entriesDOM.js'

API.getJournalEntries().then(putJournalOnDOM)