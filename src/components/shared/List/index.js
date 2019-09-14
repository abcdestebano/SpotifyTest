import React from 'react';
import { array } from 'prop-types';
import { NavLink } from 'react-router-dom';

/* STYLES */
import { Ul, Li } from './styles';

const List = ({ content }) => (
  <Ul>
    {
      content.map(item =>
        <Li key={item}>
          <NavLink
            to={item.path}
            exact
            className="nav-links"
            activeStyle={{ opacity: 1 }}>{item.name}</NavLink>
        </Li>
      )
    }
  </Ul>
);

List.propTypes = {
  content: array
}

export default List;