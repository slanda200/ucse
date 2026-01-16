import { BookOpen, Calculator, Globe, Monitor } from "lucide-react";
import Header from "@/components/Header";
import SubjectCard from "@/components/SubjectCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Učení, které <span className="text-gradient">baví</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Procvičuj češtinu, matematiku, angličtinu a IT s interaktivními cvičeními 
            od 1. do 9. třídy. Zdarma a jednoduše.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
              <span className="w-2 h-2 bg-success rounded-full" />
              <span className="text-sm font-medium">1000+ cvičení</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm font-medium">1.-9. třída</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
              <span className="w-2 h-2 bg-english rounded-full" />
              <span className="text-sm font-medium">Zdarma</span>
            </div>
          </div>
        </div>

        {/* Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <SubjectCard
            subject="czech"
            title="Čeština"
            description="Pravopis, gramatika, sloh a literatura"
            icon={<BookOpen className="w-7 h-7" />}
          />
          <SubjectCard
            subject="math"
            title="Matematika"
            description="Čísla, geometrie, rovnice a funkce"
            icon={<Calculator className="w-7 h-7" />}
          />
          <SubjectCard
            subject="english"
            title="Angličtina"
            description="Gramatika, slovíčka a konverzace"
            icon={<Globe className="w-7 h-7" />}
          />
          <SubjectCard
            subject="it"
            title="Informatika"
            description="Základy IT, programování a bezpečnost"
            icon={<Monitor className="w-7 h-7" />}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card border-t border-border py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Proč se učit s námi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Cílené procvičování</h3>
              <p className="text-muted-foreground">
                Cvičení jsou připravena přesně podle učiva jednotlivých tříd.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Okamžitá zpětná vazba</h3>
              <p className="text-muted-foreground">
                Hned víš, jestli máš správně, a můžeš se poučit z chyb.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-english/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sledování pokroku</h3>
              <p className="text-muted-foreground">
                Vidíš, co už umíš, a co ještě potřebuješ procvičit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
