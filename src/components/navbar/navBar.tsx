import * as React from "react";
import {withRouter} from 'react-router-dom';


class NavBar extends React.Component<any,{}> {

  // private navigateToAddItem(){

  // }
   public render() {
    return (
      <div className="navbar">
        <a  className="active" onClick={()=>{
          this.props.history.push('/addItem')
        }}>
          Add New Item
        </a>
        <a href="deleteItem.html">Delete Items</a>
        <a href="viewItem.html">View Items</a>
        <a href="burrowItem.html">Burrow Item</a>
        <a href="returnItem.html">Return Item</a>
        <a href="report.html">Reports</a>
      </div>
    );
  }
}

export default withRouter(NavBar);
