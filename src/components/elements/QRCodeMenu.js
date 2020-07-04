import React from "react";

const BarcodeMenu = (props) => {
  return (
    <div className="container">
      <form className="row justify-content-center">
        <div className="form-group p-1">
          <label htmlFor="height">размер (высота и ширина в пикселях)</label>
          <input
            type="number"
            id="size"
            className="form-control"
            defaultValue="128"
            onChange={props.inputChangeMethod()}
          />
        </div>

        <div className="form-group form-inline">
          <button
            className="btn btn-success ml-1 mb-n4 mt-1"
            onClick={props.downloadQRcode()}
          >
            скачать
          </button>
          <button
            className="btn btn-success ml-1 mb-n4 mt-1"
            onClick={props.printQRcode()}
          >
            печать
          </button>
        </div>
      </form>
    </div>
  );
};

export default BarcodeMenu;
