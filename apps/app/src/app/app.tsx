// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Lib1 } from '@webpack-build-libs-from-source-only-works-when-target-name-is-build/lib1';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="app" />
      <Lib1/>
    </div>
  );
}

export default App;
