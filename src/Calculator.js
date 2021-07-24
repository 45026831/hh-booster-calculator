import React from "react";
import PlayerName from "./PlayerName"
import ClubBonus from "./ClubBonus";
import PlayerProfile from "./PlayerProfile";
import EgoBox from "./EgoBox"
import StatsGroup from "./StatsGroup"
import AlphaStats from "./AlphaStats"
import Results from "./Results"

import "./Calculator.css"

const classes = {
    HC: {
        carac: 'class1',
        primary: 'hc',
        secondary: 'kh',
        tertiary: 'ch'
    },
    CH: {
        carac: 'class2',
        primary: 'ch',
        secondary: 'hc',
        tertiary: 'kh'
    },
    KH: {
        carac: 'class3',
        primary: 'kh',
        secondary: 'ch',
        tertiary: 'hc'
    }
}

const classesReverse = {
    1: 'HC',
    2: 'CH',
    3: 'KH'
}

class Calculator extends React.Component {
    constructor () {
        super()
        this.state = {
            clubBonus: 1.1,
            level: 416,
            carac: 'CH',
            ego: 400081,
            hc: '40.3K',
            ch: '41.0K',
            kh: '39.0K',
            end: '339K',
            attack: '69.4K',
            harmony: '45.7K',
            girlStatSum: 5616,
            // alphaCarac: 'CH',
            // alphaOwnStat: 5616,
            playerLeaguesData: null,
            playerLeaguesDataString: ""
        }
    }

    onChange = (key, value) => {
        console.log('onChange', key, value)
        this.setState({
            [key]: value
        })
    }

    onInputBoxChange = (e) => {
        const playerLeaguesDataString = e.target.value
        let playerLeaguesData = null
        const extractedData = {}

        if (playerLeaguesDataString && playerLeaguesDataString.length) {
            try {
                const semiParsedString = JSON.parse(playerLeaguesDataString)
                playerLeaguesData = JSON.parse(semiParsedString)

                const {caracs, team} = playerLeaguesData

                Object.assign(extractedData, {
                    clubBonus: !!playerLeaguesData.club.id_club ? 1.1 : 1.0,
                    level: parseInt(playerLeaguesData.level, 10),
                    carac: classesReverse[playerLeaguesData.class],
                    ego: caracs.ego,
                    hc: caracs.carac1,
                    ch: caracs.carac2,
                    kh: caracs.carac3,
                    end: caracs.endurance,
                    attack: caracs.damage,
                    harmony: caracs.chance,
                    girlStatSum: team.map(({caracs}) => Object.values(caracs).reduce((s,c) => s+c, 0)).reduce((s,c) => s+c, 0),
                })
            } catch (e) {
                console.error(e)
            }
        }

        console.log(extractedData)

        this.setState({
            playerLeaguesData,
            playerLeaguesDataString,
            ...extractedData
        })
    }

    render = () => (
        <div className={'Calculator'}>
            {/* <div className="player_block expanded">
                <PlayerName />
                <ClubBonus clubBonus={this.state.clubBonus} onChange={this.onChange} />
                <PlayerProfile carac={this.state.carac} classes={classes} level={this.state.level} onChange={this.onChange}/>
                <EgoBox ego={this.state.ego} onChange={this.onChange}/>
                <StatsGroup stats={{
                    hc: this.state.hc,
                    ch: this.state.ch,
                    kh: this.state.kh,
                    end: this.state.end,
                    attack: this.state.attack,
                    harmony: this.state.harmony,

                }} onChange={this.onChange} />
                <AlphaStats carac={this.state.carac} alphaCarac={this.state.alphaCarac} alphaMainStat={this.state.alphaMainStat} alphaOwnStat={this.state.alphaOwnStat} classes={classes} onChange={this.onChange} />
                
            </div> */}
            <div className={'Calculator-playerLeaguesData'}>
                <textarea onChange={this.onInputBoxChange}></textarea>
            </div>
            <Results stats={this.state}/>
        </div>
    )
}

export default Calculator