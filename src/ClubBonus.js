import React from "react"

import './ClubBonus.css'

const options = [
    {
        label: 'No Club',
        value: 1
    },
    {
        label: '5%',
        value: 1.05
    },
    {
        label: '10%',
        value: 1.1
    },
]

class ClubBonus extends React.Component {

    onChange = (evt) => {
        this.props.onChange('clubBonus', parseFloat(evt.target.value))
    }

    render = () => (
        <div className={'ClubBonus clubs_title'}>
            {options.map((option, i) => (
                <label key={i}>
                    <input type={'radio'} name={'clubBonus'} value={option.value} checked={option.value === this.props.clubBonus} onChange={this.onChange} />
                    <span>{option.label}</span>
                </label>
            ))}
        </div>
    )
}

export default ClubBonus