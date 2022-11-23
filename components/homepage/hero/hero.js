import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={classes.section}>
      <div className={classes.hero}>
        <h1>Welcome!!!</h1>
        <p>I create magic with Javascript!</p>
        <a
          href="https://drive.google.com/file/d/1CPtjvJuGHJXQR7kNkI_jOCkjvW8Y6GYI/view?usp=drivesdk"
          download
        >
          DOWNLOAD CV
        </a>
      </div>
    </section>
  );
}