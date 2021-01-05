import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import ErrorPage from './commons/errorhandling/error-page';
import styles from './commons/styles/project-style.css';
import InitialPage from "./initial/initial-page";
import ProductsPage from "./products/products-page";
import AboutUsPage from "./aboutUs/about-us-page";
import SignUpPage from "./signUp/sign-up-page";
import SignInPage from "./signIn/sign-in-page";
class App extends React.Component {


                render() {
                return (
                <div className={styles.back}>
            <Router>
                <div>
                    <Switch>

                        <Route
                            exact
                            path='/'
                            render={() => <InitialPage/>}
                        />
                        <Route
                            exact
                            path='/Produse'
                            render={(props) =><ProductsPage {...props}/>}
                        />
                        <Route
                            exact
                            path='/AboutUs'
                            render={() =><AboutUsPage/>}
                        />
                        <Route
                            exact
                            path='/SignUp'
                            render={() =><SignUpPage/>}
                        />
                        <Route
                            exact
                            path='/SignIn'
                            render={() =><SignInPage/>}
                        />

                        {/*Error*/}
                        <Route
                            exact
                            path='/error'
                            render={() => <ErrorPage/>}
                        />
                    </Switch>
                </div>
            </Router>
            </div>
        )
    };
}

export default App
