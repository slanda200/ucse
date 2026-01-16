import { useState } from "react";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/subjects";

interface ChoiceExerciseProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

const ChoiceExercise = ({ question, onAnswer, onNext }: ChoiceExerciseProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelect = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
  };

  const handleCheck = () => {
    if (!selectedAnswer) return;
    setIsAnswered(true);
    onAnswer(selectedAnswer === question.correctAnswer);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    onNext();
  };

  const getOptionClass = (option: string) => {
    if (!isAnswered) {
      return selectedAnswer === option 
        ? "border-primary bg-primary/5" 
        : "border-border hover:border-primary/50";
    }
    if (option === question.correctAnswer) {
      return "border-success bg-success/10";
    }
    if (selectedAnswer === option) {
      return "border-destructive bg-destructive/10";
    }
    return "border-border opacity-50";
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-2xl border border-border p-8">
        <p className="text-xl font-medium text-foreground mb-8 text-center">
          {question.text}
        </p>

        <div className="space-y-3 max-w-lg mx-auto">
          {question.options?.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`w-full text-left flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${getOptionClass(option)}`}
              disabled={isAnswered}
            >
              <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center shrink-0">
                {isAnswered && option === question.correctAnswer && (
                  <CheckCircle className="w-5 h-5 text-success" />
                )}
                {isAnswered && selectedAnswer === option && option !== question.correctAnswer && (
                  <XCircle className="w-5 h-5 text-destructive" />
                )}
              </span>
              <span className="text-lg font-medium">{option}</span>
            </button>
          ))}
        </div>

        {isAnswered && question.explanation && (
          <div className="mt-6 p-4 bg-muted rounded-xl animate-slide-up">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Vysvětlení:</strong>{" "}
              {question.explanation}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-center">
        {!isAnswered ? (
          <Button
            size="lg"
            onClick={handleCheck}
            disabled={!selectedAnswer}
            className="px-8"
          >
            Zkontrolovat
          </Button>
        ) : (
          <Button size="lg" onClick={handleNext} className="px-8">
            Další otázka
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ChoiceExercise;
