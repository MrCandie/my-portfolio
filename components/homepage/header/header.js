import React, { Fragment, useState } from "react";
import Image from "next/image";
// import logo from "./images/candie logo jpg.jpg";
import Link from "next/link";
import classes from "./header.module.css";
import Head from "next/head";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <header className={classes.header}>
        <div onClick={() => setShowMenu(true)} className={classes.menu}>
          <span class="material-symbols-outlined">menu</span>
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
              <span class="material-symbols-outlined">close</span>
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
