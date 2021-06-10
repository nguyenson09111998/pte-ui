import React from 'react';
import 'antd/dist/antd.css';

import { SingleChoice } from './components/choices/SingleChoice';

export default {
  title: 'Design System/Question type/SingleChoice',
  component: SingleChoice,
};

const Template = (args) => <SingleChoice {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'SingleChoice',
};