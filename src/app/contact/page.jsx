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
      <div className="h-auto lg:h-screen w-full p-2 md:p-10 flex flex-col items-center gap-8">
        <h1 className="font-bold text-4xl text-stone-200 underline decoration-yellow-500 text-center">
          Get in Touch: Let&apos;s Create Your Perfect Look!
        </h1>
        <div className="h-full w-full flex flex-col lg:flex-row p-2 bg-yellow-500/90 shadow-2xl ring-2 ring-yellow-200 rounded-md gap-2">
          <div className=" h-auto lg:w-1/2 flex flex-col items-center justify-center gap-8 text-6xl m-2 border-b-2 lg:border-b-0 lg:border-r-2 border-stone-200 pb-2 lg:pb-0 lg:pr-4  ">
            <h2 className="text-3xl text-stone-950 text-center p-2 ">
              Ready for a Hair Transformation? Schedule Your Appointment Today!
            </h2>
            <p className="text-base">
              Ready to take the next step towards your dream hair? Schedule a
              15-minute Google Meet video call with me to discuss your hair
              goals and preferences. During our consultation, we&apos;ll chat
              about your vision, review any inspiration photos or videos you
              have, and plan your perfect style. Once we&apos;ve discussed your
              ideas, we&apos;ll book your appointment to bring your dream hair
              to life. I&apos;m excited to connect with you and start this
              journey together!
            </p>
            <div className="h-full w-full p-1">
              <div className="w-full h-96 md:h-full bg-stone-200 rounded">
                <iframe
                  title="Hair Consult Call with David"
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ17jy5xLqHcU3R1NBwD5mk_9ZSl-vBZl0isqEr5MKOHCxIym02eD6xpPH8vSMk2DUxTKB2xEnkT?gv=true"
                  className="h-full w-full bg-stone-200 rounded-md ring-2 ring-yellow-200"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="h-full lg:w-1/2 flex flex-col items-center gap-8 text-6xl p-1">
            <h2 className="text-3xl text-stone-950 text-center p-2 ">
              Talk to Me: Let&apos;s Discuss Your Hair Goals!
            </h2>
            <p className="text-base">
              Have a question or need more information? I&apos;m here to help!
              Whether you&apos;re ready to book an appointment, want to discuss
              your hair ideas, or simply have a query, please don&apos;t
              hesitate to reach out. Fill out the contact form below, and
              I&apos;ll get back to you as soon as possible. Let&apos;s start a
              conversation and make your hair dreams a reality!
            </p>
            <form
              onSubmit={sendEmail}
              ref={form}
              className="h-full w-full bg-red-500 rounded-xl text-xl flex flex-col gap-8 justify-center p-8 bg-stone-200 text-stone-950 rounded-md ring-2 ring-yellow-200"
            >
              <span>Hey David,</span>
              <textarea
                rows={3}
                placeholder="your message here"
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
                placeholder="your email address"
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
