import React from "react";
import JsBarcode from "jsbarcode";
import Barcoder from "barcoder";

class Barcode extends React.Component {
  state = {
    value: "",
    width: 0,
    height: undefined,
    signature: undefined,
  };

  static getDerivedStateFromProps(newProps, lastProps) {
    if (newProps !== lastProps) {
      return {
        value: newProps.value,
        width: newProps.width,
        height: newProps.height,
        signature: newProps.signature,
      };
    }
  }

  componentDidMount() {
    this.generateBarcode();
  }

  componentDidUpdate() {
    this.generateBarcode();
  }

  generateBarcode() {
    var format;
    const value = this.state.value;

    Barcoder.validate(value) & (value.length === 13)
      ? (format = "EAN13")
      : (format = "CODE128");

    var options = {
      format: format,
      width: this.state.width,
      height: this.state.height,
      displayValue: this.state.signature,
    };
    JsBarcode("#barcode", value, options);
  }

  render() {
    return <img ref={this.props.imgRef} alt="barcode" id="barcode"></img>;
  }
}
export default Barcode;
