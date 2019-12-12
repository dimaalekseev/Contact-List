import React from "react";
import "./AddContact.css"

class AddContact extends React.Component {
    state = {
        id: 8,
        name: "",
        description: "",
        avatar: 10,
        gender: "",
        Facebook: "",
        Twitter: "",
        LinkedIn: "",
        Skype: "",
        e_mail: "",
        favorite: false
    }
   //this.handleChange=this.handleChange.bind(this);

   GetName=e=>{
       this.setState({
           name:e.target.value
       })
   }

   GetDescription=e=>{
        this.setState({
            description:e.target.value
        })
    }

    GetAvatar=e=>{
        this.setState({
            avatar:e.target.value
        })
    }

    GetGender=e=>{
        this.setState({
            gender:e.target.value
        })
    }

    
   onSubmit = e =>{
       e.preventDefault();
       const{name,description, avatar, gender}=this.state;
       this.props.AddNewContact(name,description,avatar,gender)
       //console.log("name:", this.state.name, "\ndescription:", this.state.description, "avatar:", this.state.avatar, "gender:", this.state.gender)
   }
   handleChange(event) {        
            const {name,value,type, checked}=event.target
            type==="checkbox"?this.setState({[name]:checked}):this.setState({[name]:value})
    }

     // Add = () => {
    //     this.setState(() => {
    //         return{

    //         }
    //     })
    // }
    render() {
        
        return (
            <form onSubmit={this.onSubmit} justify-content-center>
                
                <br />
                <input
                    type="text"
                    name="name"
                    placeholder="Enter a Name"
                onChange={this.GetName}
                />
                <br />
                <br />
                <input
                    type="text"
                    name="description"
                    placeholder="Enter a description"
                onChange={this.GetDescription}
                />
                <br />
                <br />
                <input
                    type="text"
                    name="avatar"
                    placeholder="Enter a # of avatar"
                onChange={this.GetAvatar}
                />
                <br />
                <br />
                <input
                    type="text"
                    name="gender"
                    placeholder="Enter gender"
                onChange={this.GetGender}
                />
                <br />
                <br />
                <input 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email" 
                />
                <small 
                id="emailHelp" 
                class="form-text text-muted">We'll never share your email with anyone else.</small>
                <br/>
                {/*<label>Select smth</label>
                 <select
                    value={this.state. ...}
                    onChange={this.handleChange}
                    name="">
                
                <option value="1">1</option>
                <option value="2">2</option>
                <select/> */}
                <button type="submit" class="btn btn-primary btn-lg">ADD CONTACT</button>
            </form>
        )
    }
}
export default AddContact; 
