import React, { Component } from 'react';
import ReactDom from 'react-dom';



function onmosueHver() {
    alert('mouse hover')
}
class Politician extends Component {
    constructor() {
        super();
        this.state = {
            vote: 0
        }
     
        //bind the function
        this.clickMe = this.clickMe.bind(this);

    }
    clickMe() {
        //alert(this.state.vote++);
        this.setState(prevState => {
            return {
                vote: prevState.vote++
            }
        })

    }

    render() {
        return (
            <div>
                <button onClick={this.clickMe}>Click to Vote</button>
                <img width="100px" height="100px" src={this.props.image} ></img>
                <h1>{this.props.name}</h1> - {this.props.des}  
                <h1>Total Vote: {this.state.vote}</h1>              
            </div>
        );
    }

}

export default Politician;



{/* <div>
<Politician 
  image="https://avatars.io/twitter/narendramodi/large" 
  name="Modi" 
  des="PM" 
/>
<Politician 
  image="https://pbs.twimg.com/profile_images/597852976359682049/rY2N6Zrb_400x400.jpg" 
  name="kejri" 
  des="CM" 
/>
<Politician 
image="https://pbs.twimg.com/profile_images/425645262170632192/Cn2SkydC_400x400.jpeg" 
name="rahul" 
des="pappu"
 />
</div> */}