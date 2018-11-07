//This a Stateless Functional Component who's parent is <App/>
//This component will notify its parent when colors are rated or removed.
import PropTypes from 'prop-types'//no longer from 'react'
//import React from 'react'
import Color from './Color'
import '../stylesheets/ColorList.scss'
//import storeFactory from '../../store/index'
import {rateColor, removeColor} from '../../actions'
import {sortFunction} from '../../lib/array-helpers'


//const ColorList = ({colors=[], onRate=f=>f, onRemove=f=>f}) =>
const ColorList = ({ store }) => {
  const {colors, sort} = store.getState()// CANNOT READ PROPERTY getState() of undefined
  const sortedColors = [...colors].sort(sortFunction(sort))
  return (
    <div className="color-list">
      {
        (colors.lenth === 0) ?
          <p>No colors listed. (Add a color) </p> :
          sortedColors.map(color =>
            <Color key={color.id}
              {...color}
              onRate={(rating) =>
                //onRate(color.id, rating)}
                store.dispatch(
                  rateColor(color.id, rating)
                )
              }
              onRemove={() =>
                store.dispatch(
                  removeColor(color.id)
                )
              } />
              //onRemove(color.id)} />
            )
      }
    </div>

  )
}
  //for debugging
  ColorList.propTypes = {
    //colors: PropTypes.array,
    //onRate: PropTypes.func,
    //onRemove: PropTypes.func
    store: PropTypes.object//make sure store is an object
}

  export default ColorList
