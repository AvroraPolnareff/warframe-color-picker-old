import React from 'react';
import { Suggestions } from '../../components/Suggestions';
import { Wrapper } from './Wrapper';


export default {
    title: 'app/Suggestions',
    component: Suggestions,
    argTypes: {

    },
};

const Template = (args) => (
    <Wrapper>
        <Suggestions {...args} >
            
        </Suggestions>
    </Wrapper>
)


export const Normal = Template.bind({});
Normal.args = {


};

