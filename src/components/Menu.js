import React, { useState, useEffect } from 'react';
// 리액트 라우터에서 Link기능을 이용하기 위해서 필요한 부분. a태그를 이용해서 주소를 바꿔주게 되면 새로고침이 일어나게 된다.
import { Link } from 'react-router-dom';
import _ from 'lodash';
import 'scss/Menu.scss';

const Menu = ({ path }) => {
  const [selected, setSelected] = useState(Array(4).fill(false));
  const menuName = ['home', 'about', 'works', 'contact'];
  useEffect(() => {
    let copied = _.cloneDeep(selected);
    switch (path) {
      default:
        for (let i = 0; i < selected.length; i++) {
          if (i === 0) copied[i] = true;
          else copied[i] = false;
        }
        break;
      case '/about':
        for (let i = 0; i < selected.length; i++) {
          if (i === 1) copied[i] = true;
          else copied[i] = false;
        }
        break;
      case '/works':
        for (let i = 0; i < selected.length; i++) {
          if (i === 2) copied[i] = true;
          else copied[i] = false;
        }
        break;
      case '/contact':
        for (let i = 0; i < selected.length; i++) {
          if (i === 3) copied[i] = true;
          else copied[i] = false;
        }
        break;
    }
    setSelected(copied);
    // eslint-disable-next-line
  }, [path]);
  return (
    <div className="menu">
      <nav>
        <ul>
          {_.map(menuName, (item, index) => (
            <li>
              <Link to={item === 'home' ? '/' : `/${item}`}>
                <span style={{ color: selected[index] ? 'crimson' : 'black' }}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
