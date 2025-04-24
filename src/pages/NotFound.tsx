
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[75vh] flex items-center justify-center bg-cybernash-dark">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-cybernash-turquoise mb-4">404</h1>
          <p className="text-3xl text-white mb-8">Page Not Found</p>
          <p className="text-xl text-gray-300 max-w-lg mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild className="bg-cybernash-turquoise hover:bg-cybernash-turquoise/80 text-white">
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
