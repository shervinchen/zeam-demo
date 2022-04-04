import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Like = (props: { collect: boolean; size?: SizeProp }) => {
  const { collect, size } = props;
  return (
    <FontAwesomeIcon
      icon={solid('heart')}
      color={collect ? '#f87171' : ''}
      cursor="pointer"
      size={size}
    />
  );
};

export default Like;
