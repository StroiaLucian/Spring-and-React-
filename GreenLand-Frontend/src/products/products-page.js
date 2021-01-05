import React from 'react';

import Redirect from "react-router-dom/Redirect";
import stil2 from "./products-style.css"
import Products from "./components/products";
import ImagineFundal1 from '../images/fruitsss.jpg'
import ImagineFundal2 from '../images/cheeese.jpg'
import ImagineFundal3 from '../images/veggies.jpg'
import ImaginiFundal4 from '../images/condiments2.jpg'
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import CaregiverForm from "../ForInspiring/caregiver/components/caregiver-form";
import CaregiverPatientsTable from "../ForInspiring/caregiver/components/caregiver-patients-table";
import CaregiverUpdateForm from "../ForInspiring/caregiver/components/caregiver-update-form";
import PreviewProducts from "./components/preview-products";
import * as API_PRODUCTS from "../products/api/products_api";
import Photo from "../images/legume/11.jpg";

class ProductsPage extends React.Component {
    contor=0;
    constructor(props) {
        super(props);
        this.state = {photo: ImagineFundal1,
            amDatClick:false,
            unde:"",
            selected:false,
            produse:[],
            produseSelectate:[]
        };
        this.yes="idk";
        this.veggiesFilter=false;
        this.fruitsFilter=false;
        this.cheeseFilter=false;
        this.drinksFilter=false;
        this.romaniaFilter=false;
        this.turkeyFilter=false;
        this.greeceFilter=false;
        this.spainFilter=false;
        this.italyFilter=false;
        this.fiveFilter=false;
        this.tenFilter=false;
        this.fifFilter=false;
        this.moreFilter=false;
        this.summerFilter=false;
        this.autumnFilter=false;
        this.springFilter=false;
        this.imagini=[ImagineFundal1,ImagineFundal2,ImagineFundal3,ImaginiFundal4];
        this.numberOfSelectedProducts=this.props.location.numberOfSelectedProducts;
        this.handleHome=this.handleHome.bind(this);
        this.handleUp=this.handleUp.bind(this);
        this.handleIn=this.handleIn.bind(this);
        this.handleAbout=this.handleAbout.bind(this);
        this.nextPhoto=this.nextPhoto.bind(this);
        this.backPhoto=this.backPhoto.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.addItem2= this.addItem2.bind(this);
        this.veggiesCheck=this.veggiesCheck.bind(this);
        this.fruitsCheck=this.fruitsCheck.bind(this);
        this.cheeseCheck=this.cheeseCheck.bind(this);
        this.drinksCheck=this.drinksCheck.bind(this);
        this.romaniaCheck=this.romaniaCheck.bind(this);
        this.turkeyCheck=this.turkeyCheck.bind(this);
        this.greeceCheck=this.greeceCheck.bind(this);
        this.italyCheck=this.italyCheck.bind(this);
        this.spainCheck=this.spainCheck.bind(this);
        this.fiveCheck=this.fiveCheck.bind(this);
        this.tenCheck=this.tenCheck.bind(this);
        this.fifteenCheck=this.fifteenCheck.bind(this);
        this.moreCheck=this.moreCheck.bind(this);
        this.summerCheck=this.summerCheck.bind(this);
        this.springCheck=this.springCheck.bind(this);
        this.autumnCheck=this.autumnCheck.bind(this);


    }

