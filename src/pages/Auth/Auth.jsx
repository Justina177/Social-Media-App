import React from 'react';
import './Auth.css';
import Logo from '../../img/logoo.png'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="webname">
                <h1>Justina's Media</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>

        <LogIn />
    </div>
  );
};

function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }


function SignUp () {
    return(
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Sign Up</h3>
                <div>
                    <input type="text" 
                    placeholder="First name"
                    className="infoInput"
                    name="Firstname"
                    />

                    <input type="text" 
                    placeholder="Last name"
                    className="infoInput"
                    name="Lastname"
                    /> 
                </div>
                
                <div>
                    <input type="text" className="infoInput" name="Username"
                    placeholder="Username"/>
                </div>

                <div>
                    <input type="text" className="infoInput" name="Password"
                    placeholder="Password" />

                    <input type="text" className="infoInput" name="Confirm Password"
                    placeholder="Confirm Password" />
                </div>
                <div>
                    <span style={{fontSize: "12px"}}> Alredy have an account. Login!</span>
                </div>
                <button className="button info-button" type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Auth