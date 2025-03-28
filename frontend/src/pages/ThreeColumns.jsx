import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ThreeColumns = () => {
  return (
    <div className="vh-100 py-3">
      <div className="row h-100">
        <div className="col-4 bg-primary-subtle d-flex align-items-center justify-content-center border">
          Light Blue
        </div>
        <div className="col-4 bg-success-subtle d-flex align-items-center justify-content-center border">
          Light Green
        </div>
        <div className="col-4 bg-danger-subtle d-flex align-items-center justify-content-center border">
          Light Burgundy
        </div>
      </div>
    </div>
  );
};

export default ThreeColumns;
