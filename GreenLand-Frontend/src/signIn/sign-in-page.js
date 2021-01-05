import React from 'react';

import Redirect from "react-router-dom/Redirect";
import BackgroundPhoto2 from "../images/LogIn.jpg";
import * as API_USERS from "../signIn/api/sign-in-api";

class SignInPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {paragraf: "It's difficult to think anything but pleasant thoughts while eating a homegrown vegetable.",
            amDatClick:false,
            unde:"",
            identificat:false
        };
        this.email="";
        this.password="";
        this.handleHome=this.handleHome.bind(this);
        this.handleProduse=this.handleProduse.bind(this);
        this.handleUp=this.handleUp.bind(this);
        this.handleAbout=this.handleAbout.bind(this);
        this.logIn=this.logIn.bind(this);
    }

    handleHome(){
        this.setState(()=>({unde:"home"}));
        this.setState(()=>({amDatClick:true}));
    }
    handleProduse(){
        this.setState(()=>({unde:"produse"}));
        this.setState(()=>({amDatClick:true}));
    }
    handleUp(){
        this.setState(()=>({unde:"up"}));
        this.setState(()=>({amDatClick:true}));
    }
    handleAbout(){
        this.setState(()=>({unde:"about"}));
        this.setState(()=>({amDatClick:true}));
    }
    logIn(event){
        event.preventDefault();
        return API_USERS.read((result, status, error) => {
            if (result !== null && (status === 200 || status === 201)) {
                console.log("Successfully got the users");
                for(let i=0;i<result.length;i++){
                   console.log("User cu id "+ result[i].id+" cu username: "+result[i].email+" si parola:"+result[i].password);
                   console.log("Introduse:"+this.email.value+" si "+this.password.value)
                   if(result[i].email===this.email.value && result[i].password===this.password.value)
                    {
                        console.log("Intra in egalitate!")
                        this.setState(()=>({identificat:true}));
                    }
                }
            } else {
                this.setState(({
                    errorStatus: status,
                    error: error
                }));
            }
        });
    }
    render() {
        const {amDatClick} = this.state;
        const {unde} = this.state;
        const {identificat} = this.state;
        if (amDatClick) {
            if (unde === "home") return <Redirect to='/'/>;
            if (unde === "produse") return <Redirect to='/Produse'/>;
            if (unde === "about") return <Redirect to='/AboutUs'/>;
            if (unde === "up") return <Redirect to='/SignUp'/>;
            return <Redirect to='/'/>;
        }
        else if(identificat) {
            console.log("L-am indentificat!");
            return <Redirect to={{
                pathname: "/Produse",
                numberOfSelectedProducts: "0"
            }}/>;
        }
        else {
                return (
                    <div>
                    <nav className="navigationBar">
                        <div className="Chenar">
                            <p className="left">Green Land</p>
                        </div>
                        <img src={require('../images/logo1.gif')} alt="logo"/>
                        <ul>
                            <li>
                                <button className="right" onClick={this.handleHome}>Home</button>
                            </li>
                            <li>
                                <button className="right" onClick={this.handleProduse}>Products</button>
                            </li>
                            <li>
                                <button className="right" onClick={this.handleAbout}>About me</button>
                            </li>
                            <li>
                                <button className="right" onClick={this.handleUp}>Sign up</button>
                            </li>
                            <li>
                                <button className="active">Sign in</button>
                            </li>
                        </ul>
                    </nav>
                    <div style={{backgroundImage:'url('+BackgroundPhoto2+')', height:150+'vh'}}>
                        <div className="idk2">
                            <h1>Welcome!</h1>
                        </div>
                        <form>
                            <div className="Fields">
                                <div className="Field">
                                    <p className="Info">Email:</p>
                                    <i className="fas fa-envelope"></i>
                                    <input type="text4" id="emailEntered" ref={(c) => this.email = c}/>
                                </div>
                                <div className="Field">
                                    <p className="Info">Password:</p>
                                    <i className="fas fa-lock"></i>
                                    <input type="password" id="passwordEntered" ref={(c) => this.password = c}/>
                                </div>
                                <div className="Field-Buton">
                                    <button className="Send" onClick={this.logIn}>Log in
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <footer id="footer">
                        <p className="Citat">Enjoy the journey!</p>
                        <p className="Rights">© 2020 Green Land. All rights reserved to SLD.</p>
                        <a href="https://www.instagram.com/lucian.dorin/" target="_blank"><img className="Instagram"
                                                                                               src={require('../images/instagram2.gif')}
                                                                                               alt="instagram"/></a>
                        <a href="https://www.facebook.com/stroia.lucian.dorin/" target="_blank"><img className="Facebook"
                                                                                                     src={require('../images/facebook2.gif')}
                                                                                                     alt="facebook"/></a>
                        <a href="https://www.linkedin.com/in/lucian-dorin-stroia-5336a3186/" target="_blank"><img
                            className="Linkedin" src={require('../images/linkdin2.gif')} alt="linkdin"/></a>
                    </footer>
                    </div>
                )
            }
        }
        ;
    }
export default SignInPage
