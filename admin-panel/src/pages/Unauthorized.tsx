import { Link } from 'react-router-dom';

export const Unauthorized = () => (
  <div className="h-screen flex flex-col items-center justify-center space-y-4">
    <h1 className="text-4xl font-bold text-primary">403</h1>
    <p className="text-lg">You do not have access to this page.</p>
    <Link to="/" className="text-blue-600 underline">
      Go Home
    </Link>
  </div>
);
