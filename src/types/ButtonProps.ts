import React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}
