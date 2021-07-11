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
            alphaMainStat: 5616,
            alphaCarac: 'CH',
            alphaOwnStat: 5616
        }
    }

    onChange = (key, value) => {
        console.log('onChange', key, value)
        this.setState({
            [key]: value
        })
    }

    render = () => (
        <div className={'Calculator'}>
                <div className="player_block expanded">
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
                    
                </div>
            <Results stats={this.state}/>
        </div>
    )
}

export default Calculator