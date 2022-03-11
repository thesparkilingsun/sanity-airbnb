const sanityId = process.env.NEXT_PUBLIC_SANITY_ID ?? '';
const dtSet = process.env.NEXT_PUBLIC_SANITY_DATASET ?? '';
const preview = process.env.NEXT_PUBLIC_SANITY_DATASET === 'production';
const tk = '';

const config = {
    projectId: sanityId,
    dataset: dtSet,
    previewMode: preview,
    token: tk,
};
export default config;
