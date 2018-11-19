import React from 'react';
import './adduser.css';
class AddUser extends React.Component{
    state = {
        firstname : '',
        lastname : '',
        telephone : '',
        gender : '',
        skill : '',
        message : '',
        touched : {
            firstname : false,
            lastname : false,
            telephone : false,
            gender : false,
            skill : '',
            message : ''
        }
    }

//handle the selected optiona
handleBlur  = e =>{
    let name =  e.target.name;
    this.setState({
        touched : {...this.state.touched, [name] :true},
    })
}

//validate the user input as our need

validate = (firstname , lastname, telephone, email) => {
const errors = {
    firstName : '',
    lastName : '',
    telePhone : '',
    email : ''
};



if (this.state.touched.firstname && firstname.length < 3){
    errors.firstName = 'First Name must be more than 3 character.';

}
else if (this.state.touched.firstname && firstname.length > 15) {
    errors.firstName = 'First Name should be less than 15 characters.';
  }


if(this.state.touched.lastname && lastname.length < 3){
    errors.lastName = 'Last name must have more than 3 character';
}
else if(this.state.touched.lastname && lastname === firstname){
    errors.lastName = 'Last name and FirstName must be diffrent';
}

if(this.state.touched.telephone && !(/^[+]?[0-9]{10}$/).test(telephone)){
    errors.telePhone = 'Telephone number must be in number';
}

if(this.state.touched.email && !(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)){
    errors.email = "Please enter your email in right format"
}


return errors;
};


    //handle the input value
handleChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
        [name]:value
    });
}


//handle the value from radio button
handleSelectOption = e => {
    this.setState({
        gender : e.target.value
    });
    
}


//handle submit from form
handleSubmit = e =>{
    e.preventDefault();
    this.props.totalUser();
    this.props.addUser(this.state);
}


//view of user in UI
    render(){
        let {firstname , lastname , telephone, email } = this.state
        const errors = this.validate(firstname,lastname,telephone, email);
        console.log(errors);
        
        return(<div>
        <div><h1>Welcome to form page</h1></div>
        <div  className="form">
            <form onSubmit={this.handleSubmit}>
            <input 
                type="text"
                name="firstname"
                value={this.state.firstname}
                placeholder="First Name"
                onChange={this.handleChange}
                onBlur = {this.handleBlur}
              />
            <br />
            <p>{errors.firstName}</p>
              <input
                type="text"
                name="lastname"
                value={this.state.lastname}
                placeholder="Last Name"
                onChange = {this.handleChange}
                onBlur = {this.handleBlur}
                />
                <br />
                <p>{errors.lastName}</p>
                <input 
                type="number"
                name="telephone"
                value={this.state.telephone}
                placeholder="TelePhone"
                onChange={this.handleChange}
                onBlur = {this.handleBlur}
              />
            <br />
            <p>{errors.telePhone}</p>
                
            <input 
                type="email"
                name="email"
                value={this.state.email}
                placeholder="Email"
                onChange={this.handleChange}
                onBlur = {this.handleBlur}
              />
            <br />
            <p>{errors.email}</p>
            <label>Gender : </label>
            <label>Male</label>
            <input
                type="radio"
                checked={this.state.gender === "male"}
                value="male"
                onChange={this.handleSelectOption}
                onBlur = {this.handleBlur}
                />
            <label>Female</label>
            <input
                type="radio"
                name= "female"
                checked={this.state.gender==="female"}
                value= "female"
                onChange={this.handleSelectOption}/>
                onBlur = {this.handleBlur}
            <label>Others</label>
            <input
                type= "radio"
                value="others"
                checked={this.state.gender==="others"}
                onChange={this.handleSelectOption}
                onBlur = {this.handleBlur}
                />
            <br />
            <label>Skills</label>
            <br />
            <select
                name="skill"
                value={this.state.skill}
                onChange={this.handleChange}
                onBlur = {this.handleBlur}>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JS">Java Script</option>
            <option value = "React.js">React.js</option>
            </select>
                
            <br />
            <label>Message : </label>
            <br />
            <textarea
                rows= "10"
                cols="60"
                name="message"
                value={this.state.message}
                placeholder="Enter The Message!!"
                onChange={this.handleChange}
                onBlur = {this.handleBlur}
              />
            <br />
            <button>Submit</button>
            <div className="totalUser">
            <h1>Total number of user are : {this.props.totalUser()}</h1></div>
          
            </form></div>
            </div>);
    }
}

export default AddUser;