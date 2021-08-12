import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Entry } from './Entry';
import { View } from "./View";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Entry} />
        <Route path='/view/:id' component={View} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