    toggleForm() {

        this.setState({selected: !this.state.selected});
        this.yes = "basket";
    }
    handleHome(){
        this.setState(()=>({unde:"home"}));
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
    nextPhoto(){
        if(this.contor===3) this.contor=0;
        else{
            this.contor++;
        }
        this.setState(()=>({photo:this.imagini[this.contor]}))
    }
    backPhoto(){
        if(this.contor===0) this.contor=3;
        else{
            this.contor--;
        }
        this.setState(()=>({photo:this.imagini[this.contor]}))
    }

    addItem2 = (item) => {
        this.setState({
            produseSelectate: this.state.produseSelectate.concat([item])
        });
        console.log("Produsele selectate:"+this.state.produseSelectate);
    }
    veggiesCheck(e){
        let isChecked= e.target.checked;
        console.log("Veggetables Status:"+isChecked);
        this.veggiesFilter=isChecked;
    }
    fruitsCheck(e){
        let isChecked= e.target.checked;
        console.log("Fruits Status:"+isChecked);
        this.fruitsFilter=isChecked;
    }
    cheeseCheck(e){
        let isChecked= e.target.checked;
        console.log("Cheese Status:"+isChecked);
        this.cheeseFilter=isChecked;
    }
    drinksCheck(e){
        let isChecked= e.target.checked;
        console.log("Drinks Status:"+isChecked);
        this.drinksFilter=isChecked;

    }
    romaniaCheck(e){
        let isChecked= e.target.checked;
        console.log("Romania Status:"+isChecked);
        this.romaniaFilter=isChecked;

    }
    turkeyCheck(e){
        let isChecked= e.target.checked;
        console.log("Turkey Status:"+isChecked);
        this.turkeyFilter=isChecked;
    }
    greeceCheck(e){
        let isChecked= e.target.checked;
        console.log("Greece Status:"+isChecked);
        this.greeceFilter=isChecked;

    }
    italyCheck(e){
        let isChecked= e.target.checked;
        console.log("Italy Status:"+isChecked);
        this.italyFilter=isChecked;

    }
    spainCheck(e){
        let isChecked= e.target.checked;
        console.log("Spain Status:"+isChecked);
        this.spainFilter=isChecked;

    }
    fiveCheck(e){
        let isChecked= e.target.checked;
        console.log("Five Status:"+isChecked);
        this.fiveFilter=isChecked;

    }
    tenCheck(e){
        let isChecked= e.target.checked;
        console.log("Ten Status:"+isChecked);
        this.tenFilter=isChecked;

    }
    fifteenCheck(e){
        let isChecked= e.target.checked;
        console.log("Fifteen Status:"+isChecked);
        this.fifFilter=isChecked;

    }
    moreCheck(e){
        let isChecked= e.target.checked;
        console.log("More Status:"+isChecked);
        this.moreFilter=isChecked;

    }
    summerCheck(e){
        let isChecked= e.target.checked;
        console.log("Summer Status:"+isChecked);
        this.summerFilter=isChecked;

    }
    springCheck(e){
        let isChecked= e.target.checked;
        console.log("Spring Status:"+isChecked);
        this.spainFilter=isChecked;

    }
    autumnCheck(e){
        let isChecked= e.target.checked;
        console.log("Autumn Status:"+isChecked);
        this.autumnFilter=isChecked;

    }

    render() {
        const {amDatClick} = this.state;
        const {unde} = this.state;
        if (amDatClick) {
            if (unde === "home") return <Redirect to='/'/>;
            if (unde === "about") return <Redirect to='/AboutUs'/>;
            if (unde === "in") return <Redirect to='/SignIn'/>;
            if (unde === "up") return <Redirect to='/SignUp'/>;
            return <Redirect to='/'/>;
        }
        else{
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
                            <button className="active" >Products</button>
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
                        <li>
                            <button className="Luci" onClick={this.toggleForm}>
                                <img src={require('../images/basket.png')} alt="logo"/>
                                <div className="number">
                                    <p className="numar">{this.numberOfSelectedProducts}</p>
                                </div>
                                <p className="coss">My basket</p>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="content">
                    <Modal isOpen={this.state.selected } toggle={this.toggleForm} size="lg" style={{marginTop:10+'vw'}}>
                        {this.yes==="basket" && <ModalHeader toggle={this.toggleForm}> Your products </ModalHeader>}
                        <ModalBody>
                            {this.yes==="basket"  &&<PreviewProducts produse={this.state.produseSelectate}/>}
                        </ModalBody>
                    </Modal>
                    <div className="tabelProduse">
                        <div className="prezentare" style={{backgroundImage:'url('+this.state.photo+')', height:100+'vh'}}>
                            <button className="backImage2" onClick={this.nextPhoto}><i className="fa fa-angle-left"/></button>
                            <button className="nextImage2" onClick={this.backPhoto}><i className="fa fa-angle-right"/></button>
                        </div>
                        <table>
                            <tbody>
                            <tr>
                                <td className="coloanaFiltru">
                                    <div className="filtruPropriuZis">
                                        <h1>Filter</h1>
                                        <p className="Price">
                                            Price between:
                                            <input type="text" id="firstPrice"  name="firstPrice" placeholder="2"/> -<input type="text" id="firstPrice" name="firstPrice" placeholder="100"/> lei
                                        </p>
                                            <div className="Price">
                                                <p className="subl">Category</p>
                                                <ul className="lista">
                                                    <li>
                                                        <input type="checkbox" onChange={e => this.veggiesCheck(e)}/>
                                                        Vegetables
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" onChange={e => this.fruitsCheck(e)}/>
                                                        Fruits
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" onChange={e => this.cheeseCheck(e)}/>
                                                        Cheese
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" onChange={e => this.drinksCheck(e)}/>
                                                        Drinks
                                                    </li>
                                                </ul>

                                                <p className="subl">Country Of Origin</p>
                                                <ul className="lista">
                                                    <li>
                                                        <input type="checkbox" onChange={e => this.romaniaCheck(e)}/>
                                                            Romania
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" onChange={e => this.turkeyCheck(e)}/>
                                                             Turkey
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" onChange={e => this.greeceCheck(e)}/>
                                                             Greece
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" onChange={e => this.italyCheck(e)}/>
                                                             Italy
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" onChange={e => this.spainCheck(e)}/>
                                                             Spain
                                                    </li>
                                                </ul>
                                                <p className="subl">Discount</p>
                                                <ul className="lista">
                                                    <li>
                                                        <input type="checkbox" onChange={e => this.fiveCheck(e)}/>
                                                        5%-10%
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" onChange={e => this.tenCheck(e)}/>
                                                        10%-15%
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" onChange={e => this.fifteenCheck(e)}/>
                                                        15%-25%
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" onChange={e => this.moreCheck(e)}/>
                                                        More than 25%
                                                    </li>
                                                </ul>
                                                <p className="subl">Season</p>
                                                <ul className="lista">
                                                    <li>
                                                        <input type="checkbox" onChange={e => this.summerCheck(e)}/>
                                                        Summer
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" onChange={e => this.springCheck(e)}/>
                                                        Spring
                                                    </li>
                                                    <li>
                                                        <input type="checkbox" onChange={e => this.autumnCheck(e)}/>
                                                        Autumn
                                                    </li>
                                                </ul>
                                                <button className="Search">Search</button>
                                            </div>
                                    </div>
                                </td>
                                <td className="coloanaGoala">
                                </td>
                                <td className="coloaneProduse">
                                    <div className="produse">
                                        <h5 className="titluu">Products</h5>
                                        <Products addItem2={this.addItem2}/>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="divFooter">
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
                </div>
            )
        }
        ;
    }
}

export default ProductsPage
