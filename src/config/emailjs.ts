import emailjs from '@emailjs/browser';

const emailConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'gSUZrcStx2KWpI7Eg',
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_0ghxgos',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_j7ikbye',
};
 
export default emailConfig;