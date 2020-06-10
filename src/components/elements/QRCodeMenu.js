import React from "react";

const BarcodeMenu = (props) => {
  return (
    <div className="align-items-center">
      <form className="form-inline ">
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
          <a
            className="btn btn-success ml-2 mt-4"
            onClick={props.downloadQRcode()}
            href={props.imgSrc}
            download={props.imgSrc}
          >
            скачать
          </a>
        </div>
      </form>
    </div>
  );
};

export default BarcodeMenu;
