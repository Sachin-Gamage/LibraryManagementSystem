import * as React from "react";

class AddItem extends React.Component {
  public render() {
    return (
      <form>
        <div className="row">
          <div className="col-25">
            <label>Item Category</label>
          </div>
          <div className="col-75">
            <select id="itemType" name="itemType">
              <option value="Book">Book</option>
              <option value="DVD">DVD</option>
            </select>
          </div>
        </div>
      </form>
    );
  }
}

export default AddItem;
