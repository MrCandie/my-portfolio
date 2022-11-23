import Link from "next/link";
import classes from "./features.module.css";

export default function Features() {
  return (
    <section id="portfolio" className={classes.section}>
      <h1>My Projects</h1>
      <hr />
      <div className={classes.container}>
        <div className={classes.project}>
          <img src="/images/dc.png" />
          <h1>DC Luxury</h1>
          <p>
            An e-commerce fashion store built with react. Implemented a wallet
            system for recurring customers.
          </p>
          <Link href="https://dc-luxury.web.app">Visit Website</Link>
        </div>
        <div className={classes.project}>
          <img src="/images/medicobaze.png" />
          <h1>Medicobaze</h1>
          <p>
            An electronic medical record system for health institutions. Built
            with next.js
          </p>
          <a href="https://medicobaze.vercel.app/">Visit Website</a>
        </div>
        <div className={classes.project}>
          <img src="/images/blog.png" />
          <h1>Candiblog</h1>
          <p>A personal blog built with next.js</p>
          <a href="https://candiblog.vercel.app/">Visit Website</a>
        </div>
        <div className={classes.project}>
          <img src="/images/portfolio.png" />
          <h1>My Portfolio</h1>
          <p>My personal portfolio built with next.js</p>
          <a href="">Visit Website</a>
        </div>
      </div>
    </section>
  );
}
