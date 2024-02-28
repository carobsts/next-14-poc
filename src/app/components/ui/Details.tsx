import Link from "next/link";
import { MusicalNoteIcon } from "@heroicons/react/20/solid";
import { SongsService } from "../../services";
import { FC } from "react";
import { IField } from "@/types/field.type";
import { LABEL_DO_YOU_KNOW, LABEL_GO_BACK, LABEL_READ_ABOUT_SONG, LABEL_SONG_DETAILS } from "@/lib/contansts";
import { paths } from "@/lib/paths";
import Image from "next/image";

interface IDetails {
  id: string;
};

const Details: FC<IDetails> = async ({ id }) => {
  
  const track = await SongsService.getTack(id.toString());

  if (!track) return <></>;

  const fields: IField[] = [
    {
      label: "Song name",
      value: track.name,
    },
    {
      label: "Artist",
      value: track.artist,
    },
    {
      label: "Type",
      value: track.type,
    },
  ];

  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pr-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <h2 className="text-base font-semibold leading-7 text-pink-600">
            {LABEL_SONG_DETAILS}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {LABEL_READ_ABOUT_SONG}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {LABEL_DO_YOU_KNOW}
          </p>
          <dl className="mb-20 mt-10 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
            {fields?.map((item: any) => (
              <div key={item.label} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <MusicalNoteIcon
                    className="absolute left-1 top-1 h-5 w-5 text-pink-600"
                    aria-hidden="true"
                  />
                  {`${item.label}:  `}
                </dt>
                <dd className="inline">{item.value}</dd>
              </div>
            ))}
          </dl>
          <Link
            href={paths.songs}
            className="mt-10 rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
          >
            {LABEL_GO_BACK}
          </Link>
        </div>
      </div>
      <Image
        src={track.img}
        alt="Picture of Album Song"
        width={300}
        height={300}
      />
    </div>
  );
};

export default Details;
