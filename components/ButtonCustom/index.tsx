import React, { FC, ReactNode } from 'react';
import { Button, ButtonProps } from '@material-ui/core';

interface Props extends ButtonProps {
  children: ReactNode;
}

const CustomButton: FC<Props> = ({ children, ...rest }) => {
  return (
    <Button {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;