import React from "react";

const BarcodeMenu = (props) => {
  return (
    <div className="align-items-center">
      <form className="form-inline ">
        <div className="form-group d-block">
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

        <div className="form-group d-block">
          <label htmlFor="height">высота штрихкода</label>
          <input
            type="number"
            id="height"
            className="form-control m-2"
            defaultValue="100"
            onChange={props.inputChangeMethod()}
          />
        </div>

        <div className="form-group d-block">
          <label htmlFor="signature" className="mb-2">
            подпись
          </label>
          <input
            type="checkbox"
            className="form-check-input mb-4 m-2"
            id="signature"
            defaultChecked
            onChange={props.checkChangeMethod()}
          />
        </div>
        <div className="form-group d-block">
          <a
            className="btn btn-success ml-2 mt-4"
            onClick={props.downloadBarcode()}
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
