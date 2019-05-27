import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// 브라우저 라우터를 이용하면 html5 history API로 페이지 주소를 교체할 수 있게 된다. 리액트 라우터를 쓰기 위해서 필요.
import App from 'shared/App';

const Root = () => (
  <BrowserRouter>
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
    <App />
  </BrowserRouter>
);

export default Root;
