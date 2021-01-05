import React from 'react';
import Redirect from "react-router-dom/Redirect";
import BackgroundPhoto from "../images/LogIn.jpg";
import Popup from "./components/Popup";
import style from "./sign-up-page-style.css"
import * as API_USERS from "../signUp/api/sign-up-api";
class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {paragraf: "It's difficult to think anything but pleasant thoughts while eating a homegrown vegetable.",
            amDatClick:false,
            unde:"",
            errorStatus: null,
            error: null,
            showPopup:false
        };
        this.name="";
        this.age="";
        this.phone="";
        this.email="";
        this.password="";
        this.handleHome=this.handleHome.bind(this);
        this.handleProduse=this.handleProduse.bind(this);
        this.handleIn=this.handleIn.bind(this);
        this.handleAbout=this.handleAbout.bind(this);
        this.registerPerson=this.registerPerson.bind(this);
    }

    handleHome(){
        this.setState(()=>({unde:"home"}));
        this.setState(()=>({amDatClick:true}));
    }

    handleProduse(){
        this.setState(()=>({unde:"produse"}));
        this.setState(()=>({amDatClick:true}));
    }
    handleIn(){
        this.setState(()=>({unde:"in"}));
        this.setState(()=>({amDatClick:true}));
    }
    handleAbout(){
        this.setState(()=>({unde:"about"}));
        this.setState(()=>({amDatClick:true}));
    }
    registerPerson(){
        console.log("Se doreste inregistrarea persoanei cu datele :"+this.name.value+","+this.age.value+","+this.phone.value+","+this.email.value+","+this.password.value+".")
        let user = {
            name: this.name.value,
            age: this.age.value,
            phone: this.phone.value,
            email: this.email.value,
            password:this.password.value
        };
        return API_USERS.insertUser(user, (result, status, error) => {
            if (result !== null && (status === 200 || status === 201)) {
                console.log("Successfully inserted user with id: " + result);
                this.setState({showPopup: true});
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
        if (amDatClick) {
            if (unde === "home") return <Redirect to='/'/>;
            if (unde === "produse") return <Redirect to='/Produse'/>;
            if (unde === "about") return <Redirect to='/AboutUs'/>;
            if (unde === "in") return <Redirect to='/SignIn'/>;
            return <Redirect to='/'/>;
        }
        else{
            let popup = null;
            const {showPopup} = this.state;
            if(showPopup) {
                popup = (<Popup message='Registration successfully completed!'/>);
                {console.log("Intra")}
            }
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
                            <button className="active">Sign up</button>
                        </li>
                        <li>
                            <button className="right" onClick={this.handleIn}>Sign in</button>
                        </li>
                    </ul>
                </nav>
                    {popup}
                    <div style={{backgroundImage:'url('+BackgroundPhoto+')', height:150+'vh'}}>
                    <div className="idk">
                        <h1 >Welcome to our family!</h1>
                    </div>
                    <form>
                        <div className="Fields">
                            <div className="Field">
                                <p className="Info">Name:</p>
                                <i className="fas fa-user-tie"></i>
                                <input type="text4" id="name" ref={(c) => this.name = c} />
                            </div>
                            <div className="Field">
                                <p className="Info">Phone:</p>
                                <i className="fas fa-mobile"></i>
                                <input type="text2" id="phone"
                                       ref={(c) => this.phone = c}/>
                            </div>
                            <div className="Field">
                                <p className="Info">Age:</p>
                                <i className="fas fa-user-edit"></i>
                                <input type="text5" id="age"  ref={(c) => this.age = c} />
                            </div>
                            <div className="Field">
                                <p className="Info">Email:</p>
                                <i className="fas fa-envelope"></i>
                                <input type="text4" id="email"  ref={(c) => this.email = c} />
                            </div>
                            <div className="Field">
                                <p className="Info">Password:</p>
                                <i className="fas fa-lock"></i>
                                <input type="password" id="password"  ref={(c) => this.password = c} />
                            </div>
                            <div className="Field-Buton">
                                <button className="Send" onClick={this.registerPerson}>Register
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
        ;
    }
}

export default SignUpPage
