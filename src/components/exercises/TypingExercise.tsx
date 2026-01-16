import { useState } from "react";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Question } from "@/data/subjects";

interface TypingExerciseProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

const TypingExercise = ({ question, onAnswer, onNext }: TypingExerciseProps) => {
  const [userInput, setUserInput] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAnswered || !userInput.trim()) return;
    
    const correct = userInput.trim().toLowerCase() === String(question.correctAnswer).toLowerCase();
    setIsCorrect(correct);
    setIsAnswered(true);
    onAnswer(correct);
  };

  const handleNext = () => {
    setUserInput("");
    setIsAnswered(false);
    setIsCorrect(false);
    onNext();
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-2xl border border-border p-8">
        <h3 className="text-xl font-medium text-foreground mb-8 text-center">
          {question.text}
        </h3>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="relative">
            <Input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={isAnswered}
              placeholder="Napiš odpověď..."
              className={`text-center text-2xl font-bold h-16 ${
                isAnswered
                  ? isCorrect
                    ? "border-success bg-success/10"
                    : "border-destructive bg-destructive/10"
                  : ""
              }`}
              autoFocus
            />
            {isAnswered && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                {isCorrect ? (
                  <CheckCircle className="w-6 h-6 text-success" />
                ) : (
                  <XCircle className="w-6 h-6 text-destructive" />
                )}
              </div>
            )}
          </div>

          {!isAnswered && (
            <Button type="submit" size="lg" className="w-full mt-4" disabled={!userInput.trim()}>
              Zkontrolovat
            </Button>
          )}
        </form>

        {isAnswered && (
          <div className="mt-6 space-y-3">
            {!isCorrect && (
              <div className="p-4 bg-muted rounded-xl text-center">
                <p className="text-sm text-muted-foreground">
                  Správná odpověď: <strong className="text-foreground text-lg">{question.correctAnswer}</strong>
                </p>
              </div>
            )}
            
            {question.explanation && (
              <div className="p-4 bg-muted rounded-xl animate-slide-up">
                <p className="text-sm text-muted-foreground text-center">
                  <strong className="text-foreground">Vysvětlení:</strong>{" "}
                  {question.explanation}
                </p>
              </div>
            )}
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

export default TypingExercise;
