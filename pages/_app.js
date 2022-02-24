import GlobalLayout from "../components/GlobalLayout";

import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {
  //console.log("Component :>> ", Component);
  //console.log("pageProps :>> ", pageProps);
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
};

export default App;
