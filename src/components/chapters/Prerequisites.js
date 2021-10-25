import { useState } from 'react';
import { Code32, IbmCloud32, TextAlignJustify32 } from '@carbon/icons-react';
import { CodeSnippet, Column, Grid, Row } from 'carbon-components-react';
import structure from '../../images/react_structure.png';

const Prerequisites = () => {
  const [showNode, setNode] = useState(true);
  const [showEditor, setEditor] = useState(false);
  const [showBrowser, setBrowser] = useState(false);

  return (
    <Grid>
      <Row className="margin-row">
        <Column className="centered">
          <Code32
            className={showNode ? 'green' : 'hover-green pointer'}
            onClick={() => setNode(true)}
          />
          <div className="info-box bg-green" hidden={!showNode}>
            <div className="info-header">NodeJS (NVM)</div>
            <div className="info-text">
              To get NodeJS I would suggest the usage of{' '}
              <a href="https://github.com/nvm-sh/nvm" className="info-url">
                NVM
              </a>
              .
              <br />
              <br />
              1. Install NVM:
            </div>
            <CodeSnippet wrapText={true} className="black">
              curl -o-
              https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh |
              bash
            </CodeSnippet>

            <div className="info-text">
              2. Install Node using NVM (you might have to restart your terminal
              session)
            </div>
            <CodeSnippet className="black bottom-margin">
              nvm install 16
            </CodeSnippet>
          </div>
        </Column>
        <Column className="centered">
          <TextAlignJustify32
            className={showEditor ? 'blue' : 'hover-blue pointer'}
            onClick={() => setEditor(true)}
          />
          <div className="info-box bg-blue" hidden={!showEditor}>
            <div className="info-header">Code Editor</div>
            <div className="info-text">
              There are a lot of editors and IDEs out there.
              <br />
              For now I would recommend{' '}
              <a
                href="https://code.visualstudio.com/Download"
                className="info-url"
              >
                VS Code
              </a>
              .
            </div>
          </div>
        </Column>
        <Column className="centered">
          <IbmCloud32
            className={showBrowser ? 'red' : 'hover-red pointer'}
            onClick={() => setBrowser(true)}
          />
          <div className="info-box bg-red" hidden={!showBrowser}>
            <div className="info-header">Web Browser</div>
            <div className="info-text">
              I think I can safely assume that everyone of you already has a web
              browser installed.
            </div>
          </div>
        </Column>
      </Row>
      <Row className={(!showNode || !showEditor || !showBrowser) && 'hidden'}>
        <Column>
          <h2>Your first React Application</h2>
          <CodeSnippet className>
            npx create-react-app &lt;application-name&gt;
            <br />
            npm start
          </CodeSnippet>
          <img src={structure} alt="Structure" className="structure-image" />
        </Column>
      </Row>
    </Grid>
  );
};

export default Prerequisites;
