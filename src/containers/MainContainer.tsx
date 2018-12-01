import * as React from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import NavBar from '../components/navbar/navBar';
import RouteContainer from './RouteContainer';

class MainContainer extends React.Component{
    
    public render(){
        return(
            <div>
                <Header title='Sample Title'/>
                <NavBar/>
                <RouteContainer/>
                <Footer/>
            </div>
        );
    }
}

export default MainContainer;