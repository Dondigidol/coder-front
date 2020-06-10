import React from "react";
import Header from "../elements/Header";
import { Tabs, Tab } from "react-bootstrap";
import BarcodeTab from "../elements/BarcodeTab";
import QRCodeTab from "../elements/QRCodeTab";

class MainPage extends React.Component {
  state = {
    sourceValue: "",
  };

  valueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="container-fluid text-center w-100">
        <Header />
        <form className="col-sm-12 col-lg-8 offset-2">
          <span>Что вы хотите закодировать?</span>
          <input
            type="text"
            className="form-control"
            name="sourceValue"
            onChange={this.valueChange}
          />
        </form>
        <Tabs transition={false} className="justify-content-center mt-3">
          <Tab eventKey="barcode" title="Barcode">
            <BarcodeTab value={this.state.sourceValue} />
          </Tab>
          <Tab eventKey="qrcode" title="QRCode">
            <QRCodeTab value={this.state.sourceValue} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default MainPage;
