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
    matchedColors: [
        {name: "Classic", color: "#992020", difference: 1},
        {name: "Agony", color: "#991020", difference: 3},
        {name: "Classic", color: "#999920", difference: 100}
    ]
};

