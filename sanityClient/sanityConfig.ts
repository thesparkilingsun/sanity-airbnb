const sanityId = NEXT_PUBLIC_SANITY_ID ?? '';
const dtSet = NEXT_PUBLIC_SANITY_DATASET ?? '';
const version = NEXT_PUBLIC_API_VERSION ?? '';
const preview = NEXT_PUBLIC_USE_PREVIEW;
const tk = '';

const config = {
    projectId: sanityId,
    dataset: dtSet,
    previewMode: preview,
    token: tk,
};
export default config;
