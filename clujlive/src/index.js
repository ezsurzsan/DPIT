// Import React and React DOM
import * as React from 'react'
import { render } from 'react-dom'

// Import Google Map component
import App from './App.js'

// Some default styles
const styles = {
  width: '100%',
  height: '100%'
}

// Wrapper with Google Map component
class MapWrapper extends React.PureComponent {
  render() {
    return (
      <div style={styles}>
        <App />
      </div>
    )
  }
}

// Render everything in HTML
render(<MapWrapper />, document.getElementById('root'))
