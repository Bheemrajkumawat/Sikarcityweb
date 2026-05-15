import React from "react";
function FeaturedSection() {
  return (
    <>
      {/* <!-- Featured Section --> */}
      <section className="py-stack-lg bg-surface-container-low jali-pattern">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md">
                Trusted by Sikar's Community
              </h2>
              <div className="space-y-stack-md">
                <div className="flex gap-stack-md">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">
                      Verified Listings
                    </h4>
                    <p className="text-on-surface-variant">
                      Every place is manually verified by our team for
                      authenticity.
                    </p>
                  </div>
                </div>
                <div className="flex gap-stack-md">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">update</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Live Updates</h4>
                    <p className="text-on-surface-variant">
                      Real-time status on opening hours and special events.
                    </p>
                  </div>
                </div>
              </div>
              <button className="mt-stack-lg border-2 border-primary text-primary px-stack-lg py-stack-sm rounded-lg font-bold hover:bg-primary hover:text-white transition-all">
                Learn More About Us
              </button>
            </div>
            <div className="grid grid-cols-2 gap-stack-md">
              <div className="pt-stack-lg">
                <img
                  className="rounded-2xl shadow-lg w-full h-75 object-cover"
                  data-alt="A detailed close-up shot of traditional Rajasthani textiles and handicrafts displayed in a boutique storefront in Sikar. The vibrant colors of blue, orange, and red fabrics are illuminated by soft, natural sunlight filtering through an ornate window. The high-quality photographic style highlights the intricate hand-stitched details and the cultural richness of local Sikar artistry."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZhsN_bhDXTHUGNBMa8s4wWkp8s_2Q3EW_a0y0HPLHwzOZcG9O-p9drndu9qSLJvHAVxxYXJ-xfjFCVK8_wY18uy4zIGaBUEneDAuGTkmwn74v1_pakSpgu_vQScwhyj7V-XMuYZ1JvdDeoYBF7d841On56RNAfdMiBDvWHGcxs029HsPBo12kYfJD9s78c0B3rWYjzOG8tJELJL6BCyCs69bIOdZXFr_NQLUEAmavfDop9q64PF2PCTgsNFaRyuCvhRpPycaP-7Y"
                />
              </div>
              <div>
                <img
                  className="rounded-2xl shadow-lg w-full h-75 object-cover"
                  data-alt="A modern, clean hospital reception area in Sikar with professional medical staff assisting patients. The lighting is bright and sterile yet welcoming, utilizing a soft blue and white color scheme consistent with a high-end corporate healthcare facility. The environment reflects technological advancement and compassionate care within the local city context."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWrzvVp8c6hPWRnBrWTFoLPAakKt3gipiVWFmJeM0cswDVMcRS3Yv7MEIDG8PyIK1GloqjLHjvwbrbY1MFn7LxbZXgfF-i6-aY5mxnrtW4egR9zCNfSr6Bp_2HrkHUcFT03wqF7Wrwv353lG-tVnCDgL6Ue-_5TcacqYBRTqvhCnlMO-yQG9zUXDI4mygE77hMJV9WrHaQqpvDBo_VFGV0LTxJr64zZCu28yOyIFJvFlIW6vfgJLyU-LNHAdy6KSux5g9kiPdpwV4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedSection;
