import { FC } from 'react';
import MUISelect from '@mui/material/Select';

import { ISelectProps } from './types';

const Select: FC<ISelectProps> = ({ children }) => <MUISelect>{children}</MUISelect>;

export default Select;
