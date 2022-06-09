/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import './IconSwitch.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function IconSwitch(props) {
   const { icon, onSwitch } = props;
   return (
      <div className="iconswitch material-icons" onClick={() => onSwitch(icon)}>
         {icon}
      </div>
   );
}

IconSwitch.propTypes = {
   icon: PropTypes.string.isRequired,
   onSwitch: PropTypes.func.isRequired,
};
