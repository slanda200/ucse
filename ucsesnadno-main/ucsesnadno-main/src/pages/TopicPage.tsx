import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import ExerciseCard from "@/components/ExerciseCard";
import { czechTopics, mathTopics, englishTopics, itTopics, getExercisesForTopic } from "@/data/subjects";
import { useProgress } from "@/hooks/useProgress";

const TopicPage = () => {
  const { subject, grade, topicId } = useParams<{
    subject: string;
    grade: string;
    topicId: string;
  }>();

  const { isExerciseCompleted, getTopicCompletedCount } = useProgress();
  const gradeNum = parseInt(grade || "5");
  
  const allTopics = [...czechTopics, ...mathTopics, ...englishTopics, ...itTopics];
  const topic = allTopics.find((t) => t.id === topicId);
  const exercises = getExercisesForTopic(topicId || "", subject || "");

  const completedCount = getTopicCompletedCount(topicId || "");

  if (!topic) {
    return <div>Téma nenalezeno</div>;
  }

  const subjectNames: Record<string, string> = {
    czech: "Češtinu",
    math: "Matematiku",
    english: "Angličtinu",
    it: "Informatiku",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link
          to={`/subject/${subject}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zpět na {subjectNames[subject || ""] || subject}
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>{gradeNum}. třída</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{topic.title}</h1>
          <p className="text-lg text-muted-foreground">{topic.description}</p>
        </div>

        <div className="bg-card rounded-xl border border-border p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Tvůj pokrok</h3>
            <span className="text-sm text-muted-foreground">
              {completedCount} / {exercises.length} cvičení dokončeno
            </span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${exercises.length > 0 ? (completedCount / exercises.length) * 100 : 0}%` }} 
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 text-foreground">Cvičení</h2>
          <div className="space-y-3">
            {exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                id={exercise.id}
                title={exercise.title}
                type={exercise.type}
                questionCount={exercise.questionCount}
                completed={isExerciseCompleted(exercise.id)}
                subject={subject!}
                grade={gradeNum}
                topicId={topicId!}
              />
            ))}
            {exercises.length === 0 && (
              <div className="text-center py-12 bg-card rounded-xl border border-border">
                <p className="text-muted-foreground">
                  Pro toto téma zatím nemáme připravená cvičení.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;
