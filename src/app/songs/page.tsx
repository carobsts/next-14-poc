import { FC, Suspense } from "react";
import { SearchInput, Table } from "../components/ui";
import styles from "@/app/styles/songs.module.css";
import { LABEL_LOOKING_SONGS } from "@/lib/contansts";

interface ISongsPage {
  searchParams?: {
    query?: string;
  };
};

const SongsPage: FC<ISongsPage> = async ({ searchParams }: ISongsPage) => {
  
  const query: string = searchParams?.query || "";

  return (
    <section className={styles.section}>
      <h3 className="mt-4 mb-4 text-1xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {LABEL_LOOKING_SONGS}
      </h3>
      <SearchInput />
      <Suspense
        key={`${query}`}
        fallback={<div> Cargando... </div>}
      >
        <Table query={query}/>
      </Suspense>
    </section>
  );
};

export default SongsPage;
