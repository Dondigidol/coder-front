import React from "react";
import Barcode from "./Barcode";
import BarcodeMenu from "./BarcodeMenu";

class BarcodeTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 2,
      height: 100,
      signature: true,
    };
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onCheckChange = (e) => {
    this.setState({
      [e.target.id]: e.target.checked,
    });
  };

  render() {
    return (
      <div className="align-items-center">
        <BarcodeMenu
          inputChangeMethod={(e) => this.onInputChange}
          checkChangeMethod={(e) => this.onCheckChange}
        />
        {this.props.value && (
          <Barcode
            value={this.props.value}
            width={this.state.width}
            height={this.state.height}
            signature={this.state.signature}
          />
        )}
      </div>
    );
  }
}

export default BarcodeTab;
