import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import BarcodeTab from "../elements/BarcodeTab";
import QRCodeTab from "../elements/QRCodeTab";
import classnames from "classnames";

class MainPage extends React.Component {
  state = {
    sourceValue: "",
    error: undefined,
  };

  valueChange = (e) => {
    var value = e.target.value;
    var errorValue = undefined;
    var itemValue = undefined;
    var regex = /[а-яА-ЯЁё]/;
    if (value.match(regex) !== null) {
      errorValue = "Текст не должен содержать кирилицу";
    } else {
      itemValue = value;
    }

    this.setState({
      [e.target.id]: itemValue,
      error: errorValue,
    });
  };

  render() {
    return (
      <div className="container-fluid text-center ">
        <form className="col-sm-12 col-lg-8 offset-lg-2">
          <span>Что вы хотите закодировать?</span>
          <input
            type="text"
            className={classnames("form-control", {
              "is-invalid": this.state.error,
            })}
            id="sourceValue"
            onChange={this.valueChange}
          />
          {this.state.error && (
            <div className="alert-danger">{this.state.error}</div>
          )}
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
