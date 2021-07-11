import React from "react"
import Slider from "react-input-slider"
import ResultsMonostatCount from "./ResultsMonostatCount"

import './ResultsMonostats.css'

class ResultsMonostats extends React.Component {

    onSliderChange = ({x}) => {
        this.props.changeMonostatCount(x)
    }

    render = () => (
        <div className="ResultsMonostats">
            <div className="ResultsMonostats-count">
                <span>Equips{this.props.adjustedMonostat ? "" : " (estimated)"}</span>
                <ResultsMonostatCount count={this.props.monostatCount} carac={this.props.carac} />
            </div>
            <span>Adjust if necessary</span>
            <div className="ResultsMonostats-adjust">
                <ResultsMonostatCount count={0} carac={this.props.carac} />
                <Slider className={`ResultsMonostats-adjust-slider ${this.props.carac}`} x={this.props.monostatCount} xmin={0} xmax={6} xstep={1} onChange={this.onSliderChange} />
                <ResultsMonostatCount count={6} carac={this.props.carac} />
            </div>
        </div>
    )
}

export default ResultsMonostats