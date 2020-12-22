import React from 'react'
import { NoteScren } from '../notes/NoteScren'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'
import {useSelector} from 'react-redux'

export const JournalScreen = () => {

    const {active} = useSelector( state => state.notes );
    return (
        <div className="journal__main-content
        animate__animated animate__fadeIn animate__fast">
            <Sidebar />

            <main>
                {
                    (active)?
                    <NoteScren />:
                    <NothingSelected />
                }
                
                
            </main>
        </div>
    )
}
