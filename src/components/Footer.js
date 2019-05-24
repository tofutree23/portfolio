import React from 'react';
import 'scss/Footer.scss';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <small>
          <span className="copyright">
            Copyright &copy; {new Date().getFullYear()}
          </span>{' '}
          Jonghyung
        </small>
      </footer>
      <div className="here">
        * 이 웹사이트는 Vanilla JavaScript, SCSS와 React만을 사용하여
        만들어졌습니다.
      </div>
    </div>
  );
};

export default Footer;
