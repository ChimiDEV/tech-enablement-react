import { useState } from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';
import { ToastNotification } from 'carbon-components-react';
import WhoAmI from './components/chapters/WhoAmI';
import History from './components/chapters/History';
import WhatWhy from './components/chapters/WhatWhy';
import sideNavDefinition from './side-nav.json';
import Frontend from './components/chapters/Frontend';
import Prerequisites from './components/chapters/Prerequisites';
import Modular from './components/chapters/Modular';
import Jsx from './components/chapters/Jsx';
import Lifecycle from './components/chapters/Lifecycle';
import Shell from './components/chapters/Shell';
import UI from './components/chapters/UI';
import Representation from './components/chapters/Representation';
import StateProps from './components/chapters/StateProps';
import TopDown from './components/chapters/TopDown';
import Hooks from './components/chapters/Hooks';

function App() {
  const [selection, setSelection] = useState('intro');
  const [toast, setToast] = useState({});

  const renderContent = () => {
    switch (selection) {
      case 'who-am-i':
        return <WhoAmI setToast={setToast} />;

      case 'history':
        return <History />;
      case 'what-why':
        return <WhatWhy />;
      case 'frontend':
        return <Frontend />;
      case 'prerequisites':
        return <Prerequisites />;
      case 'modular':
        return <Modular />;
      case 'jsx':
        return <Jsx />;
      case 'design-lifecycle':
        return <Lifecycle />;
      case 'shell-ui':
        return <Shell />;
      case 'various-ui':
        return <UI />;
      case 'data-representation':
        return <Representation />;
      case 'state-props':
        return <StateProps />;
      case 'top-down':
        return <TopDown />;
      case 'hooks':
        return <Hooks />;
      case 'more-topics':
      case 'other-urls':
      default:
        return <></>;
    }
  };

  return (
    <>
      <div className="toast-container">
        {toast.title && <ToastNotification {...toast} />}
      </div>
      <Header onUserAvatarClick={() => setSelection('who-am-i')} />
      <SideNav
        definitions={sideNavDefinition}
        selection={selection}
        setSelection={setSelection}
      />
      <div className="content-container">{renderContent()}</div>
    </>
  );
}

export default App;
