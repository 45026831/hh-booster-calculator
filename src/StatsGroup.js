import React from "react"
import StatBox from "./StatBox"

import './StatsGroup.css'

class StatsGroup extends React.Component {
    render = () => (
        <div className={'StatsGroup stats_wrap'}>
            <StatBox statType={'hc'} value={this.props.stats.hc} onChange={this.props.onChange} />
            <StatBox statType={'hcdef'} value={''} />
            <StatBox statType={'ch'} value={this.props.stats.ch} onChange={this.props.onChange} />
            <StatBox statType={'chdef'} value={''} />
            <StatBox statType={'kh'} value={this.props.stats.kh} onChange={this.props.onChange} />
            <StatBox statType={'khdef'} value={''} />
            <StatBox statType={'end'} value={this.props.stats.end} onChange={this.props.onChange} />
            <StatBox statType={'attack'} value={this.props.stats.attack} onChange={this.props.onChange} />
            <StatBox statType={'excit'} value={''} />
            <StatBox statType={'harmony'} value={this.props.stats.harmony} onChange={this.props.onChange} />
        </div>
    )
}

export default StatsGroup