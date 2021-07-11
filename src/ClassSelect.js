import React from "react"

import './ClassSelect.css'

class ClassSelect extends React.Component {

    onChange = (evt) => {
        this.props.onChange(this.props.name, evt.target.value)
    }

    render = () => (
        <select className={`ClassSelect icon ${this.props.className}`} value={this.props.carac} onChange={this.onChange} carac={this.props.classes[this.props.carac].carac}>
            {Object.keys(this.props.classes).map(classSpec => (
                <option key={classSpec} value={classSpec}>{classSpec}</option>
            ))}
        </select>
    )
}

export default ClassSelect