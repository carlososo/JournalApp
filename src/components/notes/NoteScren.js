import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScren = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
               
                    <input type="text" placeholder="Some Awesome title" className="notes__title-input" autoComplete="off"/>
                    <textarea name="" placeholder="what happened today?" className="notes__textarea">

                    </textarea>
                    <div className="notes__image">
                        <img src="https://mymodernmet.com/wp/wp-content/uploads/2020/02/international-landscape-photographer-of-the-year-thumbnail.jpg" alt="landscapes"/>
                    </div>
            </div>
        </div>
    )
}
