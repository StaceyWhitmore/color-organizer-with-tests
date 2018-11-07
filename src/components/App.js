//NEW added from 'color-organizer'
import { Menu, NewColor, Colors } from './containers'
import '../stylesheets/APP.scss'

const App = () =>
    <div className="app">
        <Menu />
        <NewColor />
        <Colors />
    </div>

export default App
