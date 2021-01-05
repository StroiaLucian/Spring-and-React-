import React from 'react';

import stil from "./initial-page-style.css"
import Redirect from "react-router-dom/Redirect";

class InitialPage extends React.Component {
    contor=0;
    constructor(props) {
        super(props);
        this.state = {paragraf: "It's difficult to think anything but pleasant thoughts while eating a homegrown vegetable.",
            amDatClick:false,
            unde:""
        };
        this.citate=["It's difficult to think anything but pleasant thoughts while eating a homegrown vegetable.",
            "The tallest oak in the forest was once just a little nut that held it's ground.",
            "A healthy outside starts from the inside.",
            "Failure is the condiment that gives success its flavor."
        ];
        this.nextButton=this.nextButton.bind(this);
        this.backButton=this.backButton.bind(this);
        this.handleProduse=this.handleProduse.bind(this);
        this.handleUp=this.handleUp.bind(this);
        this.handleIn=this.handleIn.bind(this);
        this.handleAbout=this.handleAbout.bind(this);
    }
    nextButton(){
        if(this.contor===3) this.contor=0;
        else{
            this.contor++;
        }
        this.setState(()=>({paragraf:this.citate[this.contor]}))
    }
    backButton(){
        if(this.contor===0) this.contor=3;
        else{
            this.contor--;
        }
        this.setState(()=>({paragraf:this.citate[this.contor]}))
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
    handleAbout(){
        this.setState(()=>({unde:"about"}));
        this.setState(()=>({amDatClick:true}));
    }
    render() {
        const {amDatClick} = this.state;
        const {unde} = this.state;
        if (amDatClick) {
            if (unde === "produse") return <Redirect to='/Produse'/>;
            if (unde === "about") return <Redirect to='/AboutUs'/>;
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
                            <button className="active">Home</button>
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
                            <button className="right" onClick={this.handleIn}>Sign in</button>
                        </li>

                    </ul>
                </nav>
                <div className="container-photos">
                    <div className="container-scris">
                        <p>{this.state.paragraf}</p>
                    </div>
                    <div className="buttons">
                        <button className="backImage" onClick={this.backButton}><i class="fa fa-angle-left"></i>
                        </button>
                        <button className="nextImage" onClick={this.nextButton}><i class="fa fa-angle-right"></i>
                        </button>
                    </div>
                </div>
                <div className="allItems">
                    <div className="container">
                        <h1>Choose what you need</h1>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <div className="categories1">
                                        <p className="text">Vegetables</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="categories2">
                                        <p className="text">Fruits</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="categories3">
                                        <p className="text">Cheese</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="categories4">
                                        <p className="text">Drinks</p>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
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

export default InitialPage
