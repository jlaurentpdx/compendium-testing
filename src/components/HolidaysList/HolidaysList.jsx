export default function HolidaysList({ holidays, filteredHolidays }) {
  return (
    <div>
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
