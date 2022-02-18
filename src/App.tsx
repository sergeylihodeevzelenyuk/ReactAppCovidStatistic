import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Layout from "./components/Layout";
import Header from "./components/Header";
import Main from "./components/Main";

import { fetchCountriesData } from "./store/data-action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesData());
  }, [dispatch]);

  return (
    <Layout>
      <Header />
      <Main />
    </Layout>
  );
};

export default App;
