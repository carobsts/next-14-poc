import { FC } from "react";
import { Hero } from "./components/layout";
import { LABEL_DESCRIPTION_HOME_PAGE, LABEL_SHOW_ME, LABEL_WELCOME_TO_FILADDIFY } from "@/lib/contansts";

const Home: FC<{}> = () => {
  return (
    <Hero
    button={{ label: LABEL_SHOW_ME }}
    title={LABEL_WELCOME_TO_FILADDIFY}
    description={LABEL_DESCRIPTION_HOME_PAGE}
    />
  );
};

export default Home;
