import React from 'react';
import { Window } from '../../../components/shared/Window';
import { Wrapper } from '../Wrapper';


export default {
    title: 'shared/Window',
    component: Window,
    argTypes: {

    },
};

const Template = (args) => (
    <Wrapper>
        <Window {...args} >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        </Window>
    </Wrapper>
)


export const Normal = Template.bind({});
Normal.args = {


};

