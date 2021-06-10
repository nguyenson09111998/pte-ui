import React, { useState } from 'react';
import { Radio } from 'antd';
import './single-choice.css';

/**
 * Primary UI component for user interaction
 * [
 *  {
 *    value: 1,
 *    label: test,
 *    choice: false
 *  }
 * ]
 */
export const SingleChoice = (props) => {
  const [value, setValue] = useState(props.value || null);
  const [data, setData] = useState(props.data || []);
  const [checked, setChecked] = useState(props.checked || false);

  const onChange = e => {
    setValue(e.target.value);
    props.onChange && props.onChange(e.target.value)
  };

  return (
    <Radio.Group value={value} disabled={checked} onChange={onChange}>
      {data.map((item) => {
        return (
          <Radio className="item-single-choice" value={item.value} key={item.value}>
            <span>{item.label}</span>
          </Radio>
        );
      })}
    </Radio.Group>
  );
};
