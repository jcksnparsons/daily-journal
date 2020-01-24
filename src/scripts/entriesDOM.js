const putJournalOnDOM = (entries) => {
    const entryLog = document.getElementById("entryLog")
    entries.forEach(entry => {
        entryLog.innerHTML += makeJournalEntry(entry)
    })
}

    