export default function Controls(query, setQuery, handleSearch) {
  return (
    <div>
      <input
        type="text"
        placeholder="search by holiday name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
