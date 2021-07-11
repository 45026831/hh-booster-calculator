import React from "react"

class Input extends React.Component {

    filteredProps = () => {
        return Object.keys(this.props)
            .filter(prop => prop === prop.toLowerCase())
            .map(prop => ({[prop]: this.props[prop]}))
            .reduce((a, b) => Object.assign(a, b), {})
    }

    onChange = (key, e) => {
        let value = e.target.value

        if (this.props.transformValue) {
            value = this.props.transformValue(value)
        }

        this.props.onChange(key, value)
    }

    render = () => (
        <input {...this.filteredProps()} className={this.props.className} onChange={this.onChange.bind(this, this.props.name)} value={this.props.value} />
    )
}

export default Input