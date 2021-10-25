import {
  SideNav as CarbonSideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
} from 'carbon-components-react';
import * as icons from '@carbon/icons-react';

const SideNav = ({ selection, setSelection, definitions }) => {
  const equalsSelection = (str) => selection === str;

  const toChapterLink = ({ title, short, icon }, i) => (
    <SideNavLink
      key={`link-${i}`}
      renderIcon={icons[icon]}
      isActive={equalsSelection(short)}
      onClick={() => setSelection(short)}
      className="side-nav-pointer"
    >
      {title}
    </SideNavLink>
  );

  const toSideNavMenu = ({ title, icon, chapters }, i) => (
    <SideNavMenu title={title} renderIcon={icons[icon]} key={`menu-${i}`}>
      {chapters.map(toChapterLink)}
    </SideNavMenu>
  );

  return (
    <CarbonSideNav aria-label="SideNav">
      <SideNavItems>{definitions.map(toSideNavMenu)}</SideNavItems>
    </CarbonSideNav>
  );
};

export default SideNav;
