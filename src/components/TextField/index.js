import React from 'react';

import StyledTextField from './styled/StyledTextField'

function TextField(props) {

    return (
        <StyledTextField {...props} type='text' />
    );

}

export default TextField;
