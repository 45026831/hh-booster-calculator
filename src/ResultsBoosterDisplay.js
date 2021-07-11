import React from "react"

import './ResultsBoosterDisplay.css'

const icons = {
    ginseng: 'https://hh.hh-content.com/pictures/items/B1.png',
    jujubes: 'https://hh.hh-content.com/pictures/items/B2.png',
    chlorella: 'https://hh.hh-content.com/pictures/items/B3.png',
    cordyceps: 'https://hh.hh-content.com/pictures/items/B4.png'
}

class ResultsBoosterDisplay extends React.Component {


    render = () => {
        const {booster, result: {expected, actual} } = this.props

        const boosted = actual > expected

        const extra = actual - expected
        const extraPercent = `${Math.round((extra / expected) * 100)}%`

        let expectedDisplay = expected

        if (booster !== 'chlorella' && expected > 10000) {
            expectedDisplay = formatDisplayStat(expected)
        }

        return (
            <div className={`ResultsBoosterDisplay ${boosted ? 'boosted' : 'unboosted'}`}>
                <img className="ResultsBoosterDisplay-icon" src={icons[booster]} alt={booster} />
                <div className="ResultsBoosterDisplay-details" >
                    {boosted && (
                        <>
                            Expected: {expectedDisplay}<br/>
                            Extra: {extra} ({extraPercent})
                        </>
                    )}
                    {!boosted && (
                        <>
                            (None)
                        </>
                    )}
                </div>
            </div>
        )
    }
}

const formatDisplayStat = (num) => {
    return `${(num / 1000).toFixed(1)}K`
}

export default ResultsBoosterDisplay