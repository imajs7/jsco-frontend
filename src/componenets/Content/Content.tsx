import React from 'react';
import { Route, Switch } from 'react-router';
import About from './About/About';
import BottomPanel from './BottomPanel/BottomPanel';
import Home from './Home/Home';
import Services from './Services/Services';

type Props = {
    showPanel: boolean
}

const Content = ( { showPanel } : Props ) => {

    return(

        <main>

            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/services">
                    <Services/>
                </Route>
            </Switch>
            {
                showPanel && <BottomPanel/>
            }

        </main>

    );

};

export default Content;