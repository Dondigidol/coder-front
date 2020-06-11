import React from "react";

const BarcodeMenu = (props) => {
  return (
    <div className="container">
      <form className="form-inline col-4 offset-4 ">
        <div className="form-group d-block">
          <label htmlFor="height">размер</label>
          <input
            type="number"
            id="size"
            className="form-control m-2"
            defaultValue="128"
            onChange={props.inputChangeMethod()}
          />
        </div>

        <div className="form-group d-block">
          <button
            className="btn btn-success ml-2 mt-4"
            onClick={props.downloadQRcode()}
          >
            скачать
          </button>
        </div>
      </form>
    </div>
  );
};

export default BarcodeMenu;
