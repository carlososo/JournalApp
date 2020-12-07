import React from 'react'
import { NoteScren } from '../notes/NoteScren'
// import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            <Sidebar />

            <main>
                {/* <NothingSelected /> */}
                <NoteScren />
            </main>
        </div>
    )
}
