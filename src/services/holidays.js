export const fetchHolidays = async () => {
  const resp = await fetch(
    'https://date.nager.at/api/v3/NextPublicHolidaysWorldwide'
  );
  const data = await resp.json();

  return data;
};
