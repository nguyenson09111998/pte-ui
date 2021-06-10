import React from 'react';
import 'antd/dist/antd.css';

import { SingleChoice } from './components/choices/single-choice';

export default {
  title: 'Design System/Question type/SingleChoice',
  component: SingleChoice,
};

const Template = (args) => <SingleChoice {...args} />;

export const Single = Template.bind({});
Single.args = {
  value: null,
  checked: false,
  data:[
    {
      value: 1,
      label: 'test 1',
      choice: false
    },
    {
      value: 2,
      label: 'test 2',
      choice: false
    },
    {
      value: 3,
      label: 'test 3',
      choice: true
    }
  ]
};