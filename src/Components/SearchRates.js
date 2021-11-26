import React, { useState } from 'react';
import { Rate } from 'antd';

  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


function SearchRates(props) {


  const [value, setValue] = useState(3);

  const handleChange = value => {
    setValue( value );
  };

  const onTrigger = (event) => {
      props.parentCallback(value);
        event.preventDefault();
  }

  return (
    <div>
      <span >
        <Rate tooltips={desc} onChange={handleChange} value={value}  onSubmit = {onTrigger}/>
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
    </div>
  );
}

export default SearchRates;
