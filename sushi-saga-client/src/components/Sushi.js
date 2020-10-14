import React from 'react'

class Sushi extends React.Component {
  
  render() {
    return (
      <div className="sushi">
        <div className="plate" >
                   
        { 
          /* Tell me if this sushi has been eaten! */ 
          this.props.eaten.map(sushi => sushi.id).includes(this.props.sushi.id) ?
          null
          :
          
            <img src={this.props.sushi.img_url} width="100%" alt="SUSHI" onClick={() => this.props.eatHandler(this.props.sushi)}/>
        }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}.00
        </h4>
      </div>
    )
  }
}

export default Sushi