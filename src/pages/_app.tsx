import { AmplifyProvider } from '@aws-amplify/ui-react';
import * as React from 'react';
import '../styles/index.scss';
import { myTheme } from '../theme';
import { Header } from '../components/Layout/Header';

function App({ Component, pageProps }) {
  const [themeOverride, setThemeOverride] = React.useState('amplify-docs');

  React.useEffect(() => {
    document.documentElement.setAttribute(
      'data-amplify-theme-override',
      themeOverride
    );
  }, [themeOverride]);

  return (
    <AmplifyProvider theme={myTheme}>
      <Header ></Header>
      <Component {...pageProps}></Component>
    </AmplifyProvider>
  );
}

export default App;
