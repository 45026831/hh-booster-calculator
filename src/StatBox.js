import React from "react"
import Input from "./Input"

const statTypes = {
    hc: {
        carac: '1'
    },
    hcdef: {
        carac: 'def1',
        disabled: true
    },
    ch: {
        carac: '2'
    },
    chdef: {
        carac: 'def2',
        disabled: true
    },
    kh: {
        carac: '3'
    },
    khdef: {
        carac: 'def3',
        disabled: true
    },
    end: {
        carac: 'endurance'
    },
    attack: {
        carac: 'damage'
    },
    excit: {
        carac: 'excit',
        disabled: true
    },
    harmony: {
        carac: 'chance'
    }
}


class StatBox extends React.Component {
    onChange = (key, value) => {
        this.props.onChange(key, value.replace('k', 'K'))
    }

    render = () => {
        const {carac, disabled} = statTypes[this.props.statType]
        return (
        <div className={`StatBox ${disabled ? 'disabled' : ''}`}>
            <span carac={carac}></span>
            <Input name={this.props.statType} value={this.props.value} onChange={this.onChange} disabled={disabled} />
        </div>
    )}
}

export default StatBox