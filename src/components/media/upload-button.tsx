'use client';
import React from 'react';
import { useModal } from '@/hooks/use-modal';
import { Button } from '../ui/button';
import CustomModal from '../global/custom-modal';
import UploadMediaForm from '../forms/upload-media';

type Props = {
  subaccountId: string;
};

const MediaUploadButton = ({ subaccountId }: Props) => {
  const { isOpen, setOpen, setClose } = useModal();

  return (
    <Button
      onClick={() =>
        setOpen(
          <CustomModal
            title='Upload Media'
            subheading='Upload a file to your media bucket'
          >
            <UploadMediaForm subaccountId={subaccountId} />
          </CustomModal>
        )
      }
    >
      Upload
    </Button>
  );
};

export default MediaUploadButton;
