import { useEffect, useState } from 'react';

import ReactFlagsSelect from 'react-flags-select';

interface FlagSelectorInterface {
  onSelect(flag: any): any;
  flag?: string;
}

export const FlagSelector: React.FC<FlagSelectorInterface> = ({
  onSelect,
  flag,
}) => {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    console.log('desde useEffect flag:', flag);
    if (flag) {
      setSelected(flag);
    }
  }, [flag]);

  const handleSelectFlag = (e: any) => {
    console.log('Event.target:', e);
    setSelected(e);
    onSelect(e);
  };

  return (
    <ReactFlagsSelect
      className="ReactFlagSelector"
      selected={selected}
      onSelect={handleSelectFlag}
    />
  );
};

export default FlagSelector;
