import React from "react";
import { useParams } from "react-router-dom";

function ItemPage() {
  const { id } = useParams();

  return (
    <div className="container itempage">
      <div className="row">
        <div className="col">
          <div className="heading-section">
            <h2>Test Details - Item {id}</h2>
          </div>
          <div className="row">
            <div className="col">
              <div className="product-dtl">
                <div className="product-info">
                  <div className="product-name">Test Item</div>
                  <div className="reviews-counter">
                    <span>3 Reviews</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
