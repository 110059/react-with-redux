import React from 'react';

// class Login extends Component {
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 {this.props.isLoggin ? "Welcome Ved" : "Login first" }
//             </div>
//         )
//     }
// }

function Login(props) {
    console.log(props);
    return (
        <div>
            {props.isLoggin ? "Logged-In" : "Logged-Out"}
            < br />
            <input type="button" onClick={() => props.handleChange()} value={!props.isLoggin ? "Logged-In" : "Logged-Out"} />
        </div>
    )
}

export default Login;