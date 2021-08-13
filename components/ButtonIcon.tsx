import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  border: 0;
  background-color: transparent;
`;

const Icon = styled.img`
  outline: 0;
  width: 25px;
  height: 25px;
`;

type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  src: string;
  alt?: string;
};

export const ButtonIcon: FC<ButtonIconProps> = ({
  src,
  alt,
  children,
  ...props
}) => {
  return (
    <ButtonContainer {...props}>
      <Icon src={src} alt={alt} />
    </ButtonContainer>
  );
};
