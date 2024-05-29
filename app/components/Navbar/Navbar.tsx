//Next.js configuration - renders component on the client side/browser, apply to components with interactivity
"use client";
import React, { useState} from 'react';
//Imports Link functionality for routing between pages, wrapper for an <a> intercepts requests and handles routing on the browser side
import Link from 'next/link';
import styles from './Navbar.module.css';

//Navbar Component
export default function Navbar() {
    //State that keeps track of which nav bar to show - set to false (don't show mobile nav) by default until user clicks hamburger button
    const [displayMobileNav, setDisplayMobileNav] = useState(false);

    //When the hamburger button is clicked
    const hamburgerHandleClick = () => {
        //Toggle displayMobileNav state - used to conditionally render the mobile or desktop nav bar
        setDisplayMobileNav(!displayMobileNav);
    }

    return (
        <div>
            {displayMobileNav
            ? 
                (
                //Displays the mobile nav bar - If displayMobileNav === true
                <nav className={styles.navBarMobile}>
                    <ul className={styles.ulNavMobile}>
                        <li className={styles.liCloseMobile}><img src="/images/close-white.png" className={styles.imgCloseMobile} onClick={hamburgerHandleClick} alt="Close button, select to close the nav bar."/></li>
                        <li className={styles.liMenuItemMobile}><Link onClick={hamburgerHandleClick} href="/" className={styles.linkMenuItemMobile}>Home</Link></li>
                        <li className={styles.liMenuItemMobile}><Link onClick={hamburgerHandleClick} href="/about" className={styles.linkMenuItemMobile}>About</Link></li>
                        <li className={styles.liMenuItemMobile}><Link onClick={hamburgerHandleClick} href="/portfolio" className={styles.linkMenuItemMobile}>Portfolio</Link></li>
                        <li className={styles.liMenuItemMobile}><Link onClick={hamburgerHandleClick} href="/contact" className={styles.linkMenuItemMobile}>Contact</Link></li>
                    </ul>
                </nav>
                ) 
            : 
                (
                //Displays the desktop nav bar - If displayMobileNav === false
                <nav className={styles.navBar}>
                    <ul className={styles.ulNav}>
                        <li className={styles.liLogo}><Link href="/"><img src={"/images/new-logo-long-reverse.png"} className={styles.imgLogo} alt="Logo, select to go back to the Home page."/></Link></li>
                        <li className={styles.liMenuItem}><Link href="/" className={styles.linkMenuItem}>Home</Link></li>
                        <li className={styles.liMenuItem}><Link href="/about" className={styles.linkMenuItem}>About</Link></li>
                        <li className={styles.liMenuItem}><Link href="/portfolio" className={styles.linkMenuItem}>Portfolio</Link></li>
                        <li className={styles.liMenuItem}><Link href="/contact" className={styles.linkMenuItem}>Contact</Link></li>
                        <li className={styles.liHamburger}><img src="/images/menu.png" className={styles.imgHamburger} onClick={hamburgerHandleClick} alt="Nav bar button, select to open the nav bar."/></li>
                    </ul>
                </nav>
                )
            }
        </div>
    )
  }
  