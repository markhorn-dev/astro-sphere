import Privacy, { metadata as metadataPrivacy } from "./privacy/index.mdx";
import Terms, { metadata as metadataTerms } from "./terms/index.mdx";

const legals = [
  { Component: Privacy, metadata: metadataPrivacy },
  { Component: Terms, metadata: metadataTerms },
].filter(({ metadata: { draft } }) => !draft);

export type LegalItem = (typeof legals)[number];

export default legals;
