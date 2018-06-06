var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');

// Create a React component
class App extends React.Component {
  // Component properties: state, lifecycle event, UI
  // Render method describes component UI
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Route path='/popular' component={Popular} />
        </div>
      </Router>
      
    )
  }
}

module.exports = App;