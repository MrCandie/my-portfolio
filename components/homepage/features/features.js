import Link from "next/link";
import classes from "./features.module.css";

export default function Features() {
  return (
    <section id="portfolio" className={classes.section}>
      <h1>My Projects</h1>
      <hr />
      <div className={classes.container}>
        <div className={classes.project}>
          <img src="/images/node.jpeg" />
          <h1>Birthday API</h1>
          <p>Built a free API to collect users birthdate</p>
          <a href="https://github.com/candietechnologies/birthday-api">
            Visit Website
          </a>
        </div>
        <div className={classes.project}>
          <img src="/images/soso1.png" />
          <h1>Sosogames</h1>
          <p>
            A marketplace for gift card users and merchants.
            <br />
            Built with React.js & Tailwind
          </p>
          <a href="https://dashboard.sosogamescodes.com/">Visit Website</a>
        </div>
        <div className={classes.project}>
          <img src="/images/node.jpeg" />
          <h1>Tape Me</h1>
          <p>
            A platform for fashion designers to keep customer's data in form of
            measurement and collaborate with other tailors on large projects.
            <br /> Built the backend with NODE.JS & EXPRESS.JS
          </p>
          <a href="https://tapeme.com.ng/">Visit Website</a>
        </div>
        <div className={classes.project}>
          <img src="/images/stepping.png" />
          <h1>SteppingGlory Developer LLC</h1>
          <p>
            A portfolio website for an IT consulting firm built with Chakra UI &
            React.js
          </p>
          <a href="https://www.steppingglory.com/">Visit Website</a>
        </div>
        <div className={classes.project}>
          <img src="/images/ehcc.png" />
          <h1>Enthronement Tech</h1>
          <p>
            An in-house church management software built with Chakra UI &
            React.js
          </p>
          <a href="https://report.enthronementassembly.org/">Visit Website</a>
        </div>

        <div className={classes.project}>
          <img src="/images/valid.png" />
          <h1>Valid Crest</h1>
          <p>
            An investment website built with Next.js, built a fully functioning
            wallet system to manage deposit and withdrawals, integrated a fully
            functioning referral based architecture
          </p>
          <a href="https://validcrest.org/">Visit Website</a>
        </div>

        {false && (
          <div className={classes.project}>
            <img src="/images/dcl.jpg" />
            <h1>DC Luxury</h1>
            <p>
              An e-commerce fashion store built with react. Implemented a wallet
              system for recurring customers.
            </p>
            <Link href="https://dc-luxury.web.app">Visit Website</Link>
          </div>
        )}
        {false && (
          <div className={classes.project}>
            <img src="/images/choww.png" />
            <h1>Chow</h1>
            <p>
              A platform where you can order your favorite meals from your
              favorite restaurant!. Built with Next.js
            </p>
            <a href="https://chow-mrcandie.vercel.app/">Visit Website</a>
          </div>
        )}
        {false && (
          <div className={classes.project}>
            <img src="/images/artssy.png" />
            <h1>Artsy</h1>
            <p>
              An online photo gallery and marketplace for creators. Built with
              next.js
            </p>
            <a href="https://artssy.vercel.app/">Visit Website</a>
          </div>
        )}
        {false && (
          <div className={classes.project}>
            <img src="/images/medic.png" />
            <h1>Medicobaze</h1>
            <p>
              An electronic medical record system for health institutions. Built
              with next.js
            </p>
            <a href="https://medicobaze.vercel.app/">Visit Website</a>
          </div>
        )}
        {false && (
          <div className={classes.project}>
            <img src="/images/blogg.png" />
            <h1>Candiblog</h1>
            <p>A personal blog built with next.js</p>
            <a href="https://candiblog.vercel.app/">Visit Website</a>
          </div>
        )}

        {false && (
          <div className={classes.project}>
            <img src="/images/myport.png" />
            <h1>My Portfolio</h1>
            <p>My personal portfolio built with next.js</p>
            <a href="https://mrcandie.vercel.app/">Visit Website</a>
          </div>
        )}
      </div>
    </section>
  );
}
