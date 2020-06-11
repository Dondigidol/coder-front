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

  downloadBarcode = (e) => {
    e.preventDefault();
    var canvas = document.getElementById("barcode");

    if (canvas) {
      var data = canvas.toDataURL();
      var link = document.createElement("a");
      link.download = this.props.value + ".png";
      link.href = data;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  printBarcode = (e) => {
    e.preventDefault();
    console.log("printing...");
  };

  render() {
    return (
      <div>
        <BarcodeMenu
          inputChangeMethod={(e) => this.onInputChange}
          checkChangeMethod={(e) => this.onCheckChange}
          downloadBarcode={(e) => this.downloadBarcode}
          printBarcode={(e) => this.printBarcode}
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
