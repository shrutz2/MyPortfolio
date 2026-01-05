import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import emailConfig from '../config/emailjs';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nameValue, setNameValue] = useState('Shruti');

  useEffect(() => {
    if (emailConfig.publicKey) {
      emailjs.init(emailConfig.publicKey);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      setIsSubmitting(true);
      
      if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
        throw new Error('EmailJS configuration is incomplete');
      }

      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form.current,
        emailConfig.publicKey
      );
      
      toast.success('Message sent successfully!');
      form.current.reset();
    } catch (error: any) {
      const errorMessage = error?.text || error?.message || 'Failed to send message. Please try again.';
      toast.error(errorMessage);
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-xl">
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-800">Name</label>
          <input
            type="text"
            id="name"
            name="user_name"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            className="mt-1 block w-full rounded-md border border-purple/40 bg-white/20 backdrop-blur-sm shadow-sm focus:border-purple-400 focus:ring-purple-400 p-3 text-gray-900 placeholder-gray-600"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email</label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="mt-1 block w-full rounded-md border border-purple/40 bg-white/20 backdrop-blur-sm shadow-sm focus:border-purple-400 focus:ring-purple-400 p-3 text-gray-900 placeholder-gray-600"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-800">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full rounded-md border border-purple/40 bg-white/20 backdrop-blur-sm shadow-sm focus:border-purple-400 focus:ring-purple-400 p-3 text-gray-900 placeholder-gray-600"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-900 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin mr-2" size={20} />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default ContactForm;