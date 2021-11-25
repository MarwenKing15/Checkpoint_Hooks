import React, { useState } from "react";

function Rate() {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const [rate, setRate] = useState(3);

  const handleChange = (rate) => {
    setRate(rate);
  };

  return (
    <div>
      <span>
        <Rate tooltips={desc} onChange={handleChange()} rate={rate} />
        {rate ? <span className="ant-rate-text">{desc[rate - 1]}</span> : ""}
      </span>
    </div>
  );
}

export default Rate;
