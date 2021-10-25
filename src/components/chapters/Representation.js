import { Column, Grid, Row, TextInput, Toggle } from 'carbon-components-react';
import { useState } from 'react';

const YouTyped = ({ typed }) => (
  <div className="bordered-purple">
    <div>You've typed...</div>
    <div>{typed}</div>
  </div>
);

const Representation = () => {
  const [typed, setType] = useState('');

  return (
    <Grid>
      <Row>
        <Column>
          <div className="info-header">2 Components - 1 Information</div>
          <div className="bordered-gray">
            <div>
              <div className="margin-ui bordered-orange">
                <TextInput
                  id="not-needed"
                  labelText="Type something"
                  placeholder="Input"
                  onChange={(e) => setType(e.target.value)}
                />
              </div>
              <YouTyped typed={typed} />
            </div>
          </div>
        </Column>
        <Column>
          <div className="info-header">1 Component - 1 Information</div>
          <div>
            <Toggle id="toggle-1" />
          </div>
        </Column>
      </Row>
    </Grid>
  );
};

export default Representation;
