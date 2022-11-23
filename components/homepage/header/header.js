import React, { Fragment, useState } from "react";
import Image from "next/image";
// import logo from "./images/candie logo jpg.jpg";
import Link from "next/link";
import classes from "./header.module.css";
import Head from "next/head";

export default function Header() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <Fragment>
      <Head>
        <script
          src="https://kit.fontawesome.com/ea3bde8322.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <header className={classes.header}>
        <div onClick={() => setShowMenu(true)} className={classes.menu}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className={classes.logo}>
          <img src="/images/candie logo jpg.jpg" alt="my logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {showMenu && (
          <div className={classes.nav}>
            <div onClick={() => setShowMenu(false)} className={classes.close}>
              <i class="fa-solid fa-xmark"></i>
            </div>
            <ul>
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </Fragment>
  );
}
