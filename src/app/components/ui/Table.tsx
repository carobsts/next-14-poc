import { FC } from "react";
import { SongsService } from "../../services";
import { ISong } from "@/types/song.type";
import Link from "next/link";
import Image from "next/image";

interface ITable {
  query: string;
}

const Table: FC<ITable> = async ({ query }) => {
  const SHOW_DETAILS: string = `Show details`;

  let songs = [];
  if (query) {
    songs = await SongsService.getSongs(query);
  };
  
  if (!songs.length) return <></>;

  return (
    <ul
      role="list"
      className="divide-y divide-gray-100 bg-white p-10 mt-8 rounded-md shadow-sm"
    >
      {songs.map((song: ISong) => (
        <li
          key={song.name.trim()}
          className="flex justify-between gap-x-6 py-5"
        >
          <div className="flex min-w-0 gap-x-4">
            <Image
              src={song.img}
              className="h-12 w-12 flex-none rounded-md bg-gray-50"
              alt="Picture of Album Song"
              width={48}
              height={48}
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {song.name}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {song.artist}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{song.duration}</p>
            <Link
              href={`/songs/${song.id}`}
              className="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
            >
              {SHOW_DETAILS}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Table;
