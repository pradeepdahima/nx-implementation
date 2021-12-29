import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Core, Button } from '@@orange-solutions/core';

export function App() {
  return (
    <>
      <Core />
      <Button />
      <NxWelcome title="main" />
      <div />
    </>
  );
}

export default App;
