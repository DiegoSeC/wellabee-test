import styled from 'styled-components';

const Container = styled.aside`
  margin: 15px 5px;
`;

const Title = styled.h5`
  color: var(--grey2-color);
  margin: 0;
`;

const NavContainer = styled.ul`
  list-style: none;
  margin: 10px 0;
  padding: 0;
  font-weight: 200;
`;

const NavItem = styled.li`
  padding: 5px 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 100px;

  &.active {
    background-color: var(--grey-color);
    border-radius: 15px;
  }
`;

const AStyled = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Icon = styled.i<IconProps>`
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  width: 15px;
  height: 15px;
  display: inline-block;
  margin-right: 5px;
`;

type IconProps = {
  src: string;
};

export const Sidebar = () => {
  return (
    <Container>
      <Title>EXPLORE</Title>
      <NavContainer>
        <NavItem>
          <Icon src='/assets/images/NavigationMenu/HomeIcon@2x.png' />
          <AStyled href='/'>Home</AStyled>
        </NavItem>
        <NavItem className='active'>
          <Icon src='/assets/images/NavigationMenu/MyTeamIcon@2x.png' />
          <AStyled href='/'>My team</AStyled>
        </NavItem>
        <NavItem>
          <Icon src='/assets/images/NavigationMenu/MyProfileIcon@2x.png' />
          <AStyled href='/'>My profile</AStyled>
        </NavItem>
        <NavItem>
          <Icon src='/assets/images/NavigationMenu/ResourcesIcon@2x.png' />
          <AStyled href='/'>Resources</AStyled>
        </NavItem>
        <NavItem>
          <Icon src='/assets/images/NavigationMenu/SeetingsIcon@2x.png' />
          <AStyled href='/'>Settings</AStyled>
        </NavItem>
      </NavContainer>
    </Container>
  );
};
