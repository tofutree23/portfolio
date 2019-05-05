import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// 브라우저 라우터를 이용하면 html5 history API로 페이지 주소를 교체할 수 있게 된다.
import App from 'shared/App';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default Root;