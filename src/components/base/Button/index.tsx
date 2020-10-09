import React, { FC } from 'react';
import styled, { css } from 'styled-components';

type Types = 'primary' | 'link';

export const types = {
  primary: {
    color: '#0099DA',
    height: '30px',
    padding: '0',
    background: 'none',
    disabled: {
      color: '#808890',
      background: '#fff',
    },
    hover: {
      color: '#0099DA',
      background: 'none',
    },
    border: '1px solid',
  },
  link: {
    padding: '0',
    color: '#0099DA',
    background: 'none',
    height: 'auto',
    border: 'none',
    hover: {
      color: '#0099DA',
      background: 'none',
    },
    disabled: {
      color: '#808890',
      background: 'none',
    },
  },
};

const StyledButton = styled.button<{
  typeButton?: Types;
  disabled?: boolean;
  block?: boolean;
}>`
  ${({ typeButton = 'primary', disabled, block }) => {
    return css`
      display: inline-block;
      border-radius: 4px;
      width: ${block && '100%'};
      height: ${types[typeButton].height};
      padding: ${types[typeButton].padding};
      color: ${disabled
        ? types[typeButton].disabled.color
        : types[typeButton].color};
      background: ${disabled
        ? types[typeButton].disabled.background
        : types[typeButton].background};
      border: ${types[typeButton].border};
      font-size: 14px;
      cursor: pointer;
      :disabled {
        opacity: ${disabled && 0.4};
        cursor: not-allowed;
      }
      :hover {
        color: ${!disabled && types[typeButton].hover.color};
        background: ${!disabled && types[typeButton].hover.background};
      }
      line-height: 16px;
      outline: none;
      white-space: normal;
      text-align: center;
      transition: all 0.25s ease;
    `;
  }}
`;

const Button: FC<{
  type?: Types;
  disabled?: boolean;
  typeName?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  name?: string;
  block?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({
  type = 'primary',
  typeName,
  disabled,
  block,
  name,
  onClick = () => {},
  className,
  children,
}) => {
  return (
    <StyledButton
      typeButton={type}
      disabled={disabled}
      name={name}
      type={typeName}
      className={className}
      block={block}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
