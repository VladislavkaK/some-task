import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const StyledInnerInput: any = styled.input<{
  disabled?: boolean;
  block?: boolean;
}>`
  ${(props) => {
    const { disabled, block } = props;

    return css`
      display: inline-block;
      width: ${block && '100%'};
      box-sizing: border-box;
      height: 42px;
      font-size: 14px;
      padding: 10px 15px 10px 15px;
      background: ${disabled ? '#F3F5F6' : '#FFFFFF'};
      border: 1px solid #DEE1E3;
      border-radius: 4px;
      background-repeat: no-repeat;
      background-position: right 10px center;
      cursor: pointer;
      outline: none;
      :disabled {
        opacity: ${disabled && 0.4};
      }
      line-height: 22px;
      color: #1d1f20;
      ::placeholder,
      ::-webkit-input-placeholder {
        color: #808890;
      }
      :-ms-input-placeholder {
        color: #808890;
      }
    `;
  }}
`;

const Input: FC<{
  disabled?: boolean;
  type: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  name?: string;
  className?: string;
  block?: boolean;
  styles?: object;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onChange?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onFocus?: (e: React.FocusEvent<any>) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
}> = ({
  type,
  placeholder,
  defaultValue,
  onClick,
  onChange = () => {},
  value,
  name,
  className,
  block,
  onFocus,
  onBlur,
  disabled,
  styles,
}) => {
  return (
    <StyledContainer>
      <StyledInnerInput
        type={type}
        value={value}
        disabled={disabled}
        name={name}
        className={className}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onClick={onClick}
        block={block}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        styles={styles}
      />
    </StyledContainer>
  );
};

export default Input;
