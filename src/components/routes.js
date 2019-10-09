import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './home';
import Layout from "../Hoc/layout";

const routes = () => {
    return (
        <div>
           <Layout>
           <Switch>
            <Route path="/" exact component={Home} /> 
           </Switch>
           </Layout>
          
        </div>
    );
};

export default routes;