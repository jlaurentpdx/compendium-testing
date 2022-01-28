import { useState, useEffect } from 'react';
import { fetchHolidays } from '../../services/holidays';

import Controls from '../../components/Controls/Controls';
import HolidaysList from '../../components/HolidaysList/HolidaysList';

export default function Compendium() {
  const [loading, setLoading] = useState(true);
  const [holidays, setHolidays] = useState([]);
  const [filteredHolidays, setFilteredHolidays] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    const search = holidays.filter((holiday) =>
      holiday.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredHolidays(search);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHolidays();
      let addId = 0;
      data.map((item) => {
        item.id = addId;
        addId++;
      });
      setHolidays(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>Please wait...</h1>;

  return (
    <>
      <Controls {...{ query, setQuery, handleSearch }} />
      <HolidaysList {...{ holidays, filteredHolidays }} />
    </>
  );
}
