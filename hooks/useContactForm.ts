import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
  formType: z.enum(['contact', 'enquiry'])
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function useContactForm(formType: 'contact' | 'enquiry') {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      formType
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      
      // Show loading toast
      const loadingToast = toast.loading('Sending your message...');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        // Dismiss loading toast
        toast.dismiss(loadingToast);
        
        // Show error toast
        toast.error(result.message || 'Failed to send message', {
          description: 'Please try again or contact us directly.',
          duration: 5000,
        });
        return;
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
    isSubmitting
  };
} 