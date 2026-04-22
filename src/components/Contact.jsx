import React from "react";

export default function Contact(props) {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/nasthazia-frankie-11596821a/",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z"
            fill="currentColor"
          />
        </svg>
      ),
      alt: "LinkedIn",
    },
    {
      href: "mailto:nasthaziafrankie24@gmail.com",
      icon: (
        <svg width="25" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="section" id="contact">
        <div
          className="container lg:grid lg:grid-cols-2 lg:items-stretch
             mt-20 px-4 mx-auto lg:px-8 xl:max-w-6xl mb-20"
        >
          <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
            <h2 className="headline-2 text-3xl lg:text-4xl lg:leading-tight font-semibold mb-6">
              Contact to Hire Me
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[40ch]">
              Click on the links below or Fill out the form to Hire me today so
              we can collaborate!
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map(({ href, icon }, key) => (
                // <a
                //   href={href}
                //   key={key}
                //   target="_blank"
                //   className="w-12 h-12 grid place-items-center ring-inset ring-2
                //             ring-zinc-50/5 rounded-lg transition[background-color,color]
                //             hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80"
                // >
                <a
                  href={href}
                  key={key}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="w-12 h-12 grid place-items-center ring-inset ring-2
             ring-zinc-50/5 rounded-lg transition[background-color,color]
             hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <form
            action="https://forminit.com/f/fy165i3sazl"
            method="POST"
            className="xl:pl-10 2xl:pl-20"
          >
            <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
              {/* name field */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="label block text-zinc-200 text-sm font-normal mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="fi-sender-fullName"
                  id="name"
                  autoComplete="name"
                  required
                  placeholder="Enter Name"
                  className="text-field block outline-none w-full px-3 py-3 text-sm
                            bg-zinc-800 rounded-xl ring-inset ring-transparent transition-shadow
                            hover:ring-zinc-50/5 focus:ring-sky-400 focus:ring-2 placeholder:text-zinc-400"
                />
              </div>

              {/* email field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="label block text-zinc-200 text-sm font-normal mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  name="fi-sender-email"
                  id="email"
                  autoComplete="email"
                  required
                  placeholder="Enter e-mail"
                  className="text-field block outline-none w-full px-3 py-3 text-sm
                            bg-zinc-800 rounded-xl ring-inset ring-transparent transition-shadow
                            hover:ring-zinc-50/5 focus:ring-sky-400 focus:ring-2 placeholder:text-zinc-400"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="label block text-zinc-200 text-sm font-normal mb-2"
              >
                Message
              </label>
              <textarea
                name="fi-text-message"
                id="message"
                placeholder="Enter message"
                required
                className="text-field block outline-none w-full px-3 py-3 text-sm
                            bg-zinc-800 rounded-xl ring-inset ring-transparent transition-shadow
                            hover:ring-zinc-50/5 focus:ring-sky-400 focus:ring-2 placeholder:text-zinc-400
                            resize-y min-h-32 max-h-80"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary flex items-center gap-4 cursor-pointer pr-3 pl-3
                    [&]:max-w-full w-full justify-center"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
