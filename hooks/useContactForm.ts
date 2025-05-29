import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  formType: z.enum(['contact', 'enquiry']),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function useContactForm(formType: 'contact' | 'enquiry') {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      formType,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Show loading toast
      const loadingToast = toast.loading('Sending your message...');

      // Send form data to your API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // Dismiss loading toast
        toast.dismiss(loadingToast);

        throw new Error('Failed to submit form');
      }

      // Send Telegram notification
      const telegramResponse = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!telegramResponse.ok) {
        console.error('Failed to send Telegram notification');
      }

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // Show success toast
      toast.success(
        formType === 'contact'
          ? 'Message sent successfully!'
          : 'Enquiry submitted successfully!',
        {
          description: 'We will get back to you as soon as possible.',
          duration: 5000,
        }
      );

      // Reset form
      reset();
    } catch (error) {
      // Show error toast
      toast.error('Something went wrong', {
        description: 'Please try again or contact us directly.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
}
