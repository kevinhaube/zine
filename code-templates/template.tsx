import React from "react";

import { RuleFunction, ZinePageConfig } from "../src/framework";

/* Template Component */
export const TEMP_NAMETemplate = () => {
  return <></>;
};

/* Setup Rules */
export const TEMP_NAMERules: RuleFunction[] = [];
/* Setup Generator */
export const TEMP_NAMEGenerator = (props: ZinePageConfig) => (
  <TEMP_NAMETemplate />
);
