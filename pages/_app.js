// import Link from 'next/link';
import '@/app/globals.css';
import Header from "@/components/header"

function MyApp({ Component, pageProps })
{
    return (
        <>
        {/* <nav>
            <Link href="/login">Login</Link> | <Link href="/register">Register</Link> |{' '}
            <Link href="/dashboard">Dashboard</Link>
        </nav> */}
            
        <Header />
        <Component {...pageProps} />
        </>
    );
}

export default MyApp;
