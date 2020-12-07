import React from 'react'

export const JorunalEntry = () => {
    return (
        <div className="journal__entry">
            <div className="journal__entry-picture"
            style={{
                backgroundSize:'cover',
                backgroundImage: 'url(https://ichef.bbci.co.uk/news/800/cpsprodpb/113AC/production/_113427507_solar_orbiter_eui-fullsun01.jpg)'
                }}>
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
