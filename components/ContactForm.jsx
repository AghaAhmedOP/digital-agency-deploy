import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full px-4 lg:w-9/12">
      <form>
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4 md:w-1/2">
            <div class="mb-6">
              <input
                type="text"
                placeholder="Enter your name"
                class="input-field focus:border-primary"
                name="name"
              />
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2">
            <div class="mb-6">
              <input
                type="text"
                placeholder="Company (Optional)"
                class="input-field focus:border-primary"
                name="company"
              />
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2">
            <div class="mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                class="input-field focus:border-primary"
                name="email"
              />
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2">
            <div class="mb-6">
              <input
                type="text"
                placeholder="Phone number"
                class="input-field focus:border-primary"
                name="phone number"
              />
            </div>
          </div>
          <div class="w-full px-4">
            <div class="mb-6">
              <textarea
                rows="4"
                name="message"
                placeholder="Tell me about your project"
                class="input-field resize-none focus:border-primary"
                spellcheck="false"
              ></textarea>
            </div>
          </div>
          <div class="w-full px-4">
            <div class="pt-4 text-center">
              <button class="mx-auto inline-flex items-center justify-center rounded-full bg-primary px-9 py-4 font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-xl">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
