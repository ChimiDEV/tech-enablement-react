import { Button } from 'carbon-components-react';

const History = () => {
  return (
    <div>
      <Button href={process.env.PUBLIC_URL + '/oldschool.html'}>
        Back to the past!
      </Button>
    </div>
  );
};

export default History;
