import React from 'react';
import { SelectedColor } from '../../components/SelectedColor';
import { Wrapper } from './Wrapper';


export default {
    title: 'app/SelectedColor',
    component: SelectedColor,
    argTypes: {

    },
};

const Template = (args) => (
    <Wrapper>
        <SelectedColor {...args} >
        </SelectedColor>
    </Wrapper>
)


export const Normal = Template.bind({});
Normal.args = {


};

