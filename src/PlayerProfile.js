import React from "react"
import PlayerProfileClassSelect from "./PlayerProfileClassSelect"
import Input from "./Input"

import './PlayerProfile.css'

class PlayerProfile extends React.Component {
    transformLevel = (lvlStr) => {
        return parseInt(lvlStr, 10)
    }

    render = () => (
        <div className={'PlayerProfile lead_player_profile sub_block'}>
            <div className={'PlayerProfile-avatar avatar_border'}>
                <img src="https://cdn1-images.nutaku.com/images/members/114/square.jpg" alt="Opponent's avatar" />
            </div>
            <div className={'PlayerProfile-level level_wrapper'}>
                <span>Level</span>
                <Input className={'level'} chars="3" onChange={this.props.onChange} name={'level'} value={this.props.level} transformValue={this.transformLevel} />
            </div>
            <PlayerProfileClassSelect carac={this.props.carac} classes={this.props.classes} onChange={this.props.onChange} />
        </div>
    )
}

export default PlayerProfile