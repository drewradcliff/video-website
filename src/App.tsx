import React from 'react';

interface Props {
  name:
  string
}

export const App = ({ name }: Props) => {
  return (
    <>
      <h1 className="text-6xl text-black">
        Hello {name}
      </h1>
    </>
  );
}