import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface SubjectCardProps {
  subject: "czech" | "math" | "english" | "it";
  title: string;
  description: string;
  icon: ReactNode;
}

const SubjectCard = ({ subject, title, description, icon }: SubjectCardProps) => {
  const navigate = useNavigate();

  const subjectClasses = {
    czech: "subject-card-czech",
    math: "subject-card-math",
    english: "subject-card-english",
    it: "subject-card-it",
  };

  return (
    <div
      className={`subject-card ${subjectClasses[subject]}`}
      onClick={() => navigate(`/subject/${subject}`)}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-white/80 text-lg">{description}</p>
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
      <div className="absolute -top-4 -right-8 w-16 h-16 bg-white/5 rounded-full" />
    </div>
  );
};

export default SubjectCard;
