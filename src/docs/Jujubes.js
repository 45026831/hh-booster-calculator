import React from "react"

class Jujubes extends React.Component {
    render = () => (
        <div className={'Jujubes'}>
            <h3>Jujubes</h3>
            <hr></hr>
            <p>
                Jujubes provides a boost to the player's harmony stat, so this calculator uses the information provided to calculate what the harmony stat <em>should</em> be. The harmony stat is calculated from the player's Tertiary stat, player level, the equips setup (see <i>Equips</i>), and the club bonus.
            </p>
            <p>
                
            </p>
            <p>
                The equips estimate is calculated as:<br/>rainbowCount &middot; ceil(90 + (level &middot; 9.1))
            </p>
            <p>
                The expected harmony stat (unrounded) is then calculated as:<br/>((tertiary &middot; 0.5) + equipHarmony) &middot; clubBonus
            </p>
            <p>
                Where:
                <ul>
                    <li>90 - Base harmony of a rainbow equip</li>
                    <li>9.1 - per-level harmony of a rainbow equip, with allowance for variance included</li>
                </ul>
                To then match how stats are displayed in-game, the result of this formula is then rounded up to the next 100.
            </p>
            <div className={'gotchas'}>
                GOTCHAS:
                <ol>
                    <li>This calculation requires that the equip stat estimation is accurate (see <i>Equips</i> GOTCHA 2). If this is not the case, this calculation cannot be trusted as accurate.</li>
                    <li>If you notice that the calculation shows that the player has a small amount of Jujubes and no other booster, double check the equips as this is sometimes an indicator that the calculator has overestimated the number of monostats.</li>
                </ol>
            </div>
        </div>
    )
}

export default Jujubes