import React from "react";

function Stock({stock, handleStock}) {

  const handleClick = ()=>{
    handleStock(stock)
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
