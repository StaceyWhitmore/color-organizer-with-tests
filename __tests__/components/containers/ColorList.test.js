//import { mount } from 'enzyme'//use `const { mount } = Enzyme` instead
import ColorList from '../../../src/components/ui/ColorList'

const {
  mount
} = Enzyme

//This mock returns a scaled-back version of <Color>. jest.mock() injects a mock in lieu of <Color>
jest.mock('../../../src/components/ui/Color', () => ({
    rating,
    onRate = f => f
  } =>
  <
  div className = "mock-color" >
  <
  button className = "rate"
  onClick = {
    () => onRate(rating)
  }
  /> <
  div / >
))

describe("ColorList UI component", () => {

      let _rate = jest.fn() //create mock f(x)

      beforeAll(() =>
        mount( < ColorList colors = {
            _testColors
          }
          onRate = {
            _rate
          }
          />)
          .find('button.rate')
          .first() //select the 1st child component
          .simulate('click') //...and simulate a click event on it (will happen or 1st mock),
        ) //close beforeAll()

        it("invokes onRate handler", () =>
          expect(_rate).toBeCalled()
        )

        it("rates the correct color", () =>
          //expect "Rad Red's rating... to be changed from 3 to 4
          expect(_rate).toBeCalledWith(
            "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
            4
          )
        )

      }) //close outer test suite
