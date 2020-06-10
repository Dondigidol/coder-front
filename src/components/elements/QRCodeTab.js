import React from "react";
import QRCode from "qrcode.react";
import QRCodeMenu from "./QRCodeMenu";

class QRCodeTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 128,
    };

    this.qrcode = QRCode();
    //this.qrcode = React.createRef();
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.id]: Number.parseInt(e.target.value),
    });
  };

  downloadQRcode = (e) => {
    e.preventDefault();
    //var node = this.qrcode.current;
    console.log(this.qrcode);
  };

  render() {
    return (
      <div className="text-center">
        <QRCodeMenu
          inputChangeMethod={(e) => this.onInputChange}
          downloadQRcode={(e) => this.downloadQRcode}
        />
        {this.props.value && (
          <QRCode
            value={this.props.value}
            size={this.state.size}
            className="m-3"
          />
        )}
      </div>
    );
  }
}

export default QRCodeTab;
