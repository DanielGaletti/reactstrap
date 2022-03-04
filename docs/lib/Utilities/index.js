import React from 'react';
import Content from '../UI/Content';

const items = [
  {
    name: 'Colors',
    to: '/utilities/colors/'
  },
  {
    name: 'Clearfix',
    to: '/utilities/clearfix/'
  },
  {
    name: 'Navbar',
    to: '/utilities/navbar/'
  }
];

function Utilities(props) {
  return (
    <Content title="Utilities" items={items} {...props} />
  );
}

export default Utilities;
