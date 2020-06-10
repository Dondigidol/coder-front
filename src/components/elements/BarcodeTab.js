import React from "react";
import Barcode from "./Barcode";
import BarcodeMenu from "./BarcodeMenu";
import { Link } from "react-router-dom";

class BarcodeTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 2,
      height: 100,
      signature: true,
    };

    this.barcode = React.createRef();
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
    var node = this.barcode.current;

    // var win = window.open();
    // win.document.write("<img src='" + node.src + "' />");
    var url = node.src.replace(/^data:image\/[^;]+/, "data:image/octet-stream");
    window.open(url);
  };

  render() {
    return (
      <div className="align-items-center">
        <BarcodeMenu
          inputChangeMethod={(e) => this.onInputChange}
          checkChangeMethod={(e) => this.onCheckChange}
          downloadBarcode={(e) => this.downloadBarcode}
        />
        {this.props.value && (
          <Barcode
            imgRef={this.barcode}
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
