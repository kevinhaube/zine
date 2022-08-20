import { render } from "@testing-library/react";

import ZinePageConfig from "../configs/ZinePageConfig";

import { ZinePage } from "./ZinePage";

import { Template } from "./index";

const testConfig = new ZinePageConfig({
  images: [],
  viewTimeRequirement: 0,
  captions: undefined,
  templateId: Template.SAMPLE,
});

describe("ZinePage", () => {
  test("ZinePage renders", () => {
    render(<ZinePage {...testConfig} />);
  });
});
