//import { userInfo } from 'os';
import {Component} from 'react';

// interface Myprops {
//     name: string;
//     location: string;
// }

// interface Mystate {
//     value: string;
// }

class UserClass extends Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            userInfo : {
                name: "dummyName",
                location: "kolkata",
                avatar_url : "https://avatars.githubusercontent.com/u/1?v=4",
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/mojombo");
        const jsonData = await data.json();

        this.setState({
            userInfo: jsonData,
        })

        console.log("userData",jsonData)
    }

    componentDidUpdate (){
        console.log("component did update");
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }
    
    render() {
        //const {name} =this.props;

        const {name, location, avatar_url} = this.state.userInfo
        return(
    <div className="user-card">
        {/* <h1>Count: {this.state.count}</h1> */}
        <img src={avatar_url}/>
        <h2>Name: {name} </h2>
        <h3>Location:{location}</h3>
        
    </div>
        )
    }
}

export default UserClass;