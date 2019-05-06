import React from 'react';
import "scss/Footer.scss";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <small>Copyright &copy; {new Date().getFullYear()} Jonghyung</small>
            </footer>
        </div>
    );
};

export default Footer;