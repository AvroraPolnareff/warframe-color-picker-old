import React from 'react';

import { Wrapper } from './Wrapper';
import TargetScheme from '../../components/TargetScheme';

export default {
    title: 'app/TargetScheme',
    component: TargetScheme,
    argTypes: {

    },
};

const Template = (args) => (
    <Wrapper>
        <TargetScheme {...args} />
    </Wrapper>
)


export const Normal = Template.bind({});
Normal.args = {


};

