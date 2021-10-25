import { useState } from 'react';
import { Column, Grid, Row } from 'carbon-components-react';
import '../../styles/tree.css';
import facebook from '../../images/example-facebook.jpg';
import netflix from '../../images/example-netflix.jpg';

const DomTree = () => (
  <ul>
    <li>
      <span>Virtual DOM</span>
      <ul>
        <li>
          <span>Is used by the browser to render the page</span>
        </li>
        <li>
          <span>Is a tree data structure such as your file browser</span>
        </li>
        <li>Enables React to render only changes</li>
      </ul>
    </li>
  </ul>
);

const WhatWhy = () => {
  const [showTree, setShow] = useState(false);

  return (
    <Grid>
      <Row>
        <Column>
          <img
            src={facebook}
            alt="Facebook as Example"
            className="example-img"
          />
        </Column>
        <Column>
          <img src={netflix} alt="Netflix as Example" className="example-img" />
        </Column>
      </Row>
      <Row>
        <div class="tree">
          <ul>
            <li>
              <span className="interactive" onClick={() => setShow(!showTree)}>
                What makes React Special?
              </span>
              {showTree && <DomTree />}
            </li>
          </ul>
        </div>
      </Row>
    </Grid>
  );
};

export default WhatWhy;
