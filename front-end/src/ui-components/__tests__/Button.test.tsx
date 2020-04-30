import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button';

test('title', () => {
    const container = document.createElement('div');
    ReactDOM.render(<Button />, container);
})