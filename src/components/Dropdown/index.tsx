import React, { useState, useRef } from 'react';
import { useClickAway } from 'ahooks';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

interface DropdownProps {
  defaultValue?: string;
  value?: string;
  options: {
    label: string;
    value: string;
  }[];
  onChange: (value: string) => void;
}

const Dropdown = (props: DropdownProps) => {
  const { defaultValue, value, options, onChange = () => {} } = props;
  const [selectValue, setSelectValue] = useState(defaultValue || value);
  const [visible, setVisible] = useState(false);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  useClickAway(() => {
    setVisible(false);
  }, [ref1, ref2]);

  const handleSelect = (value: string) => {
    setVisible(false);
    setSelectValue(value);
    onChange(value);
  };

  return (
    <div className="relative">
      <div
        ref={ref1}
        className="flex items-center cursor-pointer text-[#e9ecef] hover:text-[#bdc6cf]"
        onClick={() => setVisible(!visible)}
      >
        <div className="text-[15px] mr-2">
          {options.find((item) => item.value === selectValue)?.label}
        </div>
        <FontAwesomeIcon icon={solid('chevron-down')} />
      </div>
      <div
        ref={ref2}
        className={classNames(
          'absolute top-7 left-0 z-10 min-w-[160px] py-2 text-[15px] rounded bg-[#3a3f44] max-h-[200px] overflow-y-auto',
          visible ? 'block' : 'hidden'
        )}
      >
        {options.map((item, key) => (
          <div
            className="py-1 px-6 cursor-pointer text-[#aaa] bg-[#3a3f44] hover:text-[#fff] hover:bg-[#272b30]"
            key={key}
            onClick={() => handleSelect(item.value)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
