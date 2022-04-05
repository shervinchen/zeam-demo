import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

interface LikeProps {
  status: boolean;
  size?: SizeProp;
  toggle: (status: boolean) => void;
}

const Like = ({ status, size, toggle }: LikeProps) => {
  const [like, setLike] = useState(status);

  const handleToggleStatus = () => {
    toggle(!like);
    setLike(!like);
  };

  useEffect(() => {
    setLike(status);
  }, [status]);

  return (
    <FontAwesomeIcon
      icon={solid('heart')}
      color={like ? '#f87171' : ''}
      cursor="pointer"
      size={size}
      onClick={handleToggleStatus}
    />
  );
};

export default Like;
