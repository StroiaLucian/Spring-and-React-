import React from 'react';

import Redirect from "react-router-dom/Redirect";
import BackgroundPhoto2 from "../images/LogIn.jpg";
import imga from "../images/wallpaperABOUT.png"
import "./about-us-page-style.css"
class AboutUsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {paragraf: "It's difficult to think anything but pleasant thoughts while eating a homegrown vegetable.",
            amDatClick:false,
            unde:""
        };
        this.handleHome=this.handleHome.bind(this);
        this.handleProduse=this.handleProduse.bind(this);
        this.handleUp=this.handleUp.bind(this);
        this.handleIn=this.handleIn.bind(this);
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
    handleUp(){
        this.setState(()=>({unde:"up"}));
        this.setState(()=>({amDatClick:true}));
    }
    render() {
        const {amDatClick} = this.state;
        const {unde} = this.state;
        if (amDatClick) {
            if (unde === "home") return <Redirect to='/'/>;
            if (unde === "produse") return <Redirect to='/Produse'/>;
            if (unde === "in") return <Redirect to='/SignIn'/>;
            if (unde === "up") return <Redirect to='/SignUp'/>;
            return <Redirect to='/'/>;
        }
        else{
            return (
                <body>
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
                            <button className="active">About me</button>
                        </li>
                        <li>
                            <button className="right" onClick={this.handleUp}>Sign up</button>
                        </li>
                        <li>
                            <button className="right" onClick={this.handleIn}>Sign in</button>
                        </li>
                    </ul>
                </nav>
                <div className="aboutMe"  style={{backgroundImage:'url('+imga+')', height:150+'vh'}}>
                    <h1 className="special">
                        About me
                    </h1>
                    <div className="euDiv">
                        <p className="infoMe">Hi, <br/>
                            My name is Stroia Lucian Dorin, i'm a creative and positive person, who tries to evolve from all points of view.<br/>
                            Here you can see my work, which is a software prototype for a company, with products like fruits, vegetables and other foods.
                        </p>
                        <div className="euaz">
                            <img className="eu" src={require('../images/me.jpg')} alt="me"/>
                        </div>
                    </div>
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
                </body>
            )
        }
        ;
    }
}

export default AboutUsPage
