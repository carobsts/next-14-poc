import Link from "next/link";
import { FC } from "react";
import { IHero } from "./components/layout/Hero";
import { LABEL_GO_BACK_HOME, LABEL_HTTP_404, LABEL_PAGE_NOT_FOUND, LABEL_SORRY_404 } from "@/lib/contansts";
import { paths } from "@/lib/paths";

interface INotFoundPage extends IHero {
  status: number;
};

const NotFound: FC<INotFoundPage> = () => {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-pink-600">{LABEL_HTTP_404}</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {LABEL_PAGE_NOT_FOUND}
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          {LABEL_SORRY_404}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href={paths.root}
            className="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
          >
            {LABEL_GO_BACK_HOME}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;