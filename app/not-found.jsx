import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center px-4 py-20 text-center">
      <div>
        <p className="font-display text-7xl font-extrabold text-gradient">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold">Page not found</h1>
        <p className="mx-auto mt-2 max-w-sm text-muted">
          The page you’re looking for doesn’t exist. Let’s get you back home.
        </p>
        <Link href="/" className="btn-primary mt-6">
          <Home className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
