import React from "react";

const BarcodeMenu = (props) => {
  return (
    <div className="container">
      <form className="row justify-content-center">
        <div className="form-group p-1">
          <label htmlFor="width">ширина линии</label>
          <input
            type="number"
            id="width"
            className="form-control m-2"
            defaultValue="2"
            min="1"
            required
            onChange={props.inputChangeMethod()}
          />
        </div>

        <div className="form-group p-1">
          <label htmlFor="height">высота штрихкода</label>
          <input
            type="number"
            id="height"
            className="form-control m-2"
            defaultValue="100"
            onChange={props.inputChangeMethod()}
          />
        </div>

        <div className="form-group p-1">
          <label htmlFor="signature">подпись</label>
          <br />
          <input
            type="checkbox"
            className="form-check-input ml-n2 mt-3"
            id="signature"
            defaultChecked
            onChange={props.checkChangeMethod()}
          />
        </div>

        <div className="form-group p-1 form-inline">
          <button
            className="btn btn-success ml-1 mb-n4 mt-1"
            onClick={props.downloadBarcode()}
          >
            скачать
          </button>
          <button
            className="btn btn-success ml-1 mb-n4 mt-1"
            onClick={props.printBarcode()}
          >
            печать
          </button>
        </div>
      </form>
    </div>
  );
};

export default BarcodeMenu;
