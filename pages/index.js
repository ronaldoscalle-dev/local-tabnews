function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚀 Desafio Concluído!</h1>
        <p style={styles.text}>
          Filipe e equipe do curso.dev,
          <br />
          minha gratidão por essa experiência incrível.
        </p>
        <p style={styles.highlight}>Cada aula foi uma virada de chave! ⚡</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 30px rgba(0,0,0,0.5)",
    color: "#ffffff",
    maxWidth: "500px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    textShadow: "0 0 15px rgba(255,255,255,0.8)",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "15px",
  },
  highlight: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#00ffd5",
  },
};

export default Home;
