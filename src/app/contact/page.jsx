'use client';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = 'Say Hello';

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div className="">
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            👋🏽
            <div className=" bg-stone-200 rounded mt-10 w-600px h-600px">
              <iframe
                // className="w-full h-full"
                title="Book a consult call"
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0hNIYv29ZrS72E0_aJd9fmy-_KuJ_03pcD3nhZIAWiw8dilQDbD5FdupStum2GLmz82hLAi5SE?gv=true"
                width="400"
                height="600"
              ></iframe>
            </div>
          </div>
        </div>
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Hey David,</span>
          <textarea
            rows={4}
            placeholder="enter message you would like to send"
            className="bg-transparent border-b-2 border-b-stone-900 outline-none resize-none content-end"
            name="user_message"
            required
          ></textarea>
          <span>Thank you,</span>
          <input
            type="email"
            placeholder="enter email address"
            className="bg-transparent border-b-2 border-b-stone-900 outline-none"
            name="user_email"
            required
          />

          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message was sent to David.
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              You message was not sent.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
