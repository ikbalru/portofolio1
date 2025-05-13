'use client';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { LucideIcon, Smartphone, Mail, MapPin, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import z from 'zod';

import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import FormStatusDialog from '@/components/ui/form-status-dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type contactFieldsProps = {
  label: string;
  icon: LucideIcon;
  link: string;
};

const contactFields: contactFieldsProps[] = [
  {
    label: '+62 1234567890',
    icon: Smartphone,
    link: '#',
  },
  {
    label: 'edwinanderson@email.com',
    icon: Mail,
    link: '#',
  },
  {
    label: 'Jakarta, Indonesia',
    icon: MapPin,
    link: '#',
  },
];

const formSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(3, 'Name must be at least 3 characters long')
    .max(50, 'Name must be at most 50 characters long'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email address')
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
  message: z
    .string({
      required_error: 'Message is required',
    })
    .min(20, 'Message must be at least 10 characters long')
    .max(500, 'Message must be at most 500 characters long'),
});

const ContactForm = () => {
  const [loading, setLoading] = React.useState(false);

  const [showDialog, setShowDialog] = React.useState(false);
  const [variant, setVariant] = React.useState<'success' | 'error'>('success');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      form.reset();
      setVariant('success');
    } catch (error) {
      console.log('Error sending email:', error);
    } finally {
      setLoading(false);
      setShowDialog(true);
    }
  }

  return (
    <div className='relative'>
      <Section className='relative z-20' id='contact'>
        <div className='flex-between flex flex-wrap gap-6'>
          {/* contact info */}
          <div className='flex-[3.8] basis-80'>
            <h2 className='md:display-2xl-bold display-md-bold text-neutral-950'>
              I&apos;ve been waiting for you.
            </h2>
            <p className='md:text-lg-medium text-md-medium mt-5.5 text-neutral-950'>
              Fill in the form or Send us an email
            </p>

            <div className='mt-6 flex flex-col gap-6 md:mt-10 md:gap-8'>
              {contactFields.map(({ label, icon, link }) => (
                <div
                  className='group/contact flex-start flex cursor-pointer gap-2 md:gap-4'
                  key={label}
                >
                  <div className='text-primary-300 flex-center flex h-10 w-10 rounded-full bg-neutral-100 md:h-12 md:w-12'>
                    {React.createElement(icon, {
                      className: 'h-5 w-5 md:h-6 md:w-6',
                    })}
                  </div>
                  <Link
                    href={link}
                    className='md:text-lg-regular text-md-medium group-hover/contact:text-primary-300 text-neutral-950 transition duration-300'
                  >
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* form */}
          <div className='bg-base-white shadow-card flex-[6.2] basis-80 rounded-xl p-4 md:rounded-2xl md:p-8'>
            <h3 className='md:display-xs-semibold text-lg-semibold text-neutral-950'>
              Send a Message
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm-semibold md:text-md-semibold mt-4 text-neutral-950 md:mt-6'>
                        Name
                      </FormLabel>
                      <Input disabled={loading} {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm-semibold md:text-md-semibold mt-4 text-neutral-950'>
                        Email
                      </FormLabel>
                      <Input disabled={loading} {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm-semibold md:text-md-semibold mt-4 text-neutral-950'>
                        Message
                      </FormLabel>
                      <Textarea disabled={loading} {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  variant='primary'
                  size='lg'
                  className='md:text-md-medium text-sm-medium text-neutral-25 mx-auto mt-4 max-md:h-12 md:mt-6'
                  disabled={loading}
                >
                  {loading ? (
                    <ClipLoader size={20} color='#fff' />
                  ) : (
                    <div className='flex-center flex gap-2 md:gap-1.25'>
                      <Send className='size-5' />
                      Submit
                    </div>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <FormStatusDialog
          variant={variant}
          loading={loading}
          open={showDialog}
          onOpenChange={setShowDialog}
        />
      </Section>

      {/* pattern */}
      <div className='absolute inset-x-0 bottom-0 z-10 h-28 md:h-82.5'>
        <Image
          src={'/images/pattern-bot1.png'}
          alt='pattern'
          fill
          sizes='100%'
          className='object-cover'
        />
      </div>
    </div>
  );
};

export default ContactForm;
