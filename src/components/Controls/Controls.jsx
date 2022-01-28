import styles from './Controls.css';

export default function Controls({ query, setQuery, handleSearch }) {
  return (
    <section className={styles.controls}>
      <input
        type="text"
        placeholder="search by holiday name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </section>
  );
}
