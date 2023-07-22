// import logo from './logo.svg';
import './App.css';
import { Provider} from "react-redux"
import Count from './components/Count';
import store from './store/store';
import CounterAction from './components/CountAction';

function App() {
  return <Provider store={store}> 
  <CounterAction/>
      <Count/>
     </Provider>

}

export default App;
