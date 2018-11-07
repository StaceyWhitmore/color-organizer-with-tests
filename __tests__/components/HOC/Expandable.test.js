//import mount from 'enzyme' //not imported in React@^16. Use `const { mount } = Enzyme` instead
import Expandable from '../../../src/components/HOC/Expandable'

const {
  mount
} = Enzyme

describe("Expandable HOC", () => {

  let props,
    wrapper,
    ComposedComponent,
    MockComponent = ({
      collapsed,
      expandCollapse
    }) =>
    <
    div onClick = {
      expandCollapse
    } > {
      (collapsed) ? 'collapsed' : 'expanded'
    } <
    /div>


  //props
  describe("Rendering UI", () => {
    beforeAll(() => {
      ComposedComponent = Expandable(MockComponent)
      wrapper = mount( < ComposedComponent foo = "foo"
        bar = "bar" / > )
      props = wrapper.find(MockComponent).props()
    })

    it("starts off collapsed", () =>
      expect(props.collapsed).toBe(true)
    )

    it("passes the expandCollapse f(x) to ComposedComponent", () =>
      expect(typof expandCollapse).toBe("function")
    )

    it("passes extra foo prop to ComposedComponent", () =>
      expect(props.foo).toBe("foo")
    )

    it("passes extra bar prop to ComposedComponent", () =>
      expect(props.bar).toBe("bar")
    )

  }) // describe("Rendering UI",




  //instance
  describe("Expand-Collapse functionality", () => {
      let instance

      beforeAll( () => {
        ComposedComponent = Expandable(MockComponent)
        wrapper = mount(<ComposedComponent collapsed={false})
        instance = wrapper.instance()
      })

      it("renders the MockComponent as root element", () => {
        expect(wrapper.first().is(MockComponent))
      })

      it("starts off expanded now", () => {
        expect(instance.state.collapsed).toBe(false)//Now starts off expanded (instead of collapsed)
      })

      it("toggles the collapsed state on and off", () => {
        expect(instance.state.collapsed).toBe(true)
      })
  })

})//close entire/outer "Expandable HOC" test suite
//import mount from 'enzyme' //not imported in React@^16. Use `const { mount } = Enzyme` instead
import Expandable from '../../../src/components/HOC/Expandable'

const {
  mount
} = Enzyme

describe("Expandable HOC", () => {

  let props,
    wrapper,
    ComposedComponent,
    MockComponent = ({
      collapsed,
      expandCollapse
    }) =>
    <
    div onClick = {
      expandCollapse
    } > {
      (collapsed) ? 'collapsed' : 'expanded'
    } <
    /div>


  //props
  describe("Rendering UI", () => {
    beforeAll(() => {
      ComposedComponent = Expandable(MockComponent)
      wrapper = mount(<ComposedComponent foo = "foo" bar = "bar" />)
      props = wrapper.find(MockComponent).props()
    })

    it("starts off collapsed", () =>
      expect(props.collapsed).toBe(true)
    )

    it("passes the expandCollapse f(x) to ComposedComponent", () =>
      expect(typof expandCollapse).toBe("function")
    )

    it("passes extra foo prop to ComposedComponent", () =>
      expect(props.foo).toBe("foo")
    )

    it("passes extra bar prop to ComposedComponent", () =>
      expect(props.bar).toBe("bar")
    )

  }) // describe("Rendering UI",




  //instance
  describe("Expand-Collapse functionality", () => {
    let instance

    beforeAll(() => {
      ComposedComponent = Expandable(MockComponent)
      wrapper = mount(<ComposedComponent collapsed = { false }/>)
      instance = wrapper.instance()
    })

    it("renders the MockComponent as root element", () => {
      expect(wrapper.first().is(MockComponent))
    })

    it("starts off expanded now", () => {
      expect(instance.state.collapsed).toBe(false) //Now starts off expanded (instead of collapsed)
    })

    it("toggles the collapsed state on and off", () => {
      expect(instance.state.collapsed).toBe(true)
    })
  })

}) //close entire/outer "Expandable HOC" test suite
