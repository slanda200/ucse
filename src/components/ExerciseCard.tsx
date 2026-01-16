import { Play, CheckCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ExerciseCardProps {
  id: string;
  title: string;
  type: "choice" | "fill" | "match" | "decision" | "typing" | "sorting";
  questionCount: number;
  completed?: boolean;
  subject: string;
  grade: number;
  topicId: string;
}

const typeLabels = {
  choice: "Výběr správné odpovědi",
  fill: "Doplňování",
  match: "Spojování",
  decision: "Rozhodovačka",
  typing: "Vpisování",
  sorting: "Rozřazovačka",
};

const ExerciseCard = ({
  id,
  title,
  type,
  questionCount,
  completed = false,
  subject,
  grade,
  topicId,
}: ExerciseCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="topic-card flex items-center justify-between"
      onClick={() => navigate(`/subject/${subject}/grade/${grade}/topic/${topicId}/exercise/${id}`)}
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          completed ? "bg-success/10" : "bg-primary/10"
        }`}>
          {completed ? (
            <CheckCircle className="w-6 h-6 text-success" />
          ) : (
            <Play className="w-6 h-6 text-primary" />
          )}
        </div>
        <div>
          <h4 className="font-bold text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground">{typeLabels[type]}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-muted-foreground">
        <Clock className="w-4 h-4" />
        <span className="text-sm">{questionCount} otázek</span>
      </div>
    </div>
  );
};

export default ExerciseCard;
