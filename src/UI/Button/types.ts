import { ButtonProps } from '@mui/material';

export interface IButton extends ButtonProps {
  text: string;
  loading?: boolean;
}
