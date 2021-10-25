import { CodeSnippet, Column, Grid, Row } from 'carbon-components-react';

const Jsx = () => (
  <Grid>
    <Row>
      <Column>
        <CodeSnippet type="multi">{`// With JSX
const element = (
  <div>
    <h1 className="title">Hello World</h1>
    <p>
      This is a
      <span id="selected" onClick={console.log}>
        paragraph
      </span>
    </p>
  </div>
);`}</CodeSnippet>
      </Column>
      <Column>
        <CodeSnippet type="multi">{`// Without JSX
const element = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    {
      className: 'title',
    },
    'Hello World',
  ),
  React.createElement(
    'p',
    null,
    'This is a ',
    React.createElement(
      'span',
      {
        id: 'selected',
        onClick: console.log,
      },
      'paragraph',
    ),
  ),
);`}</CodeSnippet>
      </Column>
    </Row>
  </Grid>
);

export default Jsx;
