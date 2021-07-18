import React from "react"

import './DocsContainer.css'
import Equips from "./Equips"
import Ginseng from "./Ginseng"

class DocsContainer extends React.Component {
    render = () => (
        <div className={'DocsContainer'}>
            <h2>How does this work?</h2>
            <hr></hr>
            <p>This calculator uses the player stats presented to determine which (if any) booster types are being used by comparing the stats against each other. Below is an explanation of how each booster is calculated and the 'gotchas' to look out for when using this tool.</p>
            <Equips/>
            <Ginseng/>
            TODO
        </div>
    )
}

export default DocsContainer