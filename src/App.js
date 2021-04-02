import React from 'react';
import NavBar from "./composants/NavBar";
import AccueilPage from "./pages/AccueilPage";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PaysPage from "./pages/PaysPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import PaysDetailPage from "./pages/PaysDetailPage";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <main className="container pt-3">
                <Switch>
                    <Route exact path="/" component={AccueilPage}/>
                    <Route exact path="/pays" component={PaysPage}/>
                    <Route exact path="/pays/:nom" component={PaysDetailPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;
