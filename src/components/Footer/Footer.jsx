import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.contactContainer}>

                <div>
                    <h3>Visite o Instagram</h3>
                    <div className={styles.contactGroup}>
                        <p className={styles.contactItem}>
                            <FaInstagram className={styles.instagramIcon} />
                            <a href="https://www.instagram.com/vitrine_uberlandia/" target="_blank" rel="noopener noreferrer">@vitrine_uberlandia</a>
                        </p>
                    </div>
                </div>

                <div>
                    <h3>Contato</h3>
                    <div className={styles.contactGroup}>
                        <p className={styles.contactItem}>
                            <FaWhatsapp className={styles.whatsappIcon} />
                            <a href="https://wa.me/5534991954278" target="_blank" rel="noopener noreferrer">(34) 99195-4278</a>
                        </p>
                        <p className={styles.contactItem}>
                            <FaEnvelope className={styles.emailIcon} />
                            <a href="mailto:vitrine.uberlandia@hotmail.com">vitrine.uberlandia@hotmail.com</a>
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
