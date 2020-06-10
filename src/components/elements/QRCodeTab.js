import React from "react";
import QRCode from "qrcode.react";

const QRCodeTab = (props) => {
  return (
    <div className="text-center">
      {props.value && <QRCode value={props.value} className="m-3" />}
    </div>
  );
};

export default QRCodeTab;
