import React from 'react';
import './App.css';
import Counter from './Counter';
import store from './store';

class App extends React.Component {
    render() {
        return (
            <Counter store={store} />
        )
    }
}

export default App;