import {
  Header as CarbonHeader,
  HeaderGlobalBar,
  HeaderName,
  HeaderGlobalAction,
} from 'carbon-components-react';
import { UserAvatar20 } from '@carbon/icons-react';

/* <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Search" onClick={action('search click')}>
        <Search20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction
        aria-label="Notifications"
        onClick={action('notification click')}>
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction
        aria-label="App Switcher"
        onClick={action('app-switcher click')}
        tooltipAlignment="end">
        <AppSwitcher20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar> */

const Header = ({ onUserAvatarClick }) => {
  return (
    <CarbonHeader aria-label="Header">
      <HeaderName prefix="Tech Enablement">React</HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={onUserAvatarClick}>
          <UserAvatar20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </CarbonHeader>
  );
};

export default Header;
