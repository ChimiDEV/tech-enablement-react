import {
  Header,
  HeaderGlobalBar,
  HeaderName,
  SideNav,
  SideNavMenu,
  SideNavItems,
  SideNavMenuItem,
  SideNavLink,
} from 'carbon-components-react';

function App() {
  return (
    <>
      <Header>
        <HeaderName>React Intro</HeaderName>
        <HeaderGlobalBar></HeaderGlobalBar>
      </Header>
      <SideNav>
        <SideNavItems>
          <SideNavMenu title="Category title">
            <SideNavMenuItem>Link</SideNavMenuItem>
            <SideNavMenuItem>Link</SideNavMenuItem>
            <SideNavMenuItem>Link</SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu title="Category title" isActive={true}>
            <SideNavMenuItem>Link</SideNavMenuItem>
            <SideNavMenuItem aria-current="page">Link</SideNavMenuItem>
            <SideNavMenuItem>Link</SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu title="Category title">
            <SideNavMenuItem>Link</SideNavMenuItem>
            <SideNavMenuItem>Link</SideNavMenuItem>
            <SideNavMenuItem>Link</SideNavMenuItem>
          </SideNavMenu>
          <SideNavLink>Link</SideNavLink>
          <SideNavLink>Link</SideNavLink>
        </SideNavItems>
      </SideNav>
    </>
  );
}

export default App;
