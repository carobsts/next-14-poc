"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";

const SearchInput: FC<{}> = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleChange = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) params.set('query', term);
    else params.delete('query');
    replace(`${pathname}?${params.toString()}`)
  };
  return (
    <div>
      <div className="bg-white flex relative mt-6 rounded-md shadow-sm p-4">
        <input
          type="text"
          name="search"
          id="search"
          onChange={(event) => handleChange(event.target.value)}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
          placeholder="Search by song name..."
          defaultValue={searchParams.get('query')?.toString()}
        />
      </div>
    </div>
  )
};

export default SearchInput;
