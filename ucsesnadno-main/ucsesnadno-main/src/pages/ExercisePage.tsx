import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, RotateCcw, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { 
  czechExercises, mathExercises, englishExercises, itExercises,
  getQuestionsForExercise, Question 
} from "@/data/subjects";
import DecisionExercise from "@/components/exercises/DecisionExercise";
import TypingExercise from "@/components/exercises/TypingExercise";
import SortingExercise from "@/components/exercises/SortingExercise";
import ChoiceExercise from "@/components/exercises/ChoiceExercise";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/hooks/useProgress";

const ExercisePage = () => {
  const { subject, grade, topicId, exerciseId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { saveProgress } = useProgress();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  const allExercises = [...czechExercises, ...mathExercises, ...englishExercises, ...itExercises];
  const exercise = allExercises.find((e) => e.id === exerciseId);

  useEffect(() => {
    if (exercise) {
      const exerciseQuestions = getQuestionsForExercise(exerciseId || "", exercise.type);
      setQuestions(exerciseQuestions.slice(0, exercise.questionCount));
    }
  }, [exerciseId, exercise]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsComplete(true);
      if (user && subject && grade && topicId && exerciseId && exercise) {
        saveProgress(
          subject,
          parseInt(grade),
          topicId,
          exerciseId,
          exercise.type,
          score + (currentQuestionIndex === questions.length - 1 ? 1 : 0),
          questions.length
        );
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsComplete(false);
  };

  if (!exercise || questions.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <p>Načítání cvičení...</p>
        </div>
      </div>
    );
  }

  if (isComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center ${
              percentage >= 70 ? "bg-success/10" : "bg-english/10"
            }`}>
              {percentage >= 70 ? (
                <CheckCircle className="w-12 h-12 text-success" />
              ) : (
                <RotateCcw className="w-12 h-12 text-english" />
              )}
            </div>
            
            <h1 className="text-3xl font-bold mb-4 text-foreground">
              {percentage >= 70 ? "Výborně!" : "Nevadí, zkus to znovu!"}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-2">Tvoje skóre</p>
            <p className="text-5xl font-bold text-foreground mb-8">
              {score} / {questions.length}
            </p>
            
            <div className="progress-bar max-w-md mx-auto mb-8">
              <div className="progress-bar-fill" style={{ width: `${percentage}%` }} />
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="lg" onClick={handleRestart}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Zkusit znovu
              </Button>
              <Button 
                size="lg"
                onClick={() => navigate(`/subject/${subject}/grade/${grade}/topic/${topicId}`)}
              >
                Zpět na téma
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link
          to={`/subject/${subject}/grade/${grade}/topic/${topicId}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zpět na téma
        </Link>

        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-foreground">{exercise.title}</h1>
            <span className="text-sm text-muted-foreground">
              {currentQuestionIndex + 1} / {questions.length}
            </span>
          </div>

          <div className="progress-bar mb-8">
            <div
              className="progress-bar-fill"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {currentQuestion && (
            <>
              {exercise.type === "decision" && (
                <DecisionExercise
                  question={currentQuestion}
                  onAnswer={handleAnswer}
                  onNext={handleNextQuestion}
                />
              )}
              {exercise.type === "typing" && (
                <TypingExercise
                  question={currentQuestion}
                  onAnswer={handleAnswer}
                  onNext={handleNextQuestion}
                />
              )}
              {exercise.type === "sorting" && (
                <SortingExercise
                  question={currentQuestion}
                  onAnswer={handleAnswer}
                  onNext={handleNextQuestion}
                />
              )}
              {(exercise.type === "choice" || exercise.type === "fill" || exercise.type === "match") && (
                <ChoiceExercise
                  question={currentQuestion}
                  onAnswer={handleAnswer}
                  onNext={handleNextQuestion}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExercisePage;
