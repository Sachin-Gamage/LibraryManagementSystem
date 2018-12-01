import * as React from 'react';
import {Switch,Route} from 'react-router-dom'
import Routes from '../routes/routes';

class RouteContainer extends React.Component{

    public render(){
        return(
            <div className="container">
                <Switch>
                    {
                        Routes.map((route, key) => {
                            return (<Route exact path={route.path} key={key} render={() => (<route.component/>)} />);
                        })
                    }
                </Switch>
            </div>
        );
    }
}

export default RouteContainer;