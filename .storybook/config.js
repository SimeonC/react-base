import {configure, storiesOf} from '@kadira/storybook';
import React from 'react';

const req = require.context('../src/', true, /story\.jsx$/);
