import { useState } from 'react';
import clear from '../../images/components_clear.png';
import drawn from '../../images/components.jpg';

const Modular = () => {
  const [showComponents, setComponents] = useState(false);

  return showComponents ? (
    <img
      src={drawn}
      alt="Drawn Components"
      className="components-image"
      onClick={() => setComponents(false)}
    />
  ) : (
    <img
      src={clear}
      alt="Without Components"
      className="components-image"
      onClick={() => setComponents(true)}
    />
  );
};

export default Modular;
