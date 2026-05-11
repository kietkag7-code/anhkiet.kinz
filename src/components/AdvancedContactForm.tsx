import { motion } from 'framer-motion';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const AdvancedContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const fields = [
    { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Let\'s talk about...' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="relative w-full max-w-2xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {/* Success Message */}
      {isSubmitted && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center shadow-2xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-200">Thank you for reaching out. I'll get back to you soon!</p>
          </motion.div>
        </motion.div>
      )}

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {fields.map((field) => (
          <motion.div
            key={field.name}
            variants={itemVariants}
            className="relative"
          >
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              {field.label}
            </label>
            <div className="relative group">
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof FormData]}
                onChange={handleChange}
                onFocus={() => setFocusedField(field.name)}
                onBlur={() => setFocusedField(null)}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all duration-300 backdrop-blur-md"
              />
              {focusedField === field.name && (
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 pointer-events-none"
                  layoutId="focus-ring"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              )}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Message Field */}
      <motion.div variants={itemVariants} className="relative">
        <label className="block text-sm font-semibold text-gray-300 mb-2">
          Message
        </label>
        <div className="relative group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            placeholder="Your message..."
            rows={5}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all duration-300 backdrop-blur-md resize-none"
          />
          {focusedField === 'message' && (
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 pointer-events-none"
              layoutId="focus-ring"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          )}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
        </div>
      </motion.div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        variants={itemVariants}
        className="mt-8 w-full px-8 py-4 relative group overflow-hidden rounded-lg font-semibold text-white transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Button background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300" />

        {/* Button content */}
        <div className="relative z-10 flex items-center justify-center gap-2">
          <motion.span
            animate={isSubmitting ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            ✉️
          </motion.span>
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        </div>

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>
      </motion.button>
    </motion.form>
  );
};

export default AdvancedContactForm;
