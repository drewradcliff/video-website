import React, { useState } from 'react';
import { Header, Login } from "./components"

export default function App() {
  const [modal, setModal] = useState(false);
  const modalLogin = () => setModal(true);
  const modalExit = () => setModal(false);

  return (
    <>
      {modal && <Login modalExit={modalExit} />}
      <Header modalLogin={modalLogin} />
    </>
  );
}