import { Details } from "@/app/components/ui";
import { FC, Suspense } from "react";

interface ISongDetailsPage {
  params: {
    id: string
  }
};

const Song: FC<ISongDetailsPage> = async({
  params
}) => {
  const { id } = params;
  return (
    <div className="overflow-hidden py-24 sm:py-32 rounded-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <Suspense key={`${id}`} fallback={<div> Cargando ... </div>}>
        <Details id={id} />
      </Suspense>
      </div>
    </div>
  );
};

export default Song;
