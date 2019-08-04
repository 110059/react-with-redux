import React from "react";
import Counter from "./Counter";
import "./App.css";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { INCREMENT, DECREMENT, RESET }  from './actions';
import rootReducer from './rootReducer';

const initialState = {count: 0};
function myReducers(state = initialState, action) {

    switch(action.type) {
        case INCREMENT: 
          return {
              count: state.count + 1
          } 
        break;
        case DECREMENT: 
            return {
                count: state.count - 1
            } 
        break;
        case RESET:
                return {
                  count: 0
            }
        break;    
        default:
            return state;
    }   
}

//let store = createStore(rootReducer, applyMiddleware(thunk));
let store = createStore(myReducers, applyMiddleware(thunk));

store.dispatch({type : INCREMENT});
store.dispatch({type : DECREMENT});
store.dispatch({type : RESET});

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
            
        )
    }
}

export default App;
