import { Helmet } from "react-helmet";

const styles = {
  container: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Phonebook{' '}
          <span role="img" aria-label="Greeting icon">
            ☎️ 📖
          </span>
        </h1>
      </div>
    </>
  );
}
