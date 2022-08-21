import { useMemo } from "react";

import ZinePageConfig from "../framework/configs/ZinePageConfig";
import { Template, usePropValidator } from "../framework";

/** Controls the template generation and rendering of a page. */
export const ZinePage = (config: ZinePageConfig) => {
  // Throws if ZinePageConfig.templateId returns no TemplateBundle
  const template = useMemo(() => new Template(config), [config]);
  usePropValidator(template);
  return template.useTemplate();
};
