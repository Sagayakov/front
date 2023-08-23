import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ComponentProps<'button'> {
  className?: string;
}

export const Button = ({ className, ...otherProps }: ButtonProps) => {
  return (
    <button className={twMerge('text-red-500', className)} {...otherProps}>
      button
    </button>
  );
};
