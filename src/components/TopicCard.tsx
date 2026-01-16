import { BookOpen, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TopicCardProps {
  id: string;
  title: string;
  description: string;
  exerciseCount: number;
  completedCount?: number;
  subject: string;
  grade: number;
}

const TopicCard = ({
  id,
  title,
  description,
  exerciseCount,
  completedCount = 0,
  subject,
  grade,
}: TopicCardProps) => {
  const navigate = useNavigate();
  const progress = exerciseCount > 0 ? (completedCount / exerciseCount) * 100 : 0;

  return (
    <div
      className="topic-card"
      onClick={() => navigate(`/subject/${subject}/grade/${grade}/topic/${id}`)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        {progress === 100 && (
          <CheckCircle className="w-6 h-6 text-success" />
        )}
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted-foreground">
            {completedCount} / {exerciseCount} cvičení
          </span>
          <span className="font-medium text-primary">{Math.round(progress)}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
