import React from "react"

class Ginseng extends React.Component {
    render = () => (
        <div className={'Ginseng'}>
            <h3>Ginseng</h3>
            <hr></hr>
            <p>
                Ginseng boosts all 3 base stats but, for simplicity's sake, this calculator checks only the player's Primary stat. The main stat is calculated from the player level, the equips setup (see <i>Equips</i>) with a variance multiplier applied, and the club bonus.
            </p>
            <p>
                The variance multiplier is calculated as: 1 + (level &middot; 0.00005) or, in other words, 0.005% variance per level, which works out to 2.5% variance at level 500.
            </p>
            <p>
                The equips estimate is calculated as:<br/>((7 &middot; rainbowCount) + (11 &middot; monostatCount)) &middot; varianceMultiplier
            </p>
            <p>
                The expected main stat (unrounded) is then calculated as:<br/>level &middot; (9 + 30 + equipsMainStat) &middot; clubBonus
            </p>
            <p>
                Where:
                <ul>
                    <li>9+30 - Base Primary stat per-level</li>
                    <li>7 - per-level of rainbow</li>
                    <li>11 - per-level of monostat</li>
                </ul>
                To then match how stats are displayed in-game, the result of this formula is then rounded up to the next 100.
            </p>
            <div className={'gotchas'}>
                GOTCHAS:
                <ol>
                    <li>This calculation requires that the equip stat estimation is accurate (see <i>Equips</i> GOTCHA 2). If this is not the case, this calculation cannot be trusted as accurate.</li>
                    <li>This calculation expects that the player is using equips that are all at their level and applies variance on top of this. As a result, the expected main stat is slightly higher than it would be in most real cases. What this means in practical terms is that the Extra percentage presented will not be exact, and as shown in the example stats, someone with 2 Legendary Ginseng (12% boost) may only show as 9% extra.</li>
                </ol>
            </div>
        </div>
    )
}

export default Ginseng