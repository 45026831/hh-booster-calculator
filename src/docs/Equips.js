import React from "react"

class Equips extends React.Component {
    render = () => (
        <div className={'Equips'}>
            <h3>Equips</h3>
            <hr></hr>
            <p>
                In order to calculate expected Primary Stat (Ginseng) and Harmony (Jujubes), the calculator first needs to know the ratio of Rainbow (Super Sexy) equips vs. Monostat equips.
                When you click the Calculate button, the calculator will estimate the equipment setup by comparing the player's Primary Stat with their Secondary Stat using the following formula:
            </p>
            <p className="equation">
                <span className="top">(7 + 30 + (7 &middot; 6)) - ((9 + 30 + (6 &middot; 7)) &middot; statRatio)</span>
                <span className="divide-by"></span>
                <span className="bottom">(4 &middot; statRatio) + 7</span>
            </p>
            Where:
            <ul>
                <li>statRatio - Secondary stat divided by the Primary stat</li>
                <li>7+30 - Base Secondary stat per-level</li>
                <li>9+30 - Base Primary stat per-level</li>
                <li>7 - per-level of rainbow</li>
                <li>6 - max potential monostat count</li>
                <li>11 - per-level of monostat</li>
                <li>4 - difference per-level between monostat and rainbow</li>
            </ul>
            <p>
                The result of this formula is then rounded to the nearest integer and bounded to be between 0 and 6 to give the count of Monostat equips.
            </p>
            <div className={'gotchas'}>
                GOTCHAS:
                <ol>
                    <li>This calculation expects that the player has either maxed out their market stats or is at least upgrading them evenly if not maxed. If, for example, the opponent has only maxed their primary stat in the market, this will skew the statRatio, leading to an overestimation of the number of monostats. In order to correct this, use the slider provided on the calculator to adjust the equips.</li>
                    <li>This calculation expects that the player has 6 equips that are all Legendary and all either Rainbow or Monostat for their Primary stat. If the opponent has non-Legendary equips, or Monostat equips that are for any stat other than Primary stat, this calculation will not work and the calculator results for Ginseng and Jujubes <em>should not</em> be relied upon.</li>
                </ol>
            </div>
        </div>
    )
}

export default Equips