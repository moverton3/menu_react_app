import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Dish from './components/Dish';
import { Header, Segment } from 'semantic-ui-react';


const App = () => (
  <Segment basic>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/dishes/:id' component={Dish} />
    </Switch>
  </Segment>
);


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header as='h1'>Mal's Restaurant Menu</Header>
//       </div>
//     );
//   }
// }

export default App;
