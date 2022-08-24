import {
  useAvailablePages,
  usePropValidator,
  PageFeatureController,
  usePageTimer,
} from "./extensions-hooks";
import {
  maxImagesLengthCheck,
  minimumViewTimeCheck,
} from "./extensions-rules/common-rules";
import {
  TemplateGenerator,
  TemplateBundle,
  Template,
  TemplateSetup,
  RuleGenerator,
  RuleFunction,
} from "./Template";
import {
  InvalidTemplatePropsError,
  UndefinedSetupError,
  EmptyZineError,
} from "./errors";
import { ZinePageConfig, BasicTemplateProps } from "./configs";

/* Core framework */
export { TemplateBundle, Template, ZinePageConfig };
export type {
  RuleGenerator,
  RuleFunction,
  TemplateGenerator,
  TemplateSetup,
  BasicTemplateProps,
};

/* Rules */
export { maxImagesLengthCheck, minimumViewTimeCheck };

/* Errors */
export { InvalidTemplatePropsError, UndefinedSetupError, EmptyZineError };

/* Extensions */
export { useAvailablePages, usePropValidator, usePageTimer };
export type { PageFeatureController };
