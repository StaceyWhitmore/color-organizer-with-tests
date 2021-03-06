import '../../stylesheets/Color.scss'
import React, {Component} from 'react'
//import {Star, StarRating} from'./components'
//import Star from './Star'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import FaTrash from 'react-icons/lib/fa/trash-o'
import TimeAgo from './TimeAgo'



class Color extends Component {
  //bg will turn grey for a short while, while comp is mounting


   //removed <FaTrash/> in <button>
  render() {
    const {title, rating, color, timestamp, onRate, onRemove} = this.props
    return (
      <section className="color" style={this.style}>
        <h1 ref="title">{title}</h1>
        <button onClick={onRemove}>
          <FaTrash/>
        </button>
        <div className="color"
          style={{ backgroundColor: color }}>
        </div>
        <TimeAgo timestamp={timestamp} />
        <div>
          <StarRating starsSelected={rating} onRate={onRate} />
        </div>
      </section>
    )//close inner return() fx
  }//render()
}//close <Color />

Color.propTypes = {
  title:  PropTypes.string,
  rating:PropTypes.number,
  color:PropTypes.string,
  onRate:PropTypes.func
}

Color.defaultProps = {
  title:undefined,
  rating:0,
  color: "#000000",
  onRate: f=>f
}

export default Color
