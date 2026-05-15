import React from "react";

function Servicedetails() {
  return (
    <>
      <main className="max-w-container-max mx-auto px-margin-desktop py-stack-lg">
        {/* <!-- Image Gallery Bento Grid --> */}
        <section className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-unit h-[400px] md:h-[500px] mb-stack-lg rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,35,102,0.08)]">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="A wide-angle, cinematic photograph of a state-of-the-art multi-specialty hospital in Sikar during the golden hour. The architecture features modern glass facades blended with traditional Rajasthani sandstone accents. The lighting is warm and welcoming, reflecting a clean, high-end medical environment. The sky is a soft gradient of orange and royal blue, matching the corporate identity of the directory."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0yw79R6JyZz-oNGh3SGgyfCex2b77TjpvQ03E_0Orb39LVgzveO60_34W7zaiBawRWdeUrzbp3S_0s84Ns0y1TbmY0LofvjWkC6YAoinPRPQmH3KM3_iU25kFb3RWoHAqLbSBOE6jbRJAoRXgEfw7myeqUZo_mVfPxw2dE7f_5P8BJs0jAfPOjw1UOWBE9J97JvaGIVFQQVP9XMLFbFM4PBvUEGRMaLUvxF79dWhw2Oys3DPsHw0-1gdNjjh1uoNGM8Xi9B9dm_s"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-stack-md">
              <span className="text-white font-label-md bg-secondary px-3 py-1 rounded-full">
                Main Entrance
              </span>
            </div>
          </div>
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="An interior shot of a pristine, high-tech diagnostic laboratory within a major Sikar hospital. The lighting is bright, cool, and clinical, emphasizing absolute cleanliness. Advanced medical equipment is arranged neatly on white surfaces. The color palette is dominated by professional blues and sterile whites, conveying a mood of precision and reliability."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLSirYX5-7jFhZKfxWyUAlPe1paTZUbn8dkXVLKFlLi0c6OLBYREK-tCcXFcDCcoJoz6Ysiq1PCAGlZG6ptOl556HhfMn_qiooWohztzFhZvrHpEZHhSKr5lYbK6fzLJpedDs_ILgxz3yIG1w2rs7aPRu1jCrJFnUAlrCoMkRe9HHxguLvSL_06XqmR9uBMk5hHvvx-c5WhqN7n9UdChiAEcFGx6gDxkqeCH9S8_vBPIBaQull-Gre2UqjSRLZrz2Pvgu_37fmtfs"
            />
          </div>
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="A luxurious private patient suite in a Sikar hospital, designed with comfort and heritage in mind. The room features high-quality wooden furniture and a subtle Jali-inspired wallpaper pattern. Large windows let in soft, natural daylight. The atmosphere is calm and restorative, leaning towards a premium hospitality feel within a healthcare setting."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx0HSxqtnFQh-xLpse0WJJDOELr8LjBFCENogeOl8nIHJEgoZZFTtZihCrHE4JGUUucAtmLYqmqcDIo3_iH8U7cQzLa9-C4xkoP2azPr3QLs_IMdrjeHew9fcHpzQsjlo4DWjiewCIhPAkz-8bSGO3TSU12zAnPtgoQNYr_8SYDEZz4XSUjBHEH7uVFVcWD2N0C123kSSZV3QeXQO8qvpZskS1OqUUVRKf-H83PPE17GQyC4Y6bPQJq7yS4PhLe5TdtlhwQkxwNq4"
            />
          </div>
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="A professional team of doctors and nurses standing confidently in a brightly lit, modern hospital corridor in Sikar. They are wearing crisp white coats and blue scrubs, smiling warmly to evoke trust and care. The background shows blurred medical signage and clean, polished floors. The lighting is high-key and optimistic, reinforcing the hospital's authority and excellence."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBghTEhwW1wZPRFGBbHkHGx5ei0mExi_pioI8LtHXd6V4q8zprARb0T7qWJNy3y1Anyysj5r4vWlni9_J23DfPMQ9ZZCIpl6YlL3cZNuhJu_eqOWwAxQzDir0M4hKdzFxUHpYJBGtNA0J27D28CL7h2FnPpmPQIovbQZW43bYsjIUQA0yjEPsNsp-FlQSHzGoBeLp9dw9LiFDmomJyZ4BgdBMVsd2VcfxNUbK1rtm_dbnK7UX3RXafgRHV1asagjlDoiJdx5OXzkec"
            />
          </div>
        </section>
        {/* <!-- Two Column Content --> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {/* <!-- Main Content --> */}
          <div className="lg:col-span-2 space-y-stack-lg">
            <div className="bg-surface-container-lowest p-stack-md rounded-xl shadow-sm border border-outline-variant">
              <div className="flex flex-wrap items-center justify-between gap-stack-sm mb-4">
                <h1 className="font-headline-lg text-headline-lg text-primary">
                  Sikar Apex Multi-Specialty Hospital
                </h1>
                <div className="flex gap-2">
                  <span className="flex items-center gap-1 bg-primary-container/10 text-primary-container px-3 py-1 rounded-full text-label-md font-label-md border border-primary-container/20">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      data-weight="fill"
                    >
                      verified
                    </span>
                    Verified
                  </span>
                  <span className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-label-md font-label-md">
                    <span className="material-symbols-outlined text-[18px]">
                      emergency
                    </span>
                    Open 24/7
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-secondary-container">
                  <span
                    className="material-symbols-outlined"
                    data-weight="fill"
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    data-weight="fill"
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    data-weight="fill"
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    data-weight="fill"
                  >
                    star
                  </span>
                  <span className="material-symbols-outlined">star_half</span>
                </div>
                <span className="text-on-surface-variant font-body-md">
                  4.5 (248 Reviews)
                </span>
                <span className="mx-2 text-outline">|</span>
                <span className="text-on-surface-variant font-body-md">
                  General Hospital • Cardiology • Neurology
                </span>
              </div>
              <div className="space-y-4">
                <h2 className="font-headline-md text-headline-md text-on-background flex items-center gap-2">
                  About the Hospital
                  <div className="h-[1px] flex-grow bg-outline-variant ml-2"></div>
                </h2>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  Established in 2012, Sikar Apex Hospital has become the
                  leading healthcare destination in the Shekhawati region. We
                  combine world-className medical expertise with the traditional
                  hospitality of Rajasthan. Our facility is equipped with 200+
                  beds, 5 advanced modular operation theaters, and a
                  state-of-the-art 24/7 Emergency and Trauma center.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      check_circle
                    </span>
                    NABH Accredited Facility
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      check_circle
                    </span>
                    Advanced Cardiac Life Support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      check_circle
                    </span>
                    In-house Pharmacy &amp; Lab
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      check_circle
                    </span>
                    Cashless Insurance TPA
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Rajasthan Accent Divider --> */}
            <div className="relative py-stack-md flex justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant"></div>
              </div>
              <div className="relative bg-background px-4">
                <div className="w-12 h-16 border-2 border-primary arch-mask flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    medical_services
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- Reviews Section --> */}
            <div className="bg-surface-container-lowest p-stack-md rounded-xl shadow-sm border border-outline-variant">
              <div className="flex justify-between items-center mb-stack-md">
                <h2 className="font-headline-md text-headline-md text-on-background">
                  Patient Reviews
                </h2>
                <button className="text-primary font-label-md hover:underline">
                  Write a Review
                </button>
              </div>
              <div className="space-y-stack-md">
                {/* <!-- Review Card 1 --> */}
                <div className="p-4 bg-surface rounded-lg border border-outline-variant hover:shadow-md transition-shadow">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                        R
                      </div>
                      <div>
                        <div className="font-label-md">Rajesh Kumar</div>
                        <div className="text-xs text-on-surface-variant">
                          2 days ago
                        </div>
                      </div>
                    </div>
                    <div className="flex text-secondary-container">
                      <span
                        className="material-symbols-outlined text-[18px]"
                        data-weight="fill"
                      >
                        star
                      </span>
                      <span
                        className="material-symbols-outlined text-[18px]"
                        data-weight="fill"
                      >
                        star
                      </span>
                      <span
                        className="material-symbols-outlined text-[18px]"
                        data-weight="fill"
                      >
                        star
                      </span>
                      <span
                        className="material-symbols-outlined text-[18px]"
                        data-weight="fill"
                      >
                        star
                      </span>
                      <span
                        className="material-symbols-outlined text-[18px]"
                        data-weight="fill"
                      >
                        star
                      </span>
                    </div>
                  </div>
                  <p className="text-body-md text-on-surface-variant">
                    Excellent care provided during my father's heart surgery.
                    The nursing staff is very professional and the facilities
                    are top-notch. Truly the best in Sikar.
                  </p>
                </div>
                {/* <!-- Review Card 2 --> */}
                <div className="p-4 bg-surface rounded-lg border border-outline-variant hover:shadow-md transition-shadow">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold">
                        S
                      </div>
                      <div>
                        <div className="font-label-md">Sunita Sharma</div>
                        <div className="text-xs text-on-surface-variant">
                          1 week ago
                        </div>
                      </div>
                    </div>
                    <div className="flex text-secondary-container">
                      <span
                        className="material-symbols-outlined text-[18px]"
                        data-weight="fill"
                      >
                        star
                      </span>
                      <span
                        className="material-symbols-outlined text-[18px]"
                        data-weight="fill"
                      >
                        star
                      </span>
                      <span
                        className="material-symbols-outlined text-[18px]"
                        data-weight="fill"
                      >
                        star
                      </span>
                      <span
                        className="material-symbols-outlined text-[18px]"
                        data-weight="fill"
                      >
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                    </div>
                  </div>
                  <p className="text-body-md text-on-surface-variant">
                    Wait times in the OPD can be long, but the doctors are very
                    knowledgeable and explain everything clearly. Very clean
                    hospital.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Nearby Places --> */}
            <div className="space-y-stack-md">
              <h2 className="font-headline-md text-headline-md text-on-background">
                Nearby Medical Facilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                <div className="flex items-center p-stack-sm bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer">
                  <img
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                    data-alt="A professional pharmacist in a white coat working in a modern, well-lit pharmacy in Sikar. Shelves behind are stocked with various medications in neat rows. The lighting is clean and bright, conveying a sense of order and medical trust."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJKBksONYmxkL5xgt0FXMXetYr0GYmy11SmxY-pReiFQeuN8z0HjjZIq1cNEnRgp1Twl4TPoWmrVRNzejTxItHR_1B5FMxEjnl1rCGAvN0Vm2ADWuuHZAXU21E5hlt6jxHLtkvrIcC2i0P7OYIzQ6ki7RdRFVJ0zMRekLKSkQQal5qMfEz5jeuurdldNQ0O4POK45VsP0_WjeYQF0A1M9exzWLsP4p03OzBdogqBKore2sLvtlXCue2bGp4ZlQauk6kalnWdvNozY"
                  />
                  <div>
                    <h4 className="font-label-md text-primary">
                      Sikar Pharmacy 24/7
                    </h4>
                    <p className="text-xs text-on-surface-variant">
                      0.2 km away • Open Now
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-stack-sm bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer">
                  <img
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                    data-alt="A modern medical diagnostic center interior with high-tech imaging equipment and a sleek reception desk. The aesthetic is professional and high-end, utilizing soft white and blue lighting to create a calm, sophisticated environment."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA__5HomQmtKNup4TC1SbhJ17GWBgBnT1Ho_k_MAYCq48d-iq1wDmZ7cQYmDsET7dC8kpO0jfK4rB6RDpFaL1Im5z_VIAOHhm2kbV_tfbvWT4h_LqgxHNkmA4yHYe9IvLpVHsDLXatoRFrddq6Z6JKYphLWdERyzP94xWfwEMEk0cs1M2ZMsL6A7DuhU5nTBY9DMViHJAaNFEBI9xNt-T1mT0FFQds2aQgKbQ5aaVi5ais7RMGW5ZdNT1GDSAECLq9AfLgV4EIpPI"
                  />
                  <div>
                    <h4 className="font-label-md text-primary">
                      Precision Labs
                    </h4>
                    <p className="text-xs text-on-surface-variant">
                      0.5 km away • Accredited
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Sidebar --> */}
          <aside className="space-y-stack-lg">
            {/* <!-- CTA Card --> */}
            <div className="sticky top-24 bg-surface-container-lowest p-stack-md rounded-xl shadow-[0px_4px_20px_rgba(0,35,102,0.08)] border border-outline-variant space-y-4">
              <button className="w-full bg-secondary-container text-on-secondary-container py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-secondary transition-colors text-lg">
                <span className="material-symbols-outlined">call</span> Call Now
              </button>
              <button className="w-full bg-[#25D366] text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-lg">
                <span className="material-symbols-outlined">chat</span> WhatsApp
              </button>
              <div className="pt-4 space-y-4 border-t border-outline-variant">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">
                    location_on
                  </span>
                  <div>
                    <div className="font-label-md text-on-background">
                      Location
                    </div>
                    <div className="text-body-md text-on-surface-variant">
                      Plot No. 45, Piprali Road, Near Railway Station, Sikar,
                      Rajasthan - 332001
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">
                    schedule
                  </span>
                  <div>
                    <div className="font-label-md text-on-background">
                      Working Hours
                    </div>
                    <div className="text-body-md text-on-surface-variant">
                      Open 24 Hours (Everyday)
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">
                    language
                  </span>
                  <div>
                    <div className="font-label-md text-on-background">
                      Website
                    </div>
                    <div className="text-body-md text-primary hover:underline cursor-pointer">
                      www.sikarapexhospital.com
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Map Placeholder --> */}
              <div className="w-full h-48 rounded-lg overflow-hidden bg-surface-container border border-outline-variant relative">
                <div className="absolute inset-0 jali-pattern opacity-10"></div>
                <div className="w-full h-full flex flex-col items-center justify-center text-on-surface-variant p-4 text-center">
                  <span
                    className="material-symbols-outlined text-4xl mb-2 text-primary"
                    data-location="Sikar"
                  >
                    map
                  </span>
                  <p className="text-xs font-label-md">
                    Interactive Map View
                    <br />
                    Piprali Road, Sikar
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Emergency Info Card --> */}
            <div className="bg-primary text-on-primary p-stack-md rounded-xl">
              <h3 className="font-headline-md mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined">
                  emergency_home
                </span>
                Emergency
              </h3>
              <p className="text-body-md mb-4 opacity-90">
                Instant ambulance dispatch available 24/7 across Sikar district.
              </p>
              <div className="text-2xl font-bold tracking-wider text-secondary-fixed">
                01572-245678
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

export default Servicedetails;
