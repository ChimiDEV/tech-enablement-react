import { Column, Grid, Row, SkeletonText } from 'carbon-components-react';

const Shell = () => (
  <Grid>
    <Row>
      <Column>
        <SkeletonText heading={true} />
        <SkeletonText paragraph={true} lineCount={15} />
      </Column>
      <Column>
        <SkeletonText heading={true} />
        <SkeletonText paragraph={true} lineCount={3} />
      </Column>
      <Column>
        <SkeletonText heading={true} />
        <SkeletonText paragraph={true} lineCount={10} />
      </Column>
    </Row>
  </Grid>
);

export default Shell;
