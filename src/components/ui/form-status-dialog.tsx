import Image from 'next/image';
import React from 'react';

import { Button } from './button';
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from './dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
  loading?: boolean;
}

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  loading,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader>
          <Image
            src={
              variant === 'success'
                ? '/icons/message-sucess-icon.svg'
                : '/icons/message-error-icon.svg'
            }
            alt={variant === 'success' ? 'success' : 'error'}
            width={170}
            height={140}
            className='relative left-1/2 -translate-x-1/2 md:h-47.5 md:w-58'
          />
        </DialogHeader>
        <DialogBody>
          <DialogTitle className='md:text-xl-semibold text-lg-semibold'>
            {variant === 'success'
              ? 'Message Sent Successfully!'
              : 'Failed to send.'}
          </DialogTitle>
          <DialogDescription className='md:text-md-regular text-sm-regular text-neutral-500'>
            {variant === 'success'
              ? 'Thank you for reaching out. I’ll get back to you as soon as possible'
              : 'Please check your internet connection or try refreshing the page.'}
          </DialogDescription>
          <DialogClose asChild>
            <Button
              variant='primary'
              className='mx-auto mt-5 w-full md:mt-6 md:w-77.5'
            >
              {loading ? '...Loading' : 'Back to Home'}
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
