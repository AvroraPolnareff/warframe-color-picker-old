import React from 'react';
import { Button } from '../../../components/shared/Button';
import { Wrapper } from '../Wrapper';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Wrapper><Button {...args} >Default</Button></Wrapper>;

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
  
};

export const Normal = Template.bind({});
Normal.args = {
  
  
};

