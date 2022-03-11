import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextDataHooksProvider } from 'next-data-hooks';

function MyApp({ Component, pageProps }: AppProps) {
    const {children, ...rest} = pageProps
    
    return (
        <NextDataHooksProvider {...rest}>
            <Component {...pageProps} />;
        </NextDataHooksProvider>
    );
}

export default MyApp;
