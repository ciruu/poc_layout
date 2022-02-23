import GlobalLayout from "../components/GlobalLayout";

import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
};

export default App;
