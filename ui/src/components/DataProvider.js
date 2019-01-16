import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DataProvider extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired,
        render: PropTypes.func.isRequired,
    }

    state = {
        data: {},
        loaded: false,
        placeholder: 'Loading...'
    }

    componentDidMount() {
        const { endpoint } = this.props

        console.log(this.props.endpoint)
        fetch(this.props.endpoint)
            .then(response => {
                if (response.status !== 200) {
                    return this.setState({
                        placeholder: 'Something went wrong',
                    })
                } else {
                    return response.json()
                }
            })
            .then(data => this.setState({
                'data': data,
                'loaded': true,
            }))
    }

    render() {
        const { data, loaded, placeholder } = this.state;
        return loaded ? this.props.render(data) : <p>{placeholder}</p>;
    }
}
