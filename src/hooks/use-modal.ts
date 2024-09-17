import { useContext } from 'react';
import { ModalContext } from '@/providers/modal-provider';

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within the modal provider');
  }
  return context;
};
