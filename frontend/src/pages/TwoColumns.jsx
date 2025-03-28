import React from "react";

const TwoColumns = () => {
  return (
    <div className="py-3 vh-100">
      <div className="row h-100">
        <div className="col-6 bg-primary-subtle d-flex align-items-center justify-content-center border">
          Light Blue
        </div>
        <div className="col-6 bg-success-subtle d-flex align-items-center justify-content-center border">
          Light Green
        </div>
      </div>
    </div>
  );
};

export default TwoColumns;
