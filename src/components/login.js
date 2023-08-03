import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TextField } from '@mui/material';
// import { Box } from '@material-ui/core';
import {Box} from '@mui/material';


class Login extends Component {

    constructor() {
        super();
        this.state = {
            fieldList: {},
            errorList: {},
            message: ''
        }
    }

    processInput = (obj) => {
        let fieldList = this.state.fieldList;
        fieldList[obj.target.name] = obj.target.value;
        this.setState({
            fieldList
        })
    }
    login = (obj) => {
        obj.preventDefault();
        let fieldList = this.state.fieldList;
        let errorList = this.state.errorList;
        let formStatus = true;





        //message printing part
        let mymessage = "";
        if (formStatus == false) {
            mymessage = "The red color Marked field are invalid ! ";
        } else {
            mymessage = "validation sucess, please wait submitting....";
        }
        this.setState({
            errorList,
            message: mymessage
        })

        let loginStatus = false;
        let email = this.state.fieldList.myemail;
        let pass = this.state.fieldList.mypassword;


        if(formStatus==true){
            var url = "https://mti-apidata.onrender.com/user";
            axios.get(url).then(response => {
               for (var i = 0; i < response.data.length; i++) {
                 if (email == response.data[i].myemail && pass == response.data[i].mypassword) {
                   localStorage.setItem("name", response.data[i].myname);
                   localStorage.setItem("userid", response.data[i].id);
                   loginStatus = true;
                   break;
                 }// if end
               }  // for end
       
               if(loginStatus==true){
                 this.setState({message:"Login Sucess ! please wait redirecting..."});
                 window.location.href="http://localhost:3000/#/"; 
                 window.location.reload();
               }else{
                   this.setState({message:"Login Sucess ! Invalid or not exist..."});
               }
             }) // axios get end here
       
    }

    }






    render() {
        return (
            <>
                <div>
                <h1 style={{marginTop:"-45%", marginBottom:"15%",color:"blue",fontSize:"36px", marginLeft:"27%"}}>MOTHER THERESA ENGLISH MEDIUM SCHOOL
            <p style={{color:"white",fontSize:"22px", marginLeft:"15%"}}>AFFILIATED TO CBSE, New Delhi, Aff. No.-130687</p>
            <p style={{color:"white",fontSize:"20px"}}>Lingapuram(V), Muthukur(P), Peddapanjani(M), Chittoor, Andhra Pradesh, India,517247</p>
            </h1>
            <img src="school2.jpg" alt="" height="950px" width="100%" />
                </div>
                <div className="logindiv1">
                {/* <img src="logo" alt="" height="150" width="100%"  style={{borderRadius: "50%",marginBottom:"45%"}}/> */}
                <img src="logo" alt="" height="200" width="50%"  style={{borderRadius: "50%",marginTop: "-10%",marginLeft:"-400px" ,marginBottom:"-35%"}}/>

                    <h4 className="text-center text-danger ">{this.state.message}</h4>
                    <div className="login">
                        <div className="login-triangle"></div>
                        <h2 className="login-header">LOGIN</h2>

                        <form onSubmit={this.login} className="login-container">

                            <Box sx={{ width: 400, maxWidth: '100%' }}>

                                <div className='textfield1 mb-3' >
                                    <TextField label="User Name" fullWidth name="myemail" type='email' onChange={this.processInput} required />
                                </div>

                                <div className='textfield1 mb-3'>
                                    <TextField label="Password" fullWidth name="mypassword" type='password' onChange={this.processInput} required />
                                </div>
                            </Box>
                            <button type="submit" className="buttons sign-in" value="Login">SIGN IN</button>

                        </form>

                        <div className="ClearFloat"></div>
                    </div>
                </div>







            </>
        )
    }
}
export default Login;
