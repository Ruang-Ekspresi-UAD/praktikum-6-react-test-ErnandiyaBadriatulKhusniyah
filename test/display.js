import React from 'react';

const Display = ({ value }) => {
  return <h1 data-testid="count-value">{value}</h1>;
};

export default Display;
