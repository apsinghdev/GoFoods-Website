import React from "react";

export default function Card(props) {

  let options = props.typeOptions || {} ;
  let priceOptions = Object.keys(options);

  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img
            src={props.imgSrc}
            className="card-img-top"
            alt="..."
            style={{
              objectFit: "fill" , height: "180px"
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>

            <div className="container">
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline h-100 fs-5">Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
