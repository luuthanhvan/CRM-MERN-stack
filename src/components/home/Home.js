import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Home.scss';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Dashboard from '../dashboard/Dashboard';
import Contact from '../contact/Contact';
import CreateContact from '../contact/CreateContact';
import EditContact from '../contact/EditContact';

import SalesOrder from '../sales_order/SalesOrder';
import CreateSalesOrder from '../sales_order/CreateSalesOrder';
import EditSalesOrder from '../sales_order/EditSalesOrder';

import UserManagement from '../user_management/UserManagement';
import CreateUser from '../user_management/CreateUser';
import EditUser from '../user_management/EditUser';

function Home() {
    return(
        <div>
            <NavBar />
            <SideBar />
            <div className="content-containter">
                <Switch>
                    <Route path='/dashboard' component={Dashboard}/>

                    <Route path='/contact' exact component={Contact}/>
                    <Route path='/contact/create' component={CreateContact}/>
                    <Route path='/contact/edit' component={EditContact}/>

                    <Route path='/sales_order' exact component={SalesOrder}/>
                    <Route path='/sales_order/create' component={CreateSalesOrder}/>
                    <Route path='/sales_order/edit' component={EditSalesOrder}/>

                    <Route path='/user_management' exact component={UserManagement}/>
                    <Route path='/user_management/create' component={CreateUser}/>
                    <Route path='/user_management/edit' component={EditUser}/>
                </Switch>
            </div>
        </div>
    );
}

export default Home;