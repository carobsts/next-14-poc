'use client'

import { extendTheme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";

const myTheme = extendTheme(theme, {
  ...theme,
});

export default myTheme;
