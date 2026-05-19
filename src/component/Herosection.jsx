import Typewriter from "typewriter-effect";
import heroimage from "../assets/herosectionimage/hero.png";
function Herosection() {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section className="relative h-150 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            data-alt="A majestic Rajasthani palace architectural view at sunset with intricate sandstone carvings and arched windows. The lighting is warm and golden, casting long shadows and highlighting the detailed textures of the heritage building. The atmosphere is grand and serene, perfectly capturing the regal spirit of Sikar's historical landmarks against a clear evening sky."
            src={heroimage}
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary/80 to-primary-container/40"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile max-w-4xl mx-auto">
          <h1 className="text-[#ffffff] font-display-lg text-display-lg mb-stack-md">
            Discover the best places in Sikar City
          </h1>
          <div className="text-center py-10 min-h-30">
            <h1 className="text-4xl md:text-6xl font-bold text-[#ffffff] font-headline-lg">
              <Typewriter
                options={{
                  strings: [
                    "Welcome to Sikar City",
                    "Explore Local Businesses",
                    "Find Services Near You",
                    "Discover Your City",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </h1>
          </div>
          <p className="text-[#ffffff]/90 text-body-lg font-body-lg mb-stack-lg max-w-2xl mx-auto">
            From ancient heritage havelis to modern healthcare, explore
            everything Sikar has to offer in one comprehensive guide.
          </p>
        </div>
        {/* <!-- Decorative Arch Accent --> */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-surface arch-mask z-20"></div>
      </section>
    </>
  );
}

export default Herosection;
