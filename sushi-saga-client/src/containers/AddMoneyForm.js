import React from 'react'

export default class AddMoneyForm extends React.Component {

    state = {
        amount: ""
    }

    changeHandler = (e) => {
        console.log("changing")
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form onSubmit={this.props.submitHandler}>
                <input type="number" name="amount" value={this.state.amount} onChange={this.changeHandler} />
                <input type="submit" value="Add Money"/>
            </form>
        )
    }

}