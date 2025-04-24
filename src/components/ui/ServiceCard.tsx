
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  linkTo: string;
  className?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  linkTo,
  className 
}: ServiceCardProps) => {
  return (
    <Card className={cn(
      "p-6 bg-cybernash-dark border border-white/10 hover:border-cybernash-turquoise/50 hover:shadow-lg hover:shadow-cybernash-turquoise/10 transition-all duration-300",
      className
    )}>
      <div className="p-4 bg-cybernash-turquoise/10 rounded-full w-16 h-16 flex items-center justify-center text-cybernash-turquoise mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <Button asChild variant="ghost" className="pl-0 hover:pl-2 transition-all duration-300 text-cybernash-turquoise hover:text-cybernash-turquoise hover:bg-transparent">
        <Link to={linkTo}>
          Learn More <span className="ml-2">→</span>
        </Link>
      </Button>
    </Card>
  );
};

export default ServiceCard;
