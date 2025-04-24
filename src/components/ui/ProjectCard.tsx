
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  status: 'completed' | 'ongoing';
}

const ProjectCard = ({
  id,
  title,
  description,
  imageUrl,
  tags,
  status
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden bg-cybernash-dark border border-white/10 hover:border-cybernash-turquoise/50 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge variant={status === 'completed' ? 'default' : 'secondary'} className={status === 'completed' ? 'bg-green-500' : 'bg-amber-500'}>
            {status === 'completed' ? 'Completed' : 'Ongoing'}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-cybernash-dark/80 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 py-4 border-t border-white/10 bg-gradient-to-r from-cybernash-dark to-cybernash-dark/80">
        <Link 
          to={`/projects/${id}`} 
          className="text-cybernash-turquoise hover:text-white transition-colors"
        >
          View details <span className="ml-1">→</span>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
