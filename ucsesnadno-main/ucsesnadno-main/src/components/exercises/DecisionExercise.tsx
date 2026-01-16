import { useState } from "react";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/subjects";

interface DecisionExerciseProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

const DecisionExercise = ({ question, onAnswer, onNext }: DecisionExerciseProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    onAnswer(option === question.correctAnswer);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    onNext();
  };

  const getButtonClass = (option: string) => {
    if (!isAnswered) {
      return "border-2 border-border hover:border-primary hover:bg-primary/5";
    }
    if (option === question.correctAnswer) {
      return "border-2 border-success bg-success/10 text-success";
    }
    if (selectedAnswer === option) {
      return "border-2 border-destructive bg-destructive/10 text-destructive";
    }
    return "border-2 border-border opacity-50";
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-2xl border border-border p-8">
        <h3 className="text-xl font-medium text-foreground mb-8 text-center">
          {question.text}
        </h3>

        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {question.options?.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              disabled={isAnswered}
              className={`p-6 rounded-xl text-2xl font-bold transition-all ${getButtonClass(option)}`}
            >
              <div className="flex items-center justify-center gap-2">
                {isAnswered && option === question.correctAnswer && (
                  <CheckCircle className="w-6 h-6" />
                )}
                {isAnswered && selectedAnswer === option && option !== question.correctAnswer && (
                  <XCircle className="w-6 h-6" />
                )}
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>

        {isAnswered && question.explanation && (
          <div className="mt-6 p-4 bg-muted rounded-xl animate-slide-up">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">Vysvětlení:</strong>{" "}
              {question.explanation}
            </p>
          </div>
        )}
      </div>

      {isAnswered && (
        <div className="flex justify-center">
          <Button size="lg" onClick={handleNext} className="px-8">
            Další otázka
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default DecisionExercise;
