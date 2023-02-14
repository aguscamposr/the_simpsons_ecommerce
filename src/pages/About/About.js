import React from "react";

const styles = {
  container: {
    margin: "40px 0 40px 0",
  },
};

const About = () => {
  return (
    <div style={styles.container}>
      <h1>ABOUT</h1>
      <h3>API The Simpsons</h3>
      <p>https://thesimpsonsquoteapi.glitch.me/quotes?count=15</p>
    </div>
  );
};

export default About;