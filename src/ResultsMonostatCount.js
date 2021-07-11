import React from "react"

import './ResultsMonostatCount.css'

class ResultsMonostatCount extends React.Component {


    render = () => {
        const caracs = [
            ...Array(this.props.count).fill(this.props.carac),
            ...Array(6 - this.props.count).fill('rainbow')
        ]
        return (
            <div className="ResultsMonostatCount">
                {caracs.map((carac, i) => (
                    <span key={i} className={`ResultsMonostatCount-carac ${carac}`}></span>
                ))}
            </div>
        )
    }
}

export default ResultsMonostatCount