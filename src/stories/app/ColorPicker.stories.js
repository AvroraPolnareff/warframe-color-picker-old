import React from 'react';

import { Wrapper } from './Wrapper';
import {ColorPicker} from '../../components/ColorPicker';

export default {
    title: 'app/ColorPicker',
    component: ColorPicker,
    argTypes: {

    },
};

const Template = (args) => (
    <Wrapper>
        <ColorPicker {...args} />
    </Wrapper>
)


export const Normal = Template.bind({});
Normal.args = {


};

