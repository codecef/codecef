import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Bug-Free Code & Rigorous Testing
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We ensure clean, optimized, and error-free code, thoroughly tested across all platforms for stability, reliability, and flawless performance.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Disaster Recover  
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Robust plans to safeguard your data and ensure business continuity
                </p>
              </div>
              <div className="mb-4">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Performance Optimization & Premier Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We fine-tune solutions for maximum speed and scalability while providing dedicated, prompt support to resolve any challenges and maintain top-notch performance.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
