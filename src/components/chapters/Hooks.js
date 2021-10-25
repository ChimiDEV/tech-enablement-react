/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Column, Grid, Row } from 'carbon-components-react';
import { useEffect, useState } from 'react';

// Maybe hide that first and code live
const EffectOften = ({ property }) => {
  const [calls, setCalls] = useState(0);

  useEffect(() => {
    const newCalls = calls + 1;
    setCalls(newCalls);
  }, [property]);

  return (
    <div>
      I'll call my hook every a certain property changes! Number of calls:{' '}
      {calls}
    </div>
  );
};

const EffectOnce = () => {
  const [calls, setCalls] = useState(0);

  useEffect(() => {
    const newCalls = calls + 1;
    setCalls(newCalls);
  }, []);

  return (
    <div className="margin-ui">
      I'll call my hook only once when I mount! Number of calls: {calls}
    </div>
  );
};

const Hooks = () => {
  const [randomProperty, set] = useState(0);

  return (
    <Grid>
      <Row>
        <Column>
          <EffectOnce />
        </Column>
        <Column>
          <EffectOften property={randomProperty} />

          <div className="margin-ui">
            This button updates the property: {randomProperty}
          </div>
          <Button onClick={() => set(Math.random())}>Random Update</Button>
        </Column>
      </Row>
    </Grid>
  );
};

export default Hooks;
