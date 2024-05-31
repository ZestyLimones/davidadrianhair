'use client';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

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
      <div className="h-auto w-full md:h-screen text-xl items-center p-2 md:p-10 justify-center items-center">
        <h1 className="font-bold text-4xl text-yellow-500 rounded-md underline decoration-yellow-200 text-center bg-stone-950/30 p-2">
          Get in Touch
        </h1>
        <div className="h-full flex flex-col lg:flex-row">
          <div className=" h-full lg:w-1/2 flex flex-col items-center text-6xl">
            <h1 className="font-bold text-4xl text-yellow-500 rounded-md underline decoration-yellow-200 text-center bg-stone-950/30 p-2">
              Schedule a Call
            </h1>
            <div className="">
              <div className=" h-100 bg-stone-200 rounded w-600px h-600px">
                <iframe
                  title="Hair Consult Call with David"
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ17jy5xLqHcU3R1NBwD5mk_9ZSl-vBZl0isqEr5MKOHCxIym02eD6xpPH8vSMk2DUxTKB2xEnkT?gv=true"
                  width="500"
                  height="700"
                  className="bg-stone-200 rounded-md ring-2 ring-yellow-200"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="h-full lg:w-1/2 flex flex-col items-center text-6xl">
            <h1 className="font-bold text-4xl text-yellow-500 rounded-md underline decoration-yellow-200 text-center bg-stone-950/30 p-2">
              Send me an email
            </h1>
            <form
              onSubmit={sendEmail}
              ref={form}
              className="h-3/5 w-full bg-red-500 rounded-xl text-xl flex flex-col gap-8 justify-center p-8 bg-stone-200 text-stone-950 rounded-md ring-2 ring-yellow-200"
            >
              <span>Hey David,</span>
              <textarea
                rows={4}
                placeholder="enter message you would like to send"
                className="bg-transparent border-b-2 border-b-stone-950 outline-none resize-none content-end"
                name="user_message"
                required
              ></textarea>
              <span>Thank you,</span>
              <input
                type="text"
                placeholder="your name"
                className="bg-transparent border-b-2 border-b-stone-950 outline-none"
                name="user_name"
                required
              />
              <input
                type="email"
                placeholder="enter email address"
                className="bg-transparent border-b-2 border-b-stone-950 outline-none"
                name="user_email"
                required
              />

              <button className="bg-yellow-500 ring-2 ring-yellow-200 rounded font-semibold text-stone-950 p-4">
                Send
              </button>
              {success && (
                <span className="text-yellow-500 font-semibold">
                  Your message was sent to David. 😊
                </span>
              )}
              {error && (
                <span className="text-red-600 font-semibold">
                  You message was not sent.
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
