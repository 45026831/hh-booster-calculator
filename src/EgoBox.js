import React from "react"
import Input from "./Input"

import './EgoBox.css'

class EgoBox extends React.Component {

    formattedEgo = () => {
        return this.props.ego.toLocaleString()
    }

    unformatEgo = (str) => {
        str = str.replace(/\s/, '');

        if(getLocaleDecimalSeparator() === ',')
            str = str.replace(/\./g, '').replace(/,/, '.');
        else if(getLocaleDecimalSeparator() === '.')
            str = str.replace(/,/g, '');

        return parseInt(str, 10)
    }

    render = () => (
        <div className={'lead_ego'}>
            <div>Ego</div>
            <Input name={'ego'} value={this.formattedEgo()} onChange={this.props.onChange} transformValue={this.unformatEgo} />
        </div>
    )
}

function getLocaleDecimalSeparator () {
    let n = 1.1;
    //returns `,` or `.`
    return n.toLocaleString().substring(1, 2);
}

export default EgoBox