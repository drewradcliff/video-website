import * as React from 'react';

interface Props {
  name:
  string
}

export const App = ({ name }: Props) => {
  return (
    <>
      <h1 className="text-4xl text-white bg-black">
        Hello {name}
      </h1>
    </>
  );
}