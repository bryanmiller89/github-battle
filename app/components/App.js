var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');

// Create a React component
class App extends React.Component {
  // Component properties: state, lifecycle event, UI
  // Render method describes component UI
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path = '/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            <Route render={function () {
              return <p>Route Does Not Exist</p>
            }} />
          </Switch>
        </div>
      </Router>
      
    )
  }
}

module.exports = App;