import { createClient } from 'sanity-codegen';
import { Documents } from '../schema';
import config from './sanityConfig';

export default createClient<Documents>({
    ...config,
    fetch,
});
