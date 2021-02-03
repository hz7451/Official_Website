import React from 'react'
import './background.css'

function Background({ headline, content }) {
    return (
        <div className="container">
            <div class="content2">
                <h1>{headline}</h1>
                <h2>{content}</h2>
            </div>
            <div className="dots"><span /><span /><span /><span /><span /><span /></div>
        </div>
    )
}

export default Background
