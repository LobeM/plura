import { EditorBtns } from '@/lib/constants';
import { Contact2Icon } from 'lucide-react';
import React from 'react';

const ContactFormComponentPlaceholder = () => {
  const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return;
    e.dataTransfer.setData('componentType', type);
  };
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, 'contactForm')}
      className=' h-14 w-14 bg-muted/70 rounded-lg p-2 flex flex-row gap-[4px]'
    >
      <Contact2Icon size={40} className='text-muted-foreground' />
    </div>
  );
};

export default ContactFormComponentPlaceholder;
