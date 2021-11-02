import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Table from './components/Table/Table';
import { getUnis } from './API/universities';

interface IUni {
  alpha_two_code: string;
  country: string;
  domains: string[];
  name: string;
  "state-province": null;
  web_pages: string[]
}

function App() {
  const [universities, setUniversities] = useState<IUni[]>([]);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("Germany")

  const loadUnis = async () => {
    setLoading(true);
    const unis = await getUnis(country);
    setUniversities(prev => prev.concat(unis));
    setLoading(false);
  }

  useEffect(() => {
    loadUnis()
  }, [])

  return (
    <main className="o-main">
      <Header />
      <Search />
      {loading ? <p>...loading</p> : null}
      <Table />
    </main>
  );
}

export default App;
