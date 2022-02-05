import {BrowserRouter,Switch,Link} from 'react-router-dom';
import Home from './home';
import Menu from './Menu';

export const App = ()=>{
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={()=><Home Comp={HIstory} />}/>
                    <Route path='/menu' component={()=><Link to='www.google.com' />} />
                    <Link ></Link>
                </Switch>
            </BrowserRouter>
        </>
    )
}