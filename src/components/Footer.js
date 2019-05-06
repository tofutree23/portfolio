import React from 'react';
import "scss/Footer.scss";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <small><span className="copyright">Copyright &copy; {new Date().getFullYear()}</span> Jonghyung</small>
            </footer>
        </div>
    );
};

export default Footer;