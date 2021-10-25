import { Column, Grid, Row } from 'carbon-components-react';

const CardA = () => (
  <div className="margin-ui">
    <h1>Card A</h1>
    <p>This is a task for card A</p>
  </div>
);

const Temperature = () => <div></div>;

const StateProps = () => {
  return (
    <Grid>
      <Row>
        <Column>
          <div className="info-header">Properties</div>

          <CardA />
        </Column>
        <Column>
          <div className="info-header">State</div>
          <Temperature />
        </Column>
      </Row>
    </Grid>
  );
};

export default StateProps;
