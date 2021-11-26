import React, { useState } from 'react';
import { Rate } from 'antd';

  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


function Rates({ratingValue}) {


  const [value, setValue] = useState(ratingValue);

  const handleChange = () => {
    setValue( ratingValue );
  };

  return (
    <div>
      <span>
        <Rate tooltips={desc} onChange={handleChange} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
    </div>
  );
}

export default Rates;
