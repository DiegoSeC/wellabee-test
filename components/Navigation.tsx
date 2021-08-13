import styled from 'styled-components';
import { Breadcrumb } from './Breadcrumb';
import { ButtonIcon } from './ButtonIcon';

const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-bottom: 1px solid var(--grey-color);
  align-items: center;
`;

const LogoContainer = styled.div`
  height: 100%;
  @media (min-width: 1024px) {
    border-right: 1px solid var(--grey-color);
    padding: 15px 15px 15px 0;
    margin-right: 25px;
    margin-top: -15px;
    margin-bottom: -15px;
  }
`;

const Logo = styled.img`
  max-width: 135px;
  flex-shrink: 0;
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;

const BreadcrumbStyled = styled(Breadcrumb)`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const Navigation = () => {
  return (
    <NavigationContainer>
      <LogoContainer>
        <Logo src='/assets/images/WellabeeLogo@2x.png' alt='Wellabee' />
      </LogoContainer>
      <BreadcrumbStyled />
      <CTAContainer>
        <ButtonIcon
          type='button'
          src='/assets/images/BellIcon@2x.png'
          alt='Notification'
        />
        <ButtonIcon
          type='button'
          src='/assets/images/MyProfileIcon@2x.png'
          alt='Profile'
        />
      </CTAContainer>
    </NavigationContainer>
  );
};
