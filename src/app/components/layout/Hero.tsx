import Link from "next/link";
import { FC } from "react";

export interface IHero {
  title: string;
  description: string;
  button: {
    label: string;
    action?: () => void;
  };
}; 

const Hero: FC<IHero> = (props: IHero) => {
  const { title, description, button } = props;
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
          className="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          href='/songs'
          >
            {button.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
