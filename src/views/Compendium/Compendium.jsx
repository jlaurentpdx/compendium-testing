import { useState, useEffect } from 'react';
import Controls from '../../components/Controls/Controls';
import { fetchHolidays } from '../../services/holidays';

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
      data.forEach((item) => {
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
    <div>
      <Controls {...{ query, setQuery, handleSearch }} />
      {filteredHolidays.length === 0
        ? holidays.map((holiday) => (
            <div key={holiday.id}>
              <h1>{holiday.name}</h1>
              <h2>{holiday.date}</h2>
            </div>
          ))
        : filteredHolidays.map((holiday) => (
            <div key={holiday.id}>
              <h1>{holiday.name}</h1>
              <h2>{holiday.date}</h2>
            </div>
          ))}
    </div>
  );
}
