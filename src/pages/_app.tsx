import { AmplifyProvider, ColorMode } from '@aws-amplify/ui-react';
import * as React from 'react';
import '../styles/index.scss';
import { myTheme } from '../theme';
import { Header } from '../components/Layout/Header';
import { useRouter } from 'next/router';


function App({ Component, pageProps }) {

  const router = useRouter();
  const { platform = "react" } = router.query;
  const [colorMode, setColorMode] = React.useState('system');
  const [themeOverride, setThemeOverride] = React.useState('amplify-docs');

  React.useEffect(() => {
    document.documentElement.setAttribute(
      'data-amplify-theme-override',
      themeOverride
    );
  }, [themeOverride]);


  return (
    <>
      <AmplifyProvider theme={myTheme} colorMode={colorMode as ColorMode}>
        <Header
          platform={platform}
          colorMode={colorMode}
          setColorMode={setColorMode}></Header>
        <Component
          {...pageProps}
          colorMode={colorMode}
          setThemeOverride={setThemeOverride}
          themeOverride={themeOverride}
        ></Component>
      </AmplifyProvider>
    </>
  );
}

export default App;
