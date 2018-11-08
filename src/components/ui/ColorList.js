//This a Stateless Functional Component who's parent is <App/>
//This component will notify its parent when colors are rated or removed.
import PropTypes from 'prop-types'//no longer from 'react'
//import React from 'react'
import Color from './Color'
import '../stylesheets/ColorList.scss'
//import storeFactory from '../../store/index'
import {rateColor, removeColor} from '../../actions'
import {sortFunction} from '../../lib/array-helpers'


//const ColorList = ({store}) =>
const ColorList = ({colors=[], onRate=f=>f, onRemove=f=>f}) =>
  //const {colors, sort} = store.getState()// TYPE_ERROR: CanNOT READ PROPerty getState() of UNdefined
  //const sortedColors = [...colors].sort(sortFunction(sort))
  //return (
    <div className="color-list">
      { (colors.lenth === 0) ?
          <p>No colors listed. (Add a color) </p> :
          /*sorted*/Colors.map(color =>
            <Color key={color.id}
              {...color}
              onRate={(rating) => onRate(color.id, rating)}
                /* store.dispatch(
                  rateColor(color.id, rating)
                )
              }  */
              onRemove={() => onRemove(color.id)
                /* store.dispatch(
                  removeColor(color.id))   */
              } />
            )
      }
    </div>
  //)

  //PropTyoes for debugging
  ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
    //store: PropTypes.object//make sure store is an object
}

  export default ColorList
