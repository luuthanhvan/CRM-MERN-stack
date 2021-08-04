import { Route, Switch } from 'react-router-dom';
import './Home.scss';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Dashboard from '../dashboard/Dashboard';
import Contact from '../contact/Contact';
import SalesOrder from '../sales_order/SalesOrder';
import UserManagement from '../user_management/UserManagement';

function Home() {
    return(
        <div>
            <NavBar />
            <SideBar />
            <div className="content-containter">
                <Switch>
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route path='/contacts' component={Contact}/>
                    <Route path='/sales_order' component={SalesOrder}/>
                    <Route path='/user_management' component={UserManagement}/>
                </Switch>
            </div>
        </div>
    );
}

export default Home;