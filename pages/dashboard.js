import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Dashboard() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to login if user is not authenticated
        const isAuthenticated = true; // Replace with actual authentication check
        
        if (!isAuthenticated)
        {
            router.push('/login');
        }
    }, [router]);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
            <button onClick={() => router.push('/login')}>Logout</button>
        </div>
    );
}
