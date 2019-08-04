import React from 'react';
import { connect, Provider } from 'react-redux';

function Counter(props) {
    console.log('render', props);
    return (
        <div>
            <h1>I am counter</h1>
            <h2>Count : {props.count}</h2>
            <button onClick={props.onIncrementClick}>Increment</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

function mapDispatchToProp(dispatch) {
    return {
        onIncrementClick: () => {
            console.log('button click');
            const action = { type: 'INCREMENT' }
            dispatch(action);
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProp)(Counter);