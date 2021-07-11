import React from "react"
import ClassSelect from "./ClassSelect"

class PlayerProfileClassSelect extends React.Component {
    render = () => (
        <ClassSelect {...this.props} name={'carac'} className={'PlayerProfileClassSelect'} />
    )
}

export default PlayerProfileClassSelect