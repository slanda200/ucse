import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Calculator, Globe, Monitor } from "lucide-react";
import Header from "@/components/Header";
import GradeSelector from "@/components/GradeSelector";
import TopicCard from "@/components/TopicCard";
import { czechTopics, mathTopics, englishTopics, itTopics } from "@/data/subjects";
import { useProgress } from "@/hooks/useProgress";

const subjectConfig = {
  czech: {
    title: "Čeština",
    icon: BookOpen,
    topics: czechTopics,
    color: "text-czech",
    bgColor: "bg-czech/10",
  },
  math: {
    title: "Matematika",
    icon: Calculator,
    topics: mathTopics,
    color: "text-math",
    bgColor: "bg-math/10",
  },
  english: {
    title: "Angličtina",
    icon: Globe,
    topics: englishTopics,
    color: "text-english",
    bgColor: "bg-english/10",
  },
  it: {
    title: "Informatika",
    icon: Monitor,
    topics: itTopics,
    color: "text-it",
    bgColor: "bg-it/10",
  },
};

const SubjectPage = () => {
  const { subject } = useParams<{ subject: string }>();
  const [selectedGrade, setSelectedGrade] = useState<number | null>(5);
  const { getTopicCompletedCount } = useProgress();

  const config = subjectConfig[subject as keyof typeof subjectConfig];

  if (!config) {
    return <div>Předmět nenalezen</div>;
  }

  const Icon = config.icon;
  const filteredTopics = config.topics.filter((t) => t.grade === selectedGrade);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zpět na hlavní stránku
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className={`w-14 h-14 rounded-xl ${config.bgColor} flex items-center justify-center`}>
            <Icon className={`w-7 h-7 ${config.color}`} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{config.title}</h1>
            <p className="text-muted-foreground">Vyber si třídu a začni procvičovat</p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4 text-foreground">Vyber třídu</h2>
          <GradeSelector selectedGrade={selectedGrade} onSelectGrade={setSelectedGrade} />
        </div>

        {selectedGrade && (
          <div>
            <h2 className="text-lg font-semibold mb-4 text-foreground">
              Témata pro {selectedGrade}. třídu
            </h2>
            {filteredTopics.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTopics.map((topic) => (
                  <TopicCard
                    key={topic.id}
                    id={topic.id}
                    title={topic.title}
                    description={topic.description}
                    exerciseCount={topic.exerciseCount}
                    completedCount={getTopicCompletedCount(topic.id)}
                    subject={subject!}
                    grade={selectedGrade}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-card rounded-xl border border-border">
                <p className="text-muted-foreground">
                  Pro tuto třídu zatím nemáme připravená témata.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectPage;
