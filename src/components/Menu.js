import React from 'react';
// 리액트 라우터에서 Link기능을 이용하기 위해서 필요한 부분. a태그를 이용해서 주소를 바꿔주게 되면 새로고침이 일어나게 된다.
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                {/* <li><a href="/">CLICK</a></li> <- 얘 쓰면 안됨. 새로고쳐짐.*/}
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Menu;