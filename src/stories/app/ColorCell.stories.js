import React from 'react';
import { ColorCell } from '../../components/shared/ColorCell';
import { Wrapper } from './Wrapper';


export default {
    title: 'shared/ColorCell',
    component: ColorCell,
    argTypes: {
        color: {control: 'color'}
    },
};

const Template = (args) => (
    <Wrapper>
        <ColorCell {...args} />
    </Wrapper>
)


export const Normal = Template.bind({});
Normal.args = {
    color: 'red'
};

