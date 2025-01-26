import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full flex flex-col items-center justify-center text-center">
      <div className="wow fadeInUp flex flex-col items-center" data-wow-delay=".15s">
        <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
