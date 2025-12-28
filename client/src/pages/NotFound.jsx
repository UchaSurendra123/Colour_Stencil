import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-display text-primary">404</h1>
        <p className="mb-4 text-2xl font-body text-foreground">Oops! Page not found</p>
        <p className="mb-8 text-muted-foreground font-body">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-primary text-white font-body rounded-lg hover:bg-primary/90 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;