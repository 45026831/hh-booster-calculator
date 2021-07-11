import React from "react"
import ClassSelect from "./ClassSelect"
import StatBox from "./StatBox"

import './AlphaStats.css'

class AlphaStats extends React.Component {

    constructor (props) {
        super(props)
        this.state = this.buildStateFromProps(props)
    }

    buildStateFromProps = (props) => {
        console.log('buildStateFromProps: carac:', props.carac, 'alphaCarac:', props.alphaCarac, 'alphaMainStat:', props.alphaMainStat, 'alphaOwnStat:', props.alphaOwnStat)
        let hc, ch, kh

        if (props.carac === 'HC') {
            hc = props.alphaMainStat
        } else if (props.alphaCarac === 'HC') {
            hc = props.alphaOwnStat
        }
        if (props.carac === 'CH') {
            ch = props.alphaMainStat
        } else if (props.alphaCarac === 'CH') {
            ch = props.alphaOwnStat
        }
        if (props.carac === 'KH') {
            kh = props.alphaMainStat
        } else if (props.alphaCarac === 'KH') {
            kh = props.alphaOwnStat
        }


        return {
            hc,
            ch,
            kh
        }
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.setState(this.buildStateFromProps(this.props))
        }
    }

    onClassChange = (name, value) => {        
        console.log('onClassChange: name:', name, 'value:', value, 'carac:', this.props.carac, 'alphaCarac:', this.props.alphaCarac)
        // Was WCA, now RCA, overwrite alphaOwnStat
        if (this.props.carac !== this.props.alphaCarac && this.props.carac === value) {
            this.props.onChange('alphaOwnStat', this.props.alphaMainStat)
        }

        this.props.onChange(name, value)
    }

    onChange = (stat, value) => {
        if (stat.toUpperCase() === this.props.carac) {
            this.props.onChange('alphaMainStat', value)
        }
        if (stat.toUpperCase() === this.props.alphaCarac) {
            this.props.onChange('alphaOwnStat', value)
        }
    }

    render = () => (
        <div className={'AlphaStats hh_tooltip_new new_girl_tooltip rarity-styling common-border'}>
            <h5 className={'common-text'}>Opponent's Alpha</h5>
            <div className={'AlphaStats-layout'} >
                <ClassSelect name={'alphaCarac'} carac={this.props.alphaCarac} classes={this.props.classes} onChange={this.onClassChange} />
                <div className={'AlphaStats-layout-statsgroup'} >
                    {[this.props.carac, this.props.alphaCarac].includes('HC') && (
                        <StatBox statType={'hc'} value={this.state.hc} onChange={this.onChange} />
                    )}
                    {[this.props.carac, this.props.alphaCarac].includes('CH') && (
                        <StatBox statType={'ch'} value={this.state.ch} onChange={this.onChange} />
                    )}
                    {[this.props.carac, this.props.alphaCarac].includes('KH') && (
                        <StatBox statType={'kh'} value={this.state.kh} onChange={this.onChange} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default AlphaStats