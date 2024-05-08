import { ComponentProps } from 'react';
import clsx from 'clsx';

import styles from './button.module.css';

export type ButtonProps = ComponentProps<'button'> & {
  variant: 'primary' | 'secondary' | 'destructive';
};

export const Button = ({ variant, ...props }: ButtonProps) => {
  let className = clsx(styles.button, {
    [styles.secondary]: variant === 'secondary',
    [styles.destructive]: variant === 'destructive',
  });
  
  return <button className={className} {...props} />;
};
