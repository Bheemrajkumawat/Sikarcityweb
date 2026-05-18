import React from "react";

function Helpsection() {
  return (
    <>
      <div class="bg-background text-on-surface font-body-md">
        {/* <!-- Hero Section --> */}
        <header class="relative w-full h-100 md:h-125 flex items-center justify-center overflow-hidden">
          <div
            class="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAasPRETQ8cMZqagdlsIjAEwXfBAC4ilUngxZDiRtACK2XxcoPF98NNWbbup3oc26tjuD9A67Ex7xS12jGUxuPwdSIbUeSW6cMp__EURpcOF38vFcBARCpPzpB5t59cZv648GnpIYlA-apx7RLFdh71x5EoWTqR_gKAna8pKj8J1cx77W4tgLqmg14RfVu4Sgiyf2Lvcco_akBaoN-NAS3dJB6lcrNkrWGjGEksNc34tyLc0OnWni1XgX7Ogb6OYtEaNoTxdkyxk5o')",
            }}
          ></div>
          <div class="absolute inset-0 hero-gradient"></div>
          <div class="absolute inset-0 jali-pattern"></div>
          <div class="relative z-10 text-center px-margin-mobile max-w-3xl mx-auto">
            <h1 class="font-display-lg text-display-lg text-white mb-stack-md">
              Contact Us
            </h1>
            <p class="font-body-lg text-body-lg text-primary-fixed-dim">
              We are here to help you navigate Sikar City. Reach out to our team
              for business inquiries, directory updates, or general support.
            </p>
          </div>
          {/* <!-- Rajasthan Accent Divider --> */}
          <div class="absolute bottom-0 left-0 w-full h-16 bg-background arch-divider"></div>
        </header>
        <main class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* <!-- Left Column: Contact Details --> */}
            <section class="lg:col-span-5 space-y-stack-lg">
              <div class="bg-surface-container-lowest p-stack-lg rounded-xl shadow-[0px_4px_20px_rgba(0,35,102,0.08)] border border-outline-variant/30 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-24 h-24 jali-pattern opacity-10"></div>
                <h2 class="font-headline-md text-headline-md text-primary mb-stack-lg flex items-center gap-2">
                  <span class="material-symbols-outlined text-secondary">
                    location_on
                  </span>
                  Get In Touch
                </h2>
                <div class="space-y-stack-lg">
                  {/* <!-- Address --> */}
                  <div class="flex gap-stack-md">
                    <div class="bg-secondary-fixed w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                      <span class="material-symbols-outlined text-on-secondary-fixed">
                        apartment
                      </span>
                    </div>
                    <div>
                      <h3 class="font-label-md text-label-md text-secondary uppercase tracking-wider">
                        Office Address
                      </h3>
                      <p class="font-body-md text-body-md text-on-surface mt-1">
                        Heritage Hub, 3rd Floor, Near Kalyan Circle,
                        <br />
                        Sikar, Rajasthan - 332001
                      </p>
                    </div>
                  </div>
                  {/* <!-- Phone --> */}
                  <div class="flex gap-stack-md">
                    <div class="bg-secondary-fixed w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                      <span class="material-symbols-outlined text-on-secondary-fixed">
                        call
                      </span>
                    </div>
                    <div>
                      <h3 class="font-label-md text-label-md text-secondary uppercase tracking-wider">
                        Phone Number
                      </h3>
                      <p class="font-body-md text-body-md text-on-surface mt-1">
                        +91 (1572) 250-1234
                      </p>
                      <p class="font-label-md text-label-md text-on-surface-variant">
                        Mon - Sat, 10 AM - 6 PM
                      </p>
                    </div>
                  </div>
                  {/* <!-- Email --> */}
                  <div class="flex gap-stack-md">
                    <div class="bg-secondary-fixed w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                      <span class="material-symbols-outlined text-on-secondary-fixed">
                        mail
                      </span>
                    </div>
                    <div>
                      <h3 class="font-label-md text-label-md text-secondary uppercase tracking-wider">
                        Email Support
                      </h3>
                      <p class="font-body-md text-body-md text-on-surface mt-1">
                        support@sikarcitydirectory.com
                      </p>
                      <p class="font-label-md text-label-md text-on-surface-variant">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Decorative Arch in Card --> */}
                <div class="mt-stack-lg pt-stack-lg border-t border-outline-variant/30">
                  <p class="font-label-md text-label-md text-on-surface-variant italic">
                    "Connecting the heart of Rajasthan with the digital world."
                  </p>
                </div>
              </div>
            </section>
            {/* <!-- Right Column: Contact Form --> */}
            <section class="lg:col-span-7">
              <div class="bg-surface-container-lowest p-stack-lg rounded-xl shadow-[0px_4px_20px_rgba(0,35,102,0.08)] border border-outline-variant/30">
                <h2 class="font-headline-md text-headline-md text-primary mb-stack-lg">
                  Send us a Message
                </h2>
                <form action="#" class="space-y-stack-md" method="POST">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                    <div class="space-y-1">
                      <label
                        class="font-label-md text-label-md text-on-surface-variant"
                        for="name"
                      >
                        Full Name
                      </label>
                      <input
                        class="w-full h-12 px-stack-md rounded-lg border border-outline-variant bg-surface hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        type="text"
                      />
                    </div>
                    <div class="space-y-1">
                      <label
                        class="font-label-md text-label-md text-on-surface-variant"
                        for="email"
                      >
                        Email Address
                      </label>
                      <input
                        class="w-full h-12 px-stack-md rounded-lg border border-outline-variant bg-surface hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        id="email"
                        name="email"
                        placeholder="example@mail.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div class="space-y-1">
                    <label
                      class="font-label-md text-label-md text-on-surface-variant"
                      for="subject"
                    >
                      Subject
                    </label>
                    <input
                      class="w-full h-12 px-stack-md rounded-lg border border-outline-variant bg-surface hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      type="text"
                    />
                  </div>
                  <div class="space-y-1">
                    <label
                      class="font-label-md text-label-md text-on-surface-variant"
                      for="message"
                    >
                      Message
                    </label>
                    <textarea
                      class="w-full p-stack-md rounded-lg border border-outline-variant bg-surface hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      rows="5"
                    ></textarea>
                  </div>
                  <div class="pt-stack-md">
                    <button
                      class="w-full md:w-auto px-12 h-14 bg-primary text-on-primary rounded-lg font-headline-md flex items-center justify-center gap-stack-sm shadow-lg hover:shadow-xl hover:translate-y-0.5 transition-all duration-200"
                      type="submit"
                    >
                      <span>Submit Request</span>
                      <span
                        class="material-symbols-outlined"
                        data-weight="fill"
                      >
                        send
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default Helpsection;
