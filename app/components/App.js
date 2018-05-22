var React = require('react');
var Popular = require('./Popular');

// Create a React component
class App extends React.Component {
  // Component properties: state, lifecycle event, UI
  // Render method describes component UI
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

module.exports = App;