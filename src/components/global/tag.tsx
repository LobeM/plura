import React from 'react';
import clsx from 'clsx';

interface TagComponentProps {
  title: string;
  colorName: string;
  selectedColor?: (color: string) => void;
}

const TagComponent: React.FC<TagComponentProps> = ({
  colorName,
  title,
  selectedColor,
}) => {
  return (
    <div
      className={clsx('p-2 rounded-sm flex-shrink-0 text-xs cursor-pointer', {
        'bg-[#57acea]/10 text-[#57acea]': colorName === 'BLUE',
        'bg-[#ffac7e]/10 text-[#ffac7e]': colorName === 'ORANGE',
        'bg-rose-500/10 text-rose-500': colorName === 'ROSE',
        'bg-emerald-400/10 text-emerald-400': colorName === 'GREEN',
        'bg-purple-400/10 text-purple-400': colorName === 'PURPLE',
        'border border-[#57acea]': colorName === 'BLUE' && !title,
        'border border-[#ffac7e]': colorName === 'ORANGE' && !title,
        'border border-rose-500': colorName === 'ROSE' && !title,
        'border border-emerald-400': colorName === 'GREEN' && !title,
        'border border-purple-400': colorName === 'PURPLE' && !title,
      })}
      key={colorName}
      onClick={() => {
        if (selectedColor) selectedColor(colorName);
      }}
    >
      {title}
    </div>
  );
};

export default TagComponent;
