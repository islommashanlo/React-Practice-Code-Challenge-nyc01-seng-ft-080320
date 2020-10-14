import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {

  renderSushi = () => {
    return this.props.sushis.map(obj => <Sushi sushi={obj} key={obj.id} eatHandler = {this.props.eatHandler} eaten={this.props.eaten} />)
  }

  render() { 
    return (
    <Fragment>
      <div className="belt">
        {
        this.renderSushi()
        }
        <MoreButton getMoreSushi={this.props.getMoreSushi}/>
      </div>
    </Fragment>
   )
  }
}

export default SushiContainer