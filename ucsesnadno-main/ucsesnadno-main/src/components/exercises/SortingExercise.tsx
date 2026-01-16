import { useState, useEffect } from "react";
import { CheckCircle, XCircle, ArrowRight, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/subjects";

interface SortingExerciseProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

interface SortedItem {
  text: string;
  category: string;
  placedCategory: string | null;
}

const SortingExercise = ({ question, onAnswer, onNext }: SortingExerciseProps) => {
  const [items, setItems] = useState<SortedItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (question.items) {
      const shuffled = [...question.items]
        .sort(() => Math.random() - 0.5)
        .map(item => ({ ...item, placedCategory: null }));
      setItems(shuffled);
    }
  }, [question]);

  const handleItemClick = (itemText: string) => {
    if (isAnswered) return;
    setSelectedItem(itemText === selectedItem ? null : itemText);
  };

  const handleCategoryClick = (category: string) => {
    if (isAnswered || !selectedItem) return;
    
    setItems(prev => prev.map(item => 
      item.text === selectedItem 
        ? { ...item, placedCategory: category }
        : item
    ));
    setSelectedItem(null);
  };

  const handleCheck = () => {
    const allPlaced = items.every(item => item.placedCategory !== null);
    if (!allPlaced) return;

    const newResults: Record<string, boolean> = {};
    let correctCount = 0;

    items.forEach(item => {
      const isCorrect = item.placedCategory === item.category;
      newResults[item.text] = isCorrect;
      if (isCorrect) correctCount++;
    });

    setResults(newResults);
    setIsAnswered(true);
    onAnswer(correctCount === items.length);
  };

  const handleNext = () => {
    setItems([]);
    setSelectedItem(null);
    setIsAnswered(false);
    setResults({});
    onNext();
  };

  const unplacedItems = items.filter(item => item.placedCategory === null);
  const allPlaced = items.every(item => item.placedCategory !== null);

  const getItemsInCategory = (category: string) => 
    items.filter(item => item.placedCategory === category);

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-2xl border border-border p-6">
        <h3 className="text-xl font-medium text-foreground mb-6 text-center">
          {question.text}
        </h3>

        {/* Unplaced items */}
        {unplacedItems.length > 0 && (
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-3 text-center">
              Klikni na položku a pak na kategorii:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {unplacedItems.map((item) => (
                <button
                  key={item.text}
                  onClick={() => handleItemClick(item.text)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                    selectedItem === item.text
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <GripVertical className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">{item.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Categories */}
        <div className={`grid gap-4 ${question.categories?.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
          {question.categories?.map((category) => (
            <div
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`p-4 rounded-xl border-2 min-h-[120px] transition-all ${
                selectedItem && !isAnswered
                  ? "border-primary/50 bg-primary/5 cursor-pointer hover:border-primary"
                  : "border-border"
              }`}
            >
              <h4 className="font-bold text-foreground text-center mb-3 text-sm">
                {category}
              </h4>
              <div className="space-y-2">
                {getItemsInCategory(category).map((item) => (
                  <div
                    key={item.text}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                      isAnswered
                        ? results[item.text]
                          ? "bg-success/10 text-success border border-success/30"
                          : "bg-destructive/10 text-destructive border border-destructive/30"
                        : "bg-muted"
                    }`}
                  >
                    <span>{item.text}</span>
                    {isAnswered && (
                      results[item.text] 
                        ? <CheckCircle className="w-4 h-4" />
                        : <XCircle className="w-4 h-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {isAnswered && (
          <div className="mt-6 p-4 bg-muted rounded-xl">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">
                Správně: {Object.values(results).filter(Boolean).length} / {items.length}
              </strong>
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-center">
        {!isAnswered ? (
          <Button size="lg" onClick={handleCheck} disabled={!allPlaced} className="px-8">
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

export default SortingExercise;
