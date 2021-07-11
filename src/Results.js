import React from "react"
import ResultsMonostats from "./ResultsMonostats"
import ResultsBoosterDisplay from "./ResultsBoosterDisplay"

import './Results.css'

class Results extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            calculated: false,
            adjustedMonostat: false
        }
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.setState({
                calculated: false,
                adjustedMonostat: false
            })
        }
    }

    calculate = () => {

        const {
            clubBonus,
            level,
            carac,
            ego,
            hc: hcStr,
            ch: chStr,
            kh: khStr,
            end: endStr,
            attack: attackStr,
            harmony: harmonyStr,
            alphaMainStat,
            alphaOwnStat
        } = this.props.stats

        let hc, ch, kh, end, attack, harmony, primary, secondary, tertiary, 
        monostatCount, chlorella, cordyceps, ginseng, jujubes

        hc = cleanUpAbbreviatedNumStr(hcStr)
        ch = cleanUpAbbreviatedNumStr(chStr)
        kh = cleanUpAbbreviatedNumStr(khStr)
        end = cleanUpAbbreviatedNumStr(endStr)
        attack = cleanUpAbbreviatedNumStr(attackStr)
        harmony = cleanUpAbbreviatedNumStr(harmonyStr)

        switch(carac){
            case 'HC':
                primary = hc
                secondary = kh
                tertiary = ch
                break
            case 'CH':
                primary = ch
                secondary = hc
                tertiary = kh
                break
            case 'KH':
                primary = kh
                secondary = ch
                tertiary = hc
                break
            default:
        }

        if (!this.state.calculated) {
            // only calculate monostats if we haven't estimated before
            monostatCount = this.calculateMonostatCount(primary, secondary)
        } else {
            monostatCount = this.state.monostatCount
        }

        chlorella = this.calculateChlorella(ego, end, alphaOwnStat)
        cordyceps = this.calculateCordyceps(attack, primary, alphaMainStat)
        ginseng = this.calculateGinseng(primary, clubBonus, level, monostatCount)
        jujubes = this.calculateJujubes(harmony, clubBonus, level, monostatCount, tertiary)
        
        this.setState({
            calculated: true,
            monostatCount,
            chlorella,
            cordyceps,
            ginseng,
            jujubes
        })
    }

    calculateMonostatCount = (primary, secondary) => {
        const statRatio = secondary / primary
        // 7+30 - Base secondary stat
        // 9+30 - Base primary stat
        // 7 - per-level of rainbow
        // 6 - max potential monostat
        // 11 - per-level of monostat
        // 4 - difference per-level between monostat and rainbow
        return Math.max(Math.min(Math.round(
            ((7+30+(7*6)) - ((9+30+(6*7)) * statRatio))
            /
            ((4 * statRatio) + 7)
        ), 6), 0)
    }

    calculateChlorella = (ego, end, alphaOwnStat) => {
        const expected = end + (11 * alphaOwnStat)

        return {
            expected,
            actual: ego
        }
    }

    calculateCordyceps = (attack, primary, alphaMainStat) => {
        const expectedUnrounded = primary + (3 * alphaMainStat)
        const expected = roundUpToNextHundred(expectedUnrounded)
        return {
            expected,
            actual: attack
        }
    }

    calculateGinseng = (primary, clubBonus, level, monostatCount) => {
        const varianceMultiplier = 1 + (level * 0.00005) // 2.5% at level 500
        const expectedUnrounded = (level * (9 + 30 + ((7 * (6 - monostatCount)) + (11 * monostatCount)) * varianceMultiplier)) * clubBonus 
        const expected = roundUpToNextHundred(expectedUnrounded)
        return {
            expected,
            actual: primary
        }
    }

    calculateJujubes = (harmony, clubBonus, level, monostatCount, tertiary) => {
        const expectedUnrounded = ((tertiary * 0.5) + ((6 - monostatCount) * Math.ceil(90 + (level * 9.1)))) * clubBonus
        const expected = roundUpToNextHundred(expectedUnrounded)
        return {
            expected,
            actual: harmony
        }
    }

    changeMonostatCount = (count) => {
        console.log('changeMonostatCount:', count)
        this.setState({
            monostatCount: count,
            adjustedMonostat: true
        })

        this.calculate()
    }

    render = () => (
        <div className="Results">
            <div className="player_block expanded">
                <div className="challenge">
                    <button className="blue_button_L" onClick={this.calculate} disabled={this.state.calculated}>Calculate</button>
                </div>
                {this.state.calculated &&
                    <>
                        <ResultsMonostats carac={this.props.stats.carac} monostatCount={this.state.monostatCount} adjustedMonostat={this.state.adjustedMonostat} changeMonostatCount={this.changeMonostatCount} />
                        <div className="Results-boosters">
                            {
                                ['ginseng', 'jujubes', 'chlorella', 'cordyceps'].map(booster => (
                                    <ResultsBoosterDisplay key={booster} booster={booster} result={this.state[booster]} />
                                ))
                            }
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

const cleanUpAbbreviatedNumStr = (numberString) => {
    return (numberString.includes('.') || numberString.includes(',')) ? parseInt(numberString.replace('K', '00').replace(/[^0-9]/gi, ''), 10) : parseInt(numberString.replace('K', '000').replace(/[^0-9]/gi, ''), 10);
}

const roundUpToNextHundred = (num) => {
    return Math.ceil(num / 100) * 100
}

export default Results