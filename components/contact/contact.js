import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import classes from "./contact.module.css";

export default function Contacts() {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <script
          src="https://kit.fontawesome.com/ea3bde8322.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <section className={classes.section}>
        <h1>Contact me</h1>
        <div className={classes.contact}>
          <Link href="mailto:akinwumiadekanmi2@gmail.com">
            <i className="fa-solid fa-envelope"></i>Email
          </Link>
          <hr />
          <Link href="https://github.com/MrCandie">
            <i className="fa-brands fa-github"></i>Github
          </Link>
          <hr />
          <Link href="https://www.linkedin.com/in/mr-candie-41453a197">
            <i className="fa-brands fa-linkedin"></i>
            LinkedIn
          </Link>
          <hr />
          <Link href="https://wa.me/message/4KIAGBCINK2TD1">
            <i className="fa-brands fa-whatsapp"></i>WhatsApp
          </Link>
          <hr />
          <Link href="https://twitter.com/akinshub?t=_OEDUzrjgBRL5EiWOk0w_g&s=09">
            <i className="fa-brands fa-twitter"></i>
            Twitter
          </Link>
          <hr />
        </div>
      </section>
    </Fragment>
  );
}
