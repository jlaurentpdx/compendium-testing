import { useState, useEffect } from 'react';
import { fetchHolidays } from './services/holidays';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHolidays();
      setHolidays(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(holidays);

  return <h1>Hello World</h1>;
}
