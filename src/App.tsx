import React, { useState } from 'react';
import { Header, Login } from "./components"

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && <Login setModal={setModal} />}
      <Header setModal={setModal} />
    </>
  );
}