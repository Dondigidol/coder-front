import React from "react";
import QRCode from "qrcode.react";
import QRCodeMenu from "./QRCodeMenu";

class QRCodeTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 128,
    };

    this.qrcodeContainer = React.createRef();
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.id]: Number.parseInt(e.target.value),
    });
  };

  downloadQRcode = () => {
    var canvas = document.getElementById("qrcode");
    var data = canvas.toDataURL();
    var link = document.createElement("a");
    link.download = this.props.value + ".png";
    link.href = data;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    return (
      <div>
        <QRCodeMenu
          inputChangeMethod={(e) => this.onInputChange}
          downloadQRcode={() => this.downloadQRcode}
        />

        {this.props.value && (
          <QRCode
            id="qrcode"
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
