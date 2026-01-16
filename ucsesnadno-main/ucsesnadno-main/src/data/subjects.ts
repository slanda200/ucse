export interface Topic {
  id: string;
  title: string;
  description: string;
  exerciseCount: number;
  grade: number;
}

export interface Exercise {
  id: string;
  title: string;
  type: "choice" | "fill" | "match" | "decision" | "typing" | "sorting";
  questionCount: number;
  topicId: string;
}

export interface Question {
  id: string;
  type: "choice" | "fill" | "decision" | "typing" | "sorting";
  text: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
  categories?: string[];
  items?: { text: string; category: string }[];
}

// ==================== ČEŠTINA ====================
export const czechTopics: Topic[] = [
  // 1. třída
  { id: "abeceda-1", title: "Abeceda", description: "Poznávání písmen", exerciseCount: 4, grade: 1 },
  { id: "slabiky-1", title: "Slabiky", description: "Dělení slov na slabiky", exerciseCount: 3, grade: 1 },
  { id: "cteni-1", title: "Čtení", description: "Základy čtení", exerciseCount: 3, grade: 1 },

  // 2. třída
  { id: "velka-pismena-2", title: "Velká písmena", description: "Kdy psát velké písmeno", exerciseCount: 4, grade: 2 },
  { id: "vety-2", title: "Druhy vět", description: "Oznamovací, tázací, rozkazovací", exerciseCount: 3, grade: 2 },
  { id: "oupravopis-2", title: "Pravopis ou/au", description: "Správné psaní ou a au", exerciseCount: 3, grade: 2 },

  // 3. třída
  { id: "slovni-druhy-3", title: "Slovní druhy", description: "Základní slovní druhy", exerciseCount: 4, grade: 3 },
  { id: "podstatna-jmena-3", title: "Podstatná jména", description: "Rod, číslo, pád", exerciseCount: 4, grade: 3 },
  { id: "parove-souhlasky-3", title: "Párové souhlásky", description: "B-P, D-T, Ž-Š...", exerciseCount: 3, grade: 3 },

  // 4. třída
  { id: "vyjmenovana-b-4", title: "Vyjmenovaná slova po B", description: "Být, bydlit, obyvatel...", exerciseCount: 4, grade: 4 },
  { id: "vyjmenovana-l-4", title: "Vyjmenovaná slova po L", description: "Slyšet, mlýn, blýskat...", exerciseCount: 4, grade: 4 },
  { id: "vyjmenovana-m-4", title: "Vyjmenovaná slova po M", description: "Mýt, myslet, hmyz...", exerciseCount: 4, grade: 4 },
  { id: "slovesa-4", title: "Slovesa", description: "Osoba, číslo, čas", exerciseCount: 3, grade: 4 },

  // 5. třída
  { id: "vyjmenovana-p-5", title: "Vyjmenovaná slova po P", description: "Pýcha, pytel, slepýš...", exerciseCount: 4, grade: 5 },
  { id: "vyjmenovana-s-5", title: "Vyjmenovaná slova po S", description: "Syn, sytý, sýr...", exerciseCount: 4, grade: 5 },
  { id: "vyjmenovana-v-5", title: "Vyjmenovaná slova po V", description: "Vy, vysoký, výt...", exerciseCount: 4, grade: 5 },
  { id: "vyjmenovana-z-5", title: "Vyjmenovaná slova po Z", description: "Brzy, jazyk, nazývat...", exerciseCount: 4, grade: 5 },
  { id: "shoda-5", title: "Shoda podmětu s přísudkem", description: "Koncovky sloves", exerciseCount: 4, grade: 5 },

  // 6. třída
  { id: "vetne-cleny-6", title: "Větné členy", description: "Podmět, přísudek, předmět...", exerciseCount: 5, grade: 6 },
  { id: "stavba-slova-6", title: "Stavba slova", description: "Kořen, předpona, přípona", exerciseCount: 4, grade: 6 },
  { id: "pridavna-jmena-6", title: "Přídavná jména", description: "Druhy a stupňování", exerciseCount: 4, grade: 6 },

  // 7. třída
  { id: "vedlejsi-vety-7", title: "Vedlejší věty", description: "Druhy vedlejších vět", exerciseCount: 5, grade: 7 },
  { id: "carka-7", title: "Čárka ve větě", description: "Pravidla interpunkce", exerciseCount: 4, grade: 7 },
  { id: "zajmena-7", title: "Zájmena", description: "Druhy zájmen", exerciseCount: 4, grade: 7 },

  // 8. třída
  { id: "slohove-utvary-8", title: "Slohové útvary", description: "Vypravování, popis, úvaha", exerciseCount: 4, grade: 8 },
  { id: "pravopis-8", title: "Pravopis přejatých slov", description: "Cizí slova v češtině", exerciseCount: 4, grade: 8 },
  { id: "cislovky-8", title: "Číslovky", description: "Druhy a skloňování", exerciseCount: 3, grade: 8 },

  // 9. třída
  { id: "literatura-9", title: "Literární pojmy", description: "Metafora, personifikace...", exerciseCount: 5, grade: 9 },
  { id: "syntax-9", title: "Složité souvětí", description: "Analýza souvětí", exerciseCount: 4, grade: 9 },
  { id: "pravopis-9", title: "Souhrnné pravopisné cvičení", description: "Všechna pravidla", exerciseCount: 5, grade: 9 },
];

export const czechExercises: Exercise[] = [
  // 1. třída
  { id: "abeceda-rozhodovacka", title: "Rozhodovačka - písmena", type: "decision", questionCount: 10, topicId: "abeceda-1" },
  { id: "abeceda-vpisovani", title: "Vpisování písmen", type: "typing", questionCount: 8, topicId: "abeceda-1" },
  { id: "slabiky-rozradovacka", title: "Rozřazovačka - slabiky", type: "sorting", questionCount: 8, topicId: "slabiky-1" },

  // 2. třída
  { id: "velka-pismena-rozhodovacka", title: "Rozhodovačka - velká písmena", type: "decision", questionCount: 10, topicId: "velka-pismena-2" },
  { id: "vety-rozradovacka", title: "Rozřazovačka - druhy vět", type: "sorting", questionCount: 8, topicId: "vety-2" },

  // 3. třída
  { id: "slovni-druhy-rozradovacka", title: "Rozřazovačka - slovní druhy", type: "sorting", questionCount: 10, topicId: "slovni-druhy-3" },
  { id: "podstatna-jmena-rozradovacka", title: "Rozřazovačka - rod podst. jmen", type: "sorting", questionCount: 10, topicId: "podstatna-jmena-3" },
  { id: "parove-rozhodovacka", title: "Rozhodovačka - párové souhlásky", type: "decision", questionCount: 10, topicId: "parove-souhlasky-3" },

  // 4. třída - vyjmenovaná slova B
  { id: "vyjm-b-rozhodovacka", title: "Rozhodovačka - B", type: "decision", questionCount: 12, topicId: "vyjmenovana-b-4" },
  { id: "vyjm-b-vpisovani", title: "Vpisování - B", type: "typing", questionCount: 10, topicId: "vyjmenovana-b-4" },
  { id: "vyjm-b-vyber", title: "Výběr správné odpovědi - B", type: "choice", questionCount: 10, topicId: "vyjmenovana-b-4" },
  
  // 4. třída - vyjmenovaná slova L
  { id: "vyjm-l-rozhodovacka", title: "Rozhodovačka - L", type: "decision", questionCount: 12, topicId: "vyjmenovana-l-4" },
  { id: "vyjm-l-vpisovani", title: "Vpisování - L", type: "typing", questionCount: 10, topicId: "vyjmenovana-l-4" },
  { id: "vyjm-l-vyber", title: "Výběr správné odpovědi - L", type: "choice", questionCount: 10, topicId: "vyjmenovana-l-4" },

  // 4. třída - vyjmenovaná slova M
  { id: "vyjm-m-rozhodovacka", title: "Rozhodovačka - M", type: "decision", questionCount: 12, topicId: "vyjmenovana-m-4" },
  { id: "vyjm-m-vpisovani", title: "Vpisování - M", type: "typing", questionCount: 10, topicId: "vyjmenovana-m-4" },
  { id: "vyjm-m-vyber", title: "Výběr správné odpovědi - M", type: "choice", questionCount: 10, topicId: "vyjmenovana-m-4" },

  // 5. třída - vyjmenovaná slova P
  { id: "vyjm-p-rozhodovacka", title: "Rozhodovačka - P", type: "decision", questionCount: 12, topicId: "vyjmenovana-p-5" },
  { id: "vyjm-p-vpisovani", title: "Vpisování - P", type: "typing", questionCount: 10, topicId: "vyjmenovana-p-5" },
  { id: "vyjm-p-vyber", title: "Výběr správné odpovědi - P", type: "choice", questionCount: 10, topicId: "vyjmenovana-p-5" },

  // 5. třída - vyjmenovaná slova S
  { id: "vyjm-s-rozhodovacka", title: "Rozhodovačka - S", type: "decision", questionCount: 12, topicId: "vyjmenovana-s-5" },
  { id: "vyjm-s-vpisovani", title: "Vpisování - S", type: "typing", questionCount: 10, topicId: "vyjmenovana-s-5" },

  // 5. třída - vyjmenovaná slova V
  { id: "vyjm-v-rozhodovacka", title: "Rozhodovačka - V", type: "decision", questionCount: 12, topicId: "vyjmenovana-v-5" },
  { id: "vyjm-v-vpisovani", title: "Vpisování - V", type: "typing", questionCount: 10, topicId: "vyjmenovana-v-5" },

  // 5. třída - vyjmenovaná slova Z
  { id: "vyjm-z-rozhodovacka", title: "Rozhodovačka - Z", type: "decision", questionCount: 12, topicId: "vyjmenovana-z-5" },
  { id: "vyjm-z-vpisovani", title: "Vpisování - Z", type: "typing", questionCount: 10, topicId: "vyjmenovana-z-5" },

  // 5. třída - shoda
  { id: "shoda-rozhodovacka", title: "Rozhodovačka - shoda", type: "decision", questionCount: 10, topicId: "shoda-5" },
  { id: "shoda-vpisovani", title: "Vpisování koncovek", type: "typing", questionCount: 10, topicId: "shoda-5" },

  // 6. třída
  { id: "vetne-cleny-rozradovacka", title: "Rozřazovačka - větné členy", type: "sorting", questionCount: 10, topicId: "vetne-cleny-6" },
  { id: "stavba-slova-rozradovacka", title: "Rozřazovačka - stavba slova", type: "sorting", questionCount: 10, topicId: "stavba-slova-6" },

  // 7. třída
  { id: "vedlejsi-vety-rozradovacka", title: "Rozřazovačka - vedlejší věty", type: "sorting", questionCount: 10, topicId: "vedlejsi-vety-7" },
  { id: "carka-rozhodovacka", title: "Rozhodovačka - čárky", type: "decision", questionCount: 12, topicId: "carka-7" },

  // 8. třída
  { id: "pravopis-prejata-vpisovani", title: "Vpisování - přejatá slova", type: "typing", questionCount: 10, topicId: "pravopis-8" },
  { id: "sloh-rozradovacka", title: "Rozřazovačka - slohové útvary", type: "sorting", questionCount: 8, topicId: "slohove-utvary-8" },

  // 9. třída
  { id: "literatura-rozradovacka", title: "Rozřazovačka - lit. pojmy", type: "sorting", questionCount: 10, topicId: "literatura-9" },
  { id: "pravopis-souhrnny", title: "Souhrnné vpisování", type: "typing", questionCount: 15, topicId: "pravopis-9" },
];

// ==================== MATEMATIKA ====================
export const mathTopics: Topic[] = [
  // 1. třída
  { id: "cisla-1-20-1", title: "Čísla do 20", description: "Počítání do 20", exerciseCount: 4, grade: 1 },
  { id: "scitani-odcitani-1", title: "Sčítání a odčítání", description: "Základní operace", exerciseCount: 4, grade: 1 },

  // 2. třída
  { id: "cisla-do-100-2", title: "Čísla do 100", description: "Počítání do 100", exerciseCount: 4, grade: 2 },
  { id: "nasobeni-2", title: "Malá násobilka", description: "Násobení 1-5", exerciseCount: 5, grade: 2 },

  // 3. třída
  { id: "velka-nasobilka-3", title: "Velká násobilka", description: "Násobení 6-10", exerciseCount: 5, grade: 3 },
  { id: "deleni-3", title: "Dělení", description: "Dělení jednociferným číslem", exerciseCount: 4, grade: 3 },
  { id: "jednotky-3", title: "Jednotky", description: "Jednotky délky, hmotnosti", exerciseCount: 3, grade: 3 },

  // 4. třída
  { id: "cisla-do-1000000-4", title: "Čísla do milionu", description: "Velká čísla", exerciseCount: 4, grade: 4 },
  { id: "pismene-nasobeni-4", title: "Písemné násobení", description: "Násobení víceciferných čísel", exerciseCount: 4, grade: 4 },
  { id: "geometrie-4", title: "Základy geometrie", description: "Bod, přímka, úhel", exerciseCount: 3, grade: 4 },

  // 5. třída
  { id: "zlomky-5", title: "Zlomky", description: "Sčítání a odčítání zlomků", exerciseCount: 5, grade: 5 },
  { id: "desetinna-5", title: "Desetinná čísla", description: "Operace s desetinnými čísly", exerciseCount: 4, grade: 5 },
  { id: "obvod-obsah-5", title: "Obvod a obsah", description: "Výpočet obvodu a obsahu", exerciseCount: 4, grade: 5 },

  // 6. třída
  { id: "cela-cisla-6", title: "Celá čísla", description: "Záporná čísla a operace", exerciseCount: 4, grade: 6 },
  { id: "delitelnost-6", title: "Dělitelnost", description: "NSD, NSN, prvočísla", exerciseCount: 4, grade: 6 },
  { id: "uhly-6", title: "Úhly", description: "Měření a počítání s úhly", exerciseCount: 4, grade: 6 },

  // 7. třída
  { id: "pomery-7", title: "Poměr a měřítko", description: "Výpočty s poměry", exerciseCount: 4, grade: 7 },
  { id: "procenta-7", title: "Procenta", description: "Základy procentových výpočtů", exerciseCount: 5, grade: 7 },
  { id: "trojuhelnik-7", title: "Trojúhelník", description: "Vlastnosti a výpočty", exerciseCount: 4, grade: 7 },

  // 8. třída
  { id: "rovnice-8", title: "Rovnice", description: "Lineární rovnice", exerciseCount: 5, grade: 8 },
  { id: "mocniny-8", title: "Mocniny a odmocniny", description: "Počítání s mocninami", exerciseCount: 4, grade: 8 },
  { id: "podobnost-8", title: "Podobnost", description: "Podobné útvary", exerciseCount: 4, grade: 8 },

  // 9. třída
  { id: "funkce-9", title: "Funkce", description: "Lineární a kvadratické funkce", exerciseCount: 5, grade: 9 },
  { id: "kvadraticke-rovnice-9", title: "Kvadratické rovnice", description: "Řešení kv. rovnic", exerciseCount: 5, grade: 9 },
  { id: "telesa-9", title: "Tělesa", description: "Povrch a objem těles", exerciseCount: 4, grade: 9 },
];

export const mathExercises: Exercise[] = [
  // 1. třída
  { id: "cisla-1-20-rozhodovacka", title: "Rozhodovačka - větší/menší", type: "decision", questionCount: 10, topicId: "cisla-1-20-1" },
  { id: "scitani-vpisovani", title: "Vpisování - sčítání", type: "typing", questionCount: 10, topicId: "scitani-odcitani-1" },

  // 2. třída
  { id: "cisla-100-rozhodovacka", title: "Rozhodovačka - porovnávání", type: "decision", questionCount: 10, topicId: "cisla-do-100-2" },
  { id: "nasobilka-mala-vpisovani", title: "Vpisování - malá násobilka", type: "typing", questionCount: 15, topicId: "nasobeni-2" },

  // 3. třída
  { id: "nasobilka-velka-vpisovani", title: "Vpisování - velká násobilka", type: "typing", questionCount: 15, topicId: "velka-nasobilka-3" },
  { id: "deleni-vpisovani", title: "Vpisování - dělení", type: "typing", questionCount: 12, topicId: "deleni-3" },
  { id: "jednotky-rozradovacka", title: "Rozřazovačka - jednotky", type: "sorting", questionCount: 10, topicId: "jednotky-3" },

  // 4. třída
  { id: "velka-cisla-rozhodovacka", title: "Rozhodovačka - velká čísla", type: "decision", questionCount: 10, topicId: "cisla-do-1000000-4" },
  { id: "pisemne-nasobeni-vpisovani", title: "Vpisování - násobení", type: "typing", questionCount: 10, topicId: "pismene-nasobeni-4" },

  // 5. třída
  { id: "zlomky-rozhodovacka", title: "Rozhodovačka - zlomky", type: "decision", questionCount: 10, topicId: "zlomky-5" },
  { id: "zlomky-vpisovani", title: "Vpisování - zlomky", type: "typing", questionCount: 10, topicId: "zlomky-5" },
  { id: "desetinna-vpisovani", title: "Vpisování - des. čísla", type: "typing", questionCount: 10, topicId: "desetinna-5" },
  { id: "obvod-obsah-vpisovani", title: "Vpisování - obvod a obsah", type: "typing", questionCount: 10, topicId: "obvod-obsah-5" },

  // 6. třída
  { id: "cela-cisla-rozhodovacka", title: "Rozhodovačka - záporná čísla", type: "decision", questionCount: 10, topicId: "cela-cisla-6" },
  { id: "delitelnost-rozhodovacka", title: "Rozhodovačka - dělitelnost", type: "decision", questionCount: 10, topicId: "delitelnost-6" },

  // 7. třída
  { id: "procenta-vpisovani", title: "Vpisování - procenta", type: "typing", questionCount: 12, topicId: "procenta-7" },
  { id: "pomery-vpisovani", title: "Vpisování - poměry", type: "typing", questionCount: 10, topicId: "pomery-7" },

  // 8. třída
  { id: "rovnice-vpisovani", title: "Vpisování - rovnice", type: "typing", questionCount: 12, topicId: "rovnice-8" },
  { id: "mocniny-vpisovani", title: "Vpisování - mocniny", type: "typing", questionCount: 10, topicId: "mocniny-8" },

  // 9. třída
  { id: "funkce-rozradovacka", title: "Rozřazovačka - funkce", type: "sorting", questionCount: 10, topicId: "funkce-9" },
  { id: "kvadraticke-vpisovani", title: "Vpisování - kv. rovnice", type: "typing", questionCount: 10, topicId: "kvadraticke-rovnice-9" },
];

// ==================== ANGLIČTINA ====================
export const englishTopics: Topic[] = [
  // 1. třída
  { id: "colors-1", title: "Colors", description: "Barvy", exerciseCount: 3, grade: 1 },
  { id: "numbers-1", title: "Numbers 1-10", description: "Čísla 1-10", exerciseCount: 3, grade: 1 },

  // 2. třída
  { id: "animals-2", title: "Animals", description: "Zvířata", exerciseCount: 4, grade: 2 },
  { id: "family-2", title: "Family", description: "Rodina", exerciseCount: 3, grade: 2 },

  // 3. třída
  { id: "food-3", title: "Food", description: "Jídlo a pití", exerciseCount: 4, grade: 3 },
  { id: "body-3", title: "Body parts", description: "Části těla", exerciseCount: 4, grade: 3 },
  { id: "verb-to-be-3", title: "Verb to be", description: "Sloveso být", exerciseCount: 4, grade: 3 },

  // 4. třída
  { id: "clothes-4", title: "Clothes", description: "Oblečení", exerciseCount: 4, grade: 4 },
  { id: "present-continuous-4", title: "Present continuous", description: "Přítomný průběhový čas", exerciseCount: 4, grade: 4 },
  { id: "prepositions-4", title: "Prepositions", description: "Předložky místa", exerciseCount: 4, grade: 4 },

  // 5. třída
  { id: "present-simple-5", title: "Present Simple", description: "Přítomný čas prostý", exerciseCount: 5, grade: 5 },
  { id: "vocabulary-5", title: "Slovní zásoba", description: "Základní slovíčka", exerciseCount: 5, grade: 5 },
  { id: "questions-5", title: "Questions", description: "Tvorba otázek", exerciseCount: 4, grade: 5 },

  // 6. třída
  { id: "past-simple-6", title: "Past Simple", description: "Minulý čas prostý", exerciseCount: 5, grade: 6 },
  { id: "irregular-verbs-6", title: "Nepravidelná slovesa", description: "Tvary nepravidelných sloves", exerciseCount: 5, grade: 6 },
  { id: "comparatives-6", title: "Comparatives", description: "Stupňování přídavných jmen", exerciseCount: 4, grade: 6 },

  // 7. třída
  { id: "future-7", title: "Future tenses", description: "Budoucí časy", exerciseCount: 5, grade: 7 },
  { id: "modal-verbs-7", title: "Modal verbs", description: "Způsobová slovesa", exerciseCount: 4, grade: 7 },
  { id: "conditionals-7", title: "Conditionals", description: "Podmínkové věty", exerciseCount: 4, grade: 7 },

  // 8. třída
  { id: "present-perfect-8", title: "Present Perfect", description: "Předpřítomný čas", exerciseCount: 5, grade: 8 },
  { id: "passive-8", title: "Passive voice", description: "Trpný rod", exerciseCount: 4, grade: 8 },
  { id: "reported-speech-8", title: "Reported speech", description: "Nepřímá řeč", exerciseCount: 4, grade: 8 },

  // 9. třída
  { id: "advanced-grammar-9", title: "Advanced grammar", description: "Pokročilá gramatika", exerciseCount: 5, grade: 9 },
  { id: "idioms-9", title: "Idioms", description: "Idiomy a fráze", exerciseCount: 4, grade: 9 },
  { id: "reading-9", title: "Reading comprehension", description: "Porozumění textu", exerciseCount: 4, grade: 9 },
];

export const englishExercises: Exercise[] = [
  // 1. třída
  { id: "colors-rozradovacka", title: "Rozřazovačka - barvy", type: "sorting", questionCount: 8, topicId: "colors-1" },
  { id: "numbers-vpisovani", title: "Vpisování - čísla", type: "typing", questionCount: 10, topicId: "numbers-1" },

  // 2. třída
  { id: "animals-rozradovacka", title: "Rozřazovačka - zvířata", type: "sorting", questionCount: 10, topicId: "animals-2" },
  { id: "family-vpisovani", title: "Vpisování - rodina", type: "typing", questionCount: 8, topicId: "family-2" },

  // 3. třída
  { id: "food-rozradovacka", title: "Rozřazovačka - jídlo", type: "sorting", questionCount: 10, topicId: "food-3" },
  { id: "verb-to-be-vpisovani", title: "Vpisování - am/is/are", type: "typing", questionCount: 10, topicId: "verb-to-be-3" },

  // 4. třída
  { id: "clothes-rozradovacka", title: "Rozřazovačka - oblečení", type: "sorting", questionCount: 10, topicId: "clothes-4" },
  { id: "present-continuous-vpisovani", title: "Vpisování - -ing", type: "typing", questionCount: 10, topicId: "present-continuous-4" },

  // 5. třída
  { id: "present-simple-rozhodovacka", title: "Rozhodovačka - do/does", type: "decision", questionCount: 12, topicId: "present-simple-5" },
  { id: "present-simple-vpisovani", title: "Vpisování - Present Simple", type: "typing", questionCount: 10, topicId: "present-simple-5" },
  { id: "vocabulary-vpisovani", title: "Vpisování - slovíčka", type: "typing", questionCount: 15, topicId: "vocabulary-5" },

  // 6. třída
  { id: "past-simple-rozhodovacka", title: "Rozhodovačka - pravidelná/neprav.", type: "decision", questionCount: 12, topicId: "past-simple-6" },
  { id: "irregular-verbs-vpisovani", title: "Vpisování - neprav. slovesa", type: "typing", questionCount: 15, topicId: "irregular-verbs-6" },
  { id: "comparatives-vpisovani", title: "Vpisování - stupňování", type: "typing", questionCount: 10, topicId: "comparatives-6" },

  // 7. třída
  { id: "future-rozhodovacka", title: "Rozhodovačka - will/going to", type: "decision", questionCount: 10, topicId: "future-7" },
  { id: "modal-verbs-rozradovacka", title: "Rozřazovačka - modální slovesa", type: "sorting", questionCount: 10, topicId: "modal-verbs-7" },

  // 8. třída
  { id: "present-perfect-vpisovani", title: "Vpisování - have/has + pp", type: "typing", questionCount: 12, topicId: "present-perfect-8" },
  { id: "passive-vpisovani", title: "Vpisování - trpný rod", type: "typing", questionCount: 10, topicId: "passive-8" },

  // 9. třída
  { id: "advanced-rozhodovacka", title: "Rozhodovačka - pokročilá gram.", type: "decision", questionCount: 12, topicId: "advanced-grammar-9" },
  { id: "idioms-rozradovacka", title: "Rozřazovačka - idiomy", type: "sorting", questionCount: 10, topicId: "idioms-9" },
];

// ==================== IT ====================
export const itTopics: Topic[] = [
  // 5. třída
  { id: "zaklady-pc-5", title: "Základy práce s PC", description: "Hardware a software", exerciseCount: 3, grade: 5 },
  { id: "internet-5", title: "Internet", description: "Bezpečné používání internetu", exerciseCount: 3, grade: 5 },

  // 6. třída
  { id: "textovy-editor-6", title: "Textový editor", description: "Práce s dokumenty", exerciseCount: 3, grade: 6 },
  { id: "tabulky-6", title: "Tabulkový procesor", description: "Základy práce s tabulkami", exerciseCount: 3, grade: 6 },

  // 7. třída
  { id: "prezentace-7", title: "Prezentace", description: "Tvorba prezentací", exerciseCount: 3, grade: 7 },
  { id: "bezpecnost-7", title: "Kybernetická bezpečnost", description: "Bezpečnost na internetu", exerciseCount: 4, grade: 7 },

  // 8. třída
  { id: "algoritmy-8", title: "Algoritmy", description: "Základy algoritmizace", exerciseCount: 4, grade: 8 },
  { id: "programovani-8", title: "Úvod do programování", description: "Scratch, bloky", exerciseCount: 4, grade: 8 },

  // 9. třída
  { id: "webove-stranky-9", title: "Webové stránky", description: "Základy HTML a CSS", exerciseCount: 4, grade: 9 },
  { id: "databaze-9", title: "Databáze", description: "Základy práce s databázemi", exerciseCount: 3, grade: 9 },
];

export const itExercises: Exercise[] = [
  { id: "hw-sw-rozradovacka", title: "Rozřazovačka - HW vs SW", type: "sorting", questionCount: 10, topicId: "zaklady-pc-5" },
  { id: "internet-rozhodovacka", title: "Rozhodovačka - bezpečnost", type: "decision", questionCount: 10, topicId: "internet-5" },
  { id: "kyber-rozhodovacka", title: "Rozhodovačka - kyberbezpečnost", type: "decision", questionCount: 12, topicId: "bezpecnost-7" },
  { id: "algoritmy-rozradovacka", title: "Rozřazovačka - algoritmy", type: "sorting", questionCount: 8, topicId: "algoritmy-8" },
  { id: "html-vpisovani", title: "Vpisování - HTML tagy", type: "typing", questionCount: 10, topicId: "webove-stranky-9" },
];

// ==================== OTÁZKY PRO CVIČENÍ ====================

// Rozhodovačka - výběr ze dvou možností
export const decisionQuestions: Question[] = [
  // Vyjmenovaná slova po B
  { id: "dec-b-1", type: "decision", text: "Vyber správné: b_dlo", options: ["y", "i"], correctAnswer: "y", explanation: "Bydlo je odvozeno od vyjmenovaného slova bydlit." },
  { id: "dec-b-2", type: "decision", text: "Vyber správné: b_t", options: ["ý", "í"], correctAnswer: "ý", explanation: "Být je vyjmenované slovo po B." },
  { id: "dec-b-3", type: "decision", text: "Vyber správné: kob_la", options: ["y", "i"], correctAnswer: "y", explanation: "Kobyla je vyjmenované slovo po B." },
  { id: "dec-b-4", type: "decision", text: "Vyber správné: ob_vatel", options: ["y", "i"], correctAnswer: "y", explanation: "Obyvatel je odvozeno od vyjmenovaného slova bydlit." },
  { id: "dec-b-5", type: "decision", text: "Vyber správné: b_čí", options: ["ý", "í"], correctAnswer: "ý", explanation: "Býčí je odvozeno od vyjmenovaného slova býk." },
  { id: "dec-b-6", type: "decision", text: "Vyber správné: b_lina", options: ["y", "i"], correctAnswer: "y", explanation: "Bylina je odvozeno od vyjmenovaného slova být/býlí." },
  { id: "dec-b-7", type: "decision", text: "Vyber správné: b_strý", options: ["y", "i"], correctAnswer: "y", explanation: "Bystrý je vyjmenované slovo po B." },
  { id: "dec-b-8", type: "decision", text: "Vyber správné: dob_tek", options: ["y", "i"], correctAnswer: "y", explanation: "Dobytek je odvozeno od vyjmenovaného slova dobýt." },
  { id: "dec-b-9", type: "decision", text: "Vyber správné: b_lek", options: ["í", "ý"], correctAnswer: "í", explanation: "Bílek není vyjmenované slovo, píšeme měkké i." },
  { id: "dec-b-10", type: "decision", text: "Vyber správné: nab_dka", options: ["í", "ý"], correctAnswer: "í", explanation: "Nabídka není odvozeno od vyjmenovaných slov." },
  { id: "dec-b-11", type: "decision", text: "Vyber správné: b_tva", options: ["i", "y"], correctAnswer: "i", explanation: "Bitva není vyjmenované slovo." },
  { id: "dec-b-12", type: "decision", text: "Vyber správné: náb_tek", options: ["y", "i"], correctAnswer: "y", explanation: "Nábytek je odvozeno od vyjmenovaného slova byt." },

  // Vyjmenovaná slova po M
  { id: "dec-m-1", type: "decision", text: "Vyber správné: m_š", options: ["y", "i"], correctAnswer: "y", explanation: "Myš je vyjmenované slovo po M." },
  { id: "dec-m-2", type: "decision", text: "Vyber správné: hm_z", options: ["y", "i"], correctAnswer: "y", explanation: "Hmyz je vyjmenované slovo po M." },
  { id: "dec-m-3", type: "decision", text: "Vyber správné: m_t (čistit)", options: ["ý", "í"], correctAnswer: "ý", explanation: "Mýt je vyjmenované slovo po M." },
  { id: "dec-m-4", type: "decision", text: "Vyber správné: m_slet", options: ["y", "i"], correctAnswer: "y", explanation: "Myslet je vyjmenované slovo po M." },
  { id: "dec-m-5", type: "decision", text: "Vyber správné: m_lý", options: ["i", "y"], correctAnswer: "i", explanation: "Milý není vyjmenované slovo." },
  { id: "dec-m-6", type: "decision", text: "Vyber správné: kom_n", options: ["í", "ý"], correctAnswer: "í", explanation: "Komín není vyjmenované slovo." },
  { id: "dec-m-7", type: "decision", text: "Vyber správné: m_dlo", options: ["ý", "í"], correctAnswer: "ý", explanation: "Mýdlo je vyjmenované slovo po M." },
  { id: "dec-m-8", type: "decision", text: "Vyber správné: zam_kat", options: ["y", "i"], correctAnswer: "y", explanation: "Zamykat je odvozeno od vyjmenovaného slova mýt." },
  { id: "dec-m-9", type: "decision", text: "Vyber správné: m_nout", options: ["i", "y"], correctAnswer: "i", explanation: "Minout není vyjmenované slovo." },
  { id: "dec-m-10", type: "decision", text: "Vyber správné: m_lník", options: ["ý", "í"], correctAnswer: "ý", explanation: "Mýlník je odvozeno od vyjmenovaného slova mýlit se." },
  { id: "dec-m-11", type: "decision", text: "Vyber správné: pom_slel", options: ["y", "i"], correctAnswer: "y", explanation: "Pomyslel je odvozeno od vyjmenovaného slova myslet." },
  { id: "dec-m-12", type: "decision", text: "Vyber správné: m_sto", options: ["í", "ý"], correctAnswer: "í", explanation: "Místo není vyjmenované slovo." },

  // Vyjmenovaná slova po P
  { id: "dec-p-1", type: "decision", text: "Vyber správné: p_tel", options: ["y", "i"], correctAnswer: "y", explanation: "Pytel je vyjmenované slovo po P." },
  { id: "dec-p-2", type: "decision", text: "Vyber správné: p_cha", options: ["ý", "í"], correctAnswer: "ý", explanation: "Pýcha je vyjmenované slovo po P." },
  { id: "dec-p-3", type: "decision", text: "Vyber správné: p_sk", options: ["í", "ý"], correctAnswer: "í", explanation: "Pisk není vyjmenované slovo." },
  { id: "dec-p-4", type: "decision", text: "Vyber správné: slep_š", options: ["ý", "í"], correctAnswer: "ý", explanation: "Slepýš je vyjmenované slovo po P." },
  { id: "dec-p-5", type: "decision", text: "Vyber správné: p_smo", options: ["í", "ý"], correctAnswer: "í", explanation: "Písmo není vyjmenované slovo." },
  { id: "dec-p-6", type: "decision", text: "Vyber správné: p_t (ptat se)", options: ["ý", "í"], correctAnswer: "ý", explanation: "Pýtat se není vyjmenované slovo, ale odvozeno od pysk - ústa." },
  { id: "dec-p-7", type: "decision", text: "Vyber správné: p_tvor", options: ["ý", "í"], correctAnswer: "ý", explanation: "Pýtvor je odvozeno od vyjmenovaného slova pykat." },
  { id: "dec-p-8", type: "decision", text: "Vyber správné: kop_to", options: ["y", "i"], correctAnswer: "y", explanation: "Kopyto je vyjmenované slovo po P." },
  { id: "dec-p-9", type: "decision", text: "Vyber správné: p_lka", options: ["i", "y"], correctAnswer: "i", explanation: "Pilka není vyjmenované slovo." },
  { id: "dec-p-10", type: "decision", text: "Vyber správné: nap_sat", options: ["í", "ý"], correctAnswer: "í", explanation: "Napísat není vyjmenované slovo." },
  { id: "dec-p-11", type: "decision", text: "Vyber správné: p_ř", options: ["ý", "í"], correctAnswer: "ý", explanation: "Pýř je vyjmenované slovo po P." },
  { id: "dec-p-12", type: "decision", text: "Vyber správné: čep_ce", options: ["y", "i"], correctAnswer: "y", explanation: "Čepyce je odvozeno od vyjmenovaného slova." },

  // Vyjmenovaná slova po S
  { id: "dec-s-1", type: "decision", text: "Vyber správné: s_n", options: ["y", "i"], correctAnswer: "y", explanation: "Syn je vyjmenované slovo po S." },
  { id: "dec-s-2", type: "decision", text: "Vyber správné: s_r", options: ["ý", "í"], correctAnswer: "ý", explanation: "Sýr je vyjmenované slovo po S." },
  { id: "dec-s-3", type: "decision", text: "Vyber správné: s_tý", options: ["y", "i"], correctAnswer: "y", explanation: "Sytý je vyjmenované slovo po S." },
  { id: "dec-s-4", type: "decision", text: "Vyber správné: s_la", options: ["í", "ý"], correctAnswer: "í", explanation: "Síla není vyjmenované slovo." },
  { id: "dec-s-5", type: "decision", text: "Vyber správné: s_pal", options: ["y", "i"], correctAnswer: "y", explanation: "Sypal je odvozeno od vyjmenovaného slova sypat." },
  { id: "dec-s-6", type: "decision", text: "Vyber správné: s_čet", options: ["i", "y"], correctAnswer: "y", explanation: "Sypat/sečet... syček souvisí s vyjmenovaným slovem." },
  { id: "dec-s-7", type: "decision", text: "Vyber správné: s_rový", options: ["ý", "í"], correctAnswer: "ý", explanation: "Sýrový je odvozeno od vyjmenovaného slova sýr." },
  { id: "dec-s-8", type: "decision", text: "Vyber správné: us_nat", options: ["í", "ý"], correctAnswer: "í", explanation: "Usínat není vyjmenované slovo." },
  { id: "dec-s-9", type: "decision", text: "Vyber správné: s_korka", options: ["ý", "í"], correctAnswer: "ý", explanation: "Sýkorka je vyjmenované slovo po S." },
  { id: "dec-s-10", type: "decision", text: "Vyber správné: pros_t", options: ["i", "y"], correctAnswer: "i", explanation: "Prosit není vyjmenované slovo." },
  { id: "dec-s-11", type: "decision", text: "Vyber správné: s_rový", options: ["y", "i"], correctAnswer: "y", explanation: "Syrový je odvozeno od vyjmenovaného slova syrý (vlhký)." },
  { id: "dec-s-12", type: "decision", text: "Vyber správné: s_sel", options: ["y", "i"], correctAnswer: "y", explanation: "Sysel je vyjmenované slovo po S." },

  // Vyjmenovaná slova po V
  { id: "dec-v-1", type: "decision", text: "Vyber správné: v_t (zvuk psa)", options: ["ý", "í"], correctAnswer: "ý", explanation: "Výt je vyjmenované slovo po V." },
  { id: "dec-v-2", type: "decision", text: "Vyber správné: v_soký", options: ["y", "i"], correctAnswer: "y", explanation: "Vysoký je vyjmenované slovo po V." },
  { id: "dec-v-3", type: "decision", text: "Vyber správné: v_dět", options: ["i", "y"], correctAnswer: "i", explanation: "Vidět není vyjmenované slovo." },
  { id: "dec-v-4", type: "decision", text: "Vyber správné: zv_k", options: ["y", "i"], correctAnswer: "y", explanation: "Zvyk je vyjmenované slovo po V." },
  { id: "dec-v-5", type: "decision", text: "Vyber správné: v_r", options: ["ý", "í"], correctAnswer: "ý", explanation: "Výr je vyjmenované slovo po V." },
  { id: "dec-v-6", type: "decision", text: "Vyber správné: v_no", options: ["í", "ý"], correctAnswer: "í", explanation: "Víno není vyjmenované slovo." },
  { id: "dec-v-7", type: "decision", text: "Vyber správné: v_kat", options: ["y", "i"], correctAnswer: "y", explanation: "Vykat je odvozeno od vyjmenovaného slova vy." },
  { id: "dec-v-8", type: "decision", text: "Vyber správné: v_tr", options: ["í", "ý"], correctAnswer: "í", explanation: "Vítr není vyjmenované slovo." },
  { id: "dec-v-9", type: "decision", text: "Vyber správné: pov_k", options: ["y", "i"], correctAnswer: "y", explanation: "Povyk je odvozeno od vyjmenovaného slova vykat." },
  { id: "dec-v-10", type: "decision", text: "Vyber správné: v_dra", options: ["y", "i"], correctAnswer: "y", explanation: "Vydra je vyjmenované slovo po V." },
  { id: "dec-v-11", type: "decision", text: "Vyber správné: v_la", options: ["i", "y"], correctAnswer: "i", explanation: "Vila není vyjmenované slovo." },
  { id: "dec-v-12", type: "decision", text: "Vyber správné: v_živa", options: ["ý", "í"], correctAnswer: "ý", explanation: "Výživa je odvozeno od vyjmenovaného slova." },

  // Vyjmenovaná slova po Z
  { id: "dec-z-1", type: "decision", text: "Vyber správné: jaz_k", options: ["y", "i"], correctAnswer: "y", explanation: "Jazyk je vyjmenované slovo po Z." },
  { id: "dec-z-2", type: "decision", text: "Vyber správné: brz_", options: ["y", "i"], correctAnswer: "y", explanation: "Brzy je vyjmenované slovo po Z." },
  { id: "dec-z-3", type: "decision", text: "Vyber správné: naz_vat", options: ["ý", "í"], correctAnswer: "ý", explanation: "Nazývat je odvozeno od vyjmenovaného slova." },
  { id: "dec-z-4", type: "decision", text: "Vyber správné: z_ma", options: ["i", "y"], correctAnswer: "i", explanation: "Zima není vyjmenované slovo." },
  { id: "dec-z-5", type: "decision", text: "Vyber správné: koz_", options: ["i", "y"], correctAnswer: "i", explanation: "Kozi není vyjmenované slovo." },
  { id: "dec-z-6", type: "decision", text: "Vyber správné: z_sk", options: ["í", "ý"], correctAnswer: "í", explanation: "Zisk není vyjmenované slovo." },
  { id: "dec-z-7", type: "decision", text: "Vyber správné: oz_vat se", options: ["ý", "í"], correctAnswer: "ý", explanation: "Ozývat se je odvozeno od vyjmenovaného slova." },
  { id: "dec-z-8", type: "decision", text: "Vyber správné: z_tra", options: ["í", "ý"], correctAnswer: "í", explanation: "Zítra není vyjmenované slovo." },
  { id: "dec-z-9", type: "decision", text: "Vyber správné: jazykoz_t", options: ["y", "i"], correctAnswer: "y", explanation: "Jazykozyt je odvozeno od vyjmenovaného slova jazyk." },
  { id: "dec-z-10", type: "decision", text: "Vyber správné: baz_lišek", options: ["i", "y"], correctAnswer: "i", explanation: "Bazilišek není vyjmenované slovo." },
  { id: "dec-z-11", type: "decision", text: "Vyber správné: koz_", options: ["y", "i"], correctAnswer: "i", explanation: "Kozí není vyjmenované slovo." },
  { id: "dec-z-12", type: "decision", text: "Vyber správné: z_vá", options: ["í", "ý"], correctAnswer: "í", explanation: "Zívá není vyjmenované slovo." },

  // Matematika - porovnávání
  { id: "dec-math-1", type: "decision", text: "15 _ 12", options: [">", "<"], correctAnswer: ">", explanation: "15 je větší než 12." },
  { id: "dec-math-2", type: "decision", text: "8 _ 18", options: [">", "<"], correctAnswer: "<", explanation: "8 je menší než 18." },
  { id: "dec-math-3", type: "decision", text: "25 _ 25", options: ["=", "≠"], correctAnswer: "=", explanation: "25 se rovná 25." },
  { id: "dec-math-4", type: "decision", text: "-5 _ 3", options: [">", "<"], correctAnswer: "<", explanation: "Záporné číslo je vždy menší než kladné." },
  { id: "dec-math-5", type: "decision", text: "-10 _ -15", options: [">", "<"], correctAnswer: ">", explanation: "-10 je větší než -15 (je blíž nule)." },
  { id: "dec-math-6", type: "decision", text: "1/2 _ 1/4", options: [">", "<"], correctAnswer: ">", explanation: "Polovina je větší než čtvrtina." },
  { id: "dec-math-7", type: "decision", text: "0.5 _ 0.25", options: [">", "<"], correctAnswer: ">", explanation: "0.5 je větší než 0.25." },
  { id: "dec-math-8", type: "decision", text: "3² _ 8", options: [">", "<"], correctAnswer: ">", explanation: "3² = 9, což je větší než 8." },
  { id: "dec-math-9", type: "decision", text: "√16 _ 5", options: [">", "<"], correctAnswer: "<", explanation: "√16 = 4, což je menší než 5." },
  { id: "dec-math-10", type: "decision", text: "2/3 _ 3/4", options: [">", "<"], correctAnswer: "<", explanation: "2/3 ≈ 0.67, 3/4 = 0.75, takže 2/3 < 3/4." },

  // Angličtina - Present Simple
  { id: "dec-eng-1", type: "decision", text: "He ___ to school.", options: ["go", "goes"], correctAnswer: "goes", explanation: "Ve 3. osobě j.č. přidáváme -s/-es." },
  { id: "dec-eng-2", type: "decision", text: "___ you like pizza?", options: ["Do", "Does"], correctAnswer: "Do", explanation: "S 'you' používáme 'do'." },
  { id: "dec-eng-3", type: "decision", text: "She ___ English.", options: ["speak", "speaks"], correctAnswer: "speaks", explanation: "Ve 3. osobě j.č. přidáváme -s." },
  { id: "dec-eng-4", type: "decision", text: "They ___ football.", options: ["play", "plays"], correctAnswer: "play", explanation: "S 'they' nepoužíváme -s." },
  { id: "dec-eng-5", type: "decision", text: "___ he work here?", options: ["Do", "Does"], correctAnswer: "Does", explanation: "Ve 3. osobě j.č. používáme 'does'." },
  { id: "dec-eng-6", type: "decision", text: "I ___ a book.", options: ["read", "reads"], correctAnswer: "read", explanation: "S 'I' nepoužíváme -s." },
  { id: "dec-eng-7", type: "decision", text: "The cat ___ milk.", options: ["drink", "drinks"], correctAnswer: "drinks", explanation: "Ve 3. osobě j.č. přidáváme -s." },
  { id: "dec-eng-8", type: "decision", text: "We ___ TV.", options: ["watch", "watches"], correctAnswer: "watch", explanation: "S 'we' nepoužíváme -es." },
  { id: "dec-eng-9", type: "decision", text: "My mother ___ dinner.", options: ["cook", "cooks"], correctAnswer: "cooks", explanation: "Ve 3. osobě j.č. přidáváme -s." },
  { id: "dec-eng-10", type: "decision", text: "___ it rain often?", options: ["Do", "Does"], correctAnswer: "Does", explanation: "S 'it' používáme 'does'." },
  { id: "dec-eng-11", type: "decision", text: "The sun ___ in the east.", options: ["rise", "rises"], correctAnswer: "rises", explanation: "Ve 3. osobě j.č. přidáváme -s." },
  { id: "dec-eng-12", type: "decision", text: "Birds ___ south in winter.", options: ["fly", "flies"], correctAnswer: "fly", explanation: "S množným číslem nepoužíváme -ies." },

  // Shoda podmětu s přísudkem
  { id: "dec-shoda-1", type: "decision", text: "Chlapci běžel_", options: ["i", "y"], correctAnswer: "i", explanation: "Chlapci je mužský rod životný - píšeme i." },
  { id: "dec-shoda-2", type: "decision", text: "Stromy rostl_", options: ["i", "y"], correctAnswer: "y", explanation: "Stromy je mužský rod neživotný - píšeme y." },
  { id: "dec-shoda-3", type: "decision", text: "Děvčata zpíval_", options: ["a", "y"], correctAnswer: "a", explanation: "Děvčata je střední rod - píšeme a." },
  { id: "dec-shoda-4", type: "decision", text: "Ženy vařil_", options: ["i", "y"], correctAnswer: "y", explanation: "Ženy je ženský rod - píšeme y." },
  { id: "dec-shoda-5", type: "decision", text: "Koně utíkal_", options: ["i", "y"], correctAnswer: "i", explanation: "Koně je mužský rod životný - píšeme i." },
  { id: "dec-shoda-6", type: "decision", text: "Hrady stál_", options: ["i", "y"], correctAnswer: "y", explanation: "Hrady je mužský rod neživotný - píšeme y." },
  { id: "dec-shoda-7", type: "decision", text: "Města rostl_", options: ["a", "y"], correctAnswer: "a", explanation: "Města je střední rod - píšeme a." },
  { id: "dec-shoda-8", type: "decision", text: "Kamarádi přišl_", options: ["i", "y"], correctAnswer: "i", explanation: "Kamarádi je mužský rod životný - píšeme i." },
  { id: "dec-shoda-9", type: "decision", text: "Vlaky jel_", options: ["i", "y"], correctAnswer: "y", explanation: "Vlaky je mužský rod neživotný - píšeme y." },
  { id: "dec-shoda-10", type: "decision", text: "Pole kvetl_", options: ["a", "y"], correctAnswer: "a", explanation: "Pole je střední rod - píšeme a." },
];

// Vpisování - psaní odpovědi na klávesnici
export const typingQuestions: Question[] = [
  // Vyjmenovaná slova
  { id: "typ-b-1", type: "typing", text: "Doplň i/y: b_dlit", correctAnswer: "y", explanation: "Bydlit je vyjmenované slovo po B." },
  { id: "typ-b-2", type: "typing", text: "Doplň i/y: nab_dka", correctAnswer: "í", explanation: "Nabídka není vyjmenované slovo." },
  { id: "typ-b-3", type: "typing", text: "Doplň i/y: b_k", correctAnswer: "ý", explanation: "Býk je vyjmenované slovo po B." },
  { id: "typ-b-4", type: "typing", text: "Doplň i/y: b_tva", correctAnswer: "i", explanation: "Bitva není vyjmenované slovo." },
  { id: "typ-b-5", type: "typing", text: "Doplň i/y: ob_čej", correctAnswer: "y", explanation: "Obyčej je odvozeno od vyjmenovaného slova." },

  { id: "typ-m-1", type: "typing", text: "Doplň i/y: m_š", correctAnswer: "y", explanation: "Myš je vyjmenované slovo po M." },
  { id: "typ-m-2", type: "typing", text: "Doplň i/y: m_nuta", correctAnswer: "i", explanation: "Minuta není vyjmenované slovo." },
  { id: "typ-m-3", type: "typing", text: "Doplň i/y: hm_z", correctAnswer: "y", explanation: "Hmyz je vyjmenované slovo po M." },
  { id: "typ-m-4", type: "typing", text: "Doplň i/y: m_sto", correctAnswer: "í", explanation: "Místo není vyjmenované slovo." },
  { id: "typ-m-5", type: "typing", text: "Doplň i/y: m_dlo", correctAnswer: "ý", explanation: "Mýdlo je vyjmenované slovo po M." },

  { id: "typ-p-1", type: "typing", text: "Doplň i/y: p_cha", correctAnswer: "ý", explanation: "Pýcha je vyjmenované slovo po P." },
  { id: "typ-p-2", type: "typing", text: "Doplň i/y: p_smo", correctAnswer: "í", explanation: "Písmo není vyjmenované slovo." },
  { id: "typ-p-3", type: "typing", text: "Doplň i/y: kop_to", correctAnswer: "y", explanation: "Kopyto je vyjmenované slovo po P." },
  { id: "typ-p-4", type: "typing", text: "Doplň i/y: p_lka", correctAnswer: "i", explanation: "Pilka není vyjmenované slovo." },
  { id: "typ-p-5", type: "typing", text: "Doplň i/y: p_tel", correctAnswer: "y", explanation: "Pytel je vyjmenované slovo po P." },

  { id: "typ-s-1", type: "typing", text: "Doplň i/y: s_r", correctAnswer: "ý", explanation: "Sýr je vyjmenované slovo po S." },
  { id: "typ-s-2", type: "typing", text: "Doplň i/y: s_la", correctAnswer: "í", explanation: "Síla není vyjmenované slovo." },
  { id: "typ-s-3", type: "typing", text: "Doplň i/y: s_n", correctAnswer: "y", explanation: "Syn je vyjmenované slovo po S." },
  { id: "typ-s-4", type: "typing", text: "Doplň i/y: s_korka", correctAnswer: "ý", explanation: "Sýkorka je vyjmenované slovo po S." },
  { id: "typ-s-5", type: "typing", text: "Doplň i/y: s_tý", correctAnswer: "y", explanation: "Sytý je vyjmenované slovo po S." },

  { id: "typ-v-1", type: "typing", text: "Doplň i/y: v_soký", correctAnswer: "y", explanation: "Vysoký je vyjmenované slovo po V." },
  { id: "typ-v-2", type: "typing", text: "Doplň i/y: v_no", correctAnswer: "í", explanation: "Víno není vyjmenované slovo." },
  { id: "typ-v-3", type: "typing", text: "Doplň i/y: v_dra", correctAnswer: "y", explanation: "Vydra je vyjmenované slovo po V." },
  { id: "typ-v-4", type: "typing", text: "Doplň i/y: v_tr", correctAnswer: "í", explanation: "Vítr není vyjmenované slovo." },
  { id: "typ-v-5", type: "typing", text: "Doplň i/y: zv_k", correctAnswer: "y", explanation: "Zvyk je vyjmenované slovo po V." },

  { id: "typ-z-1", type: "typing", text: "Doplň i/y: jaz_k", correctAnswer: "y", explanation: "Jazyk je vyjmenované slovo po Z." },
  { id: "typ-z-2", type: "typing", text: "Doplň i/y: z_ma", correctAnswer: "i", explanation: "Zima není vyjmenované slovo." },
  { id: "typ-z-3", type: "typing", text: "Doplň i/y: brz_", correctAnswer: "y", explanation: "Brzy je vyjmenované slovo po Z." },
  { id: "typ-z-4", type: "typing", text: "Doplň i/y: z_tra", correctAnswer: "í", explanation: "Zítra není vyjmenované slovo." },
  { id: "typ-z-5", type: "typing", text: "Doplň i/y: naz_vat", correctAnswer: "ý", explanation: "Nazývat je odvozeno od vyjmenovaného slova." },

  // Shoda podmětu s přísudkem
  { id: "typ-shoda-1", type: "typing", text: "Doplň koncovku: Vojáci pochodoval_", correctAnswer: "i", explanation: "Vojáci je m.r. životný - píšeme i." },
  { id: "typ-shoda-2", type: "typing", text: "Doplň koncovku: Domy stál_", correctAnswer: "y", explanation: "Domy je m.r. neživotný - píšeme y." },
  { id: "typ-shoda-3", type: "typing", text: "Doplň koncovku: Kuřata pískala_", correctAnswer: "a", explanation: "Kuřata je střední rod - píšeme a." },
  { id: "typ-shoda-4", type: "typing", text: "Doplň koncovku: Sestry zpíval_", correctAnswer: "y", explanation: "Sestry je ženský rod - píšeme y." },
  { id: "typ-shoda-5", type: "typing", text: "Doplň koncovku: Psi štěkal_", correctAnswer: "i", explanation: "Psi je m.r. životný - píšeme i." },

  // Matematika
  { id: "typ-math-1", type: "typing", text: "Vypočítej: 7 × 8 =", correctAnswer: "56", explanation: "7 × 8 = 56" },
  { id: "typ-math-2", type: "typing", text: "Vypočítej: 9 × 6 =", correctAnswer: "54", explanation: "9 × 6 = 54" },
  { id: "typ-math-3", type: "typing", text: "Vypočítej: 12 × 5 =", correctAnswer: "60", explanation: "12 × 5 = 60" },
  { id: "typ-math-4", type: "typing", text: "Vypočítej: 81 ÷ 9 =", correctAnswer: "9", explanation: "81 ÷ 9 = 9" },
  { id: "typ-math-5", type: "typing", text: "Vypočítej: 144 ÷ 12 =", correctAnswer: "12", explanation: "144 ÷ 12 = 12" },
  { id: "typ-math-6", type: "typing", text: "Kolik je 25% z 80?", correctAnswer: "20", explanation: "25% z 80 = 0.25 × 80 = 20" },
  { id: "typ-math-7", type: "typing", text: "Vyřeš rovnici: x + 5 = 12, x =", correctAnswer: "7", explanation: "x = 12 - 5 = 7" },
  { id: "typ-math-8", type: "typing", text: "Vyřeš rovnici: 2x = 14, x =", correctAnswer: "7", explanation: "x = 14 ÷ 2 = 7" },
  { id: "typ-math-9", type: "typing", text: "Vypočítej: 3² =", correctAnswer: "9", explanation: "3² = 3 × 3 = 9" },
  { id: "typ-math-10", type: "typing", text: "Vypočítej: √49 =", correctAnswer: "7", explanation: "√49 = 7" },

  // Angličtina - nepravidelná slovesa
  { id: "typ-eng-1", type: "typing", text: "Past tense of 'go':", correctAnswer: "went", explanation: "go - went - gone" },
  { id: "typ-eng-2", type: "typing", text: "Past tense of 'see':", correctAnswer: "saw", explanation: "see - saw - seen" },
  { id: "typ-eng-3", type: "typing", text: "Past tense of 'eat':", correctAnswer: "ate", explanation: "eat - ate - eaten" },
  { id: "typ-eng-4", type: "typing", text: "Past tense of 'drink':", correctAnswer: "drank", explanation: "drink - drank - drunk" },
  { id: "typ-eng-5", type: "typing", text: "Past tense of 'write':", correctAnswer: "wrote", explanation: "write - wrote - written" },
  { id: "typ-eng-6", type: "typing", text: "Past tense of 'take':", correctAnswer: "took", explanation: "take - took - taken" },
  { id: "typ-eng-7", type: "typing", text: "Past tense of 'make':", correctAnswer: "made", explanation: "make - made - made" },
  { id: "typ-eng-8", type: "typing", text: "Past tense of 'come':", correctAnswer: "came", explanation: "come - came - come" },
  { id: "typ-eng-9", type: "typing", text: "Past tense of 'give':", correctAnswer: "gave", explanation: "give - gave - given" },
  { id: "typ-eng-10", type: "typing", text: "Past tense of 'know':", correctAnswer: "knew", explanation: "know - knew - known" },
];

// Rozřazovačka - třídění do kategorií
export const sortingQuestions: Question[] = [
  // Slovní druhy
  {
    id: "sort-slovni-1",
    type: "sorting",
    text: "Roztřiď slova podle slovních druhů",
    categories: ["Podstatná jména", "Přídavná jména", "Slovesa"],
    items: [
      { text: "strom", category: "Podstatná jména" },
      { text: "krásný", category: "Přídavná jména" },
      { text: "běžet", category: "Slovesa" },
      { text: "kniha", category: "Podstatná jména" },
      { text: "zelený", category: "Přídavná jména" },
      { text: "psát", category: "Slovesa" },
    ],
    correctAnswer: [],
  },
  {
    id: "sort-slovni-2",
    type: "sorting",
    text: "Roztřiď slova: podstatná jména × zájmena",
    categories: ["Podstatná jména", "Zájmena"],
    items: [
      { text: "já", category: "Zájmena" },
      { text: "pes", category: "Podstatná jména" },
      { text: "ona", category: "Zájmena" },
      { text: "město", category: "Podstatná jména" },
      { text: "my", category: "Zájmena" },
      { text: "učitel", category: "Podstatná jména" },
    ],
    correctAnswer: [],
  },

  // Rod podstatných jmen
  {
    id: "sort-rod-1",
    type: "sorting",
    text: "Roztřiď podstatná jména podle rodu",
    categories: ["Mužský rod", "Ženský rod", "Střední rod"],
    items: [
      { text: "stůl", category: "Mužský rod" },
      { text: "židle", category: "Ženský rod" },
      { text: "okno", category: "Střední rod" },
      { text: "pán", category: "Mužský rod" },
      { text: "žena", category: "Ženský rod" },
      { text: "město", category: "Střední rod" },
    ],
    correctAnswer: [],
  },

  // Větné členy
  {
    id: "sort-vetne-1",
    type: "sorting",
    text: "Roztřiď větné členy",
    categories: ["Podmět", "Přísudek", "Předmět"],
    items: [
      { text: "Petr (ve větě: Petr čte knihu)", category: "Podmět" },
      { text: "čte (ve větě: Petr čte knihu)", category: "Přísudek" },
      { text: "knihu (ve větě: Petr čte knihu)", category: "Předmět" },
      { text: "Pes (ve větě: Pes běží)", category: "Podmět" },
      { text: "běží (ve větě: Pes běží)", category: "Přísudek" },
    ],
    correctAnswer: [],
  },

  // Stavba slova
  {
    id: "sort-stavba-1",
    type: "sorting",
    text: "Roztřiď části slova",
    categories: ["Předpona", "Kořen", "Přípona"],
    items: [
      { text: "pře- (v slově předělat)", category: "Předpona" },
      { text: "-děl- (v slově předělat)", category: "Kořen" },
      { text: "-at (v slově předělat)", category: "Přípona" },
      { text: "vy- (v slově vyběhnout)", category: "Předpona" },
      { text: "-běh- (v slově vyběhnout)", category: "Kořen" },
    ],
    correctAnswer: [],
  },

  // Druhy vět
  {
    id: "sort-vety-1",
    type: "sorting",
    text: "Roztřiď věty podle druhu",
    categories: ["Oznamovací", "Tázací", "Rozkazovací"],
    items: [
      { text: "Venku prší.", category: "Oznamovací" },
      { text: "Kolik je hodin?", category: "Tázací" },
      { text: "Zavři okno!", category: "Rozkazovací" },
      { text: "Mám hlad.", category: "Oznamovací" },
      { text: "Kde bydlíš?", category: "Tázací" },
      { text: "Pojď sem!", category: "Rozkazovací" },
    ],
    correctAnswer: [],
  },

  // Vedlejší věty
  {
    id: "sort-vedlejsi-1",
    type: "sorting",
    text: "Roztřiď druhy vedlejších vět",
    categories: ["Podmětná", "Předmětná", "Příslovečná"],
    items: [
      { text: "Kdo se bojí, nesmí do lesa.", category: "Podmětná" },
      { text: "Řekl, že přijde.", category: "Předmětná" },
      { text: "Když přišel, všichni se smáli.", category: "Příslovečná" },
      { text: "Kdo chce, může.", category: "Podmětná" },
      { text: "Myslím, že máš pravdu.", category: "Předmětná" },
    ],
    correctAnswer: [],
  },

  // Literární pojmy
  {
    id: "sort-literatura-1",
    type: "sorting",
    text: "Roztřiď literární pojmy",
    categories: ["Tropy", "Figury"],
    items: [
      { text: "Metafora", category: "Tropy" },
      { text: "Personifikace", category: "Tropy" },
      { text: "Anafora", category: "Figury" },
      { text: "Přirovnání", category: "Tropy" },
      { text: "Epifora", category: "Figury" },
      { text: "Gradace", category: "Figury" },
    ],
    correctAnswer: [],
  },

  // Matematika - jednotky
  {
    id: "sort-jednotky-1",
    type: "sorting",
    text: "Roztřiď jednotky",
    categories: ["Délka", "Hmotnost", "Čas"],
    items: [
      { text: "metr", category: "Délka" },
      { text: "kilogram", category: "Hmotnost" },
      { text: "sekunda", category: "Čas" },
      { text: "centimetr", category: "Délka" },
      { text: "gram", category: "Hmotnost" },
      { text: "hodina", category: "Čas" },
    ],
    correctAnswer: [],
  },

  // Matematika - funkce
  {
    id: "sort-funkce-1",
    type: "sorting",
    text: "Roztřiď typy funkcí",
    categories: ["Lineární", "Kvadratická"],
    items: [
      { text: "y = 2x + 3", category: "Lineární" },
      { text: "y = x²", category: "Kvadratická" },
      { text: "y = -x + 1", category: "Lineární" },
      { text: "y = x² - 4", category: "Kvadratická" },
      { text: "y = 5x", category: "Lineární" },
      { text: "y = -x² + 2x", category: "Kvadratická" },
    ],
    correctAnswer: [],
  },

  // Angličtina - barvy
  {
    id: "sort-colors-1",
    type: "sorting",
    text: "Sort colors: warm vs cold",
    categories: ["Warm colors", "Cold colors"],
    items: [
      { text: "red", category: "Warm colors" },
      { text: "blue", category: "Cold colors" },
      { text: "orange", category: "Warm colors" },
      { text: "green", category: "Cold colors" },
      { text: "yellow", category: "Warm colors" },
      { text: "purple", category: "Cold colors" },
    ],
    correctAnswer: [],
  },

  // Angličtina - zvířata
  {
    id: "sort-animals-1",
    type: "sorting",
    text: "Sort animals by type",
    categories: ["Farm animals", "Wild animals"],
    items: [
      { text: "cow", category: "Farm animals" },
      { text: "lion", category: "Wild animals" },
      { text: "pig", category: "Farm animals" },
      { text: "elephant", category: "Wild animals" },
      { text: "chicken", category: "Farm animals" },
      { text: "tiger", category: "Wild animals" },
    ],
    correctAnswer: [],
  },

  // Angličtina - jídlo
  {
    id: "sort-food-1",
    type: "sorting",
    text: "Sort food: fruit vs vegetables",
    categories: ["Fruit", "Vegetables"],
    items: [
      { text: "apple", category: "Fruit" },
      { text: "carrot", category: "Vegetables" },
      { text: "banana", category: "Fruit" },
      { text: "tomato", category: "Vegetables" },
      { text: "orange", category: "Fruit" },
      { text: "potato", category: "Vegetables" },
    ],
    correctAnswer: [],
  },

  // Angličtina - modal verbs
  {
    id: "sort-modal-1",
    type: "sorting",
    text: "Sort by meaning",
    categories: ["Ability", "Permission", "Obligation"],
    items: [
      { text: "can", category: "Ability" },
      { text: "may", category: "Permission" },
      { text: "must", category: "Obligation" },
      { text: "could", category: "Ability" },
      { text: "might", category: "Permission" },
      { text: "have to", category: "Obligation" },
    ],
    correctAnswer: [],
  },

  // IT - HW vs SW
  {
    id: "sort-hw-sw-1",
    type: "sorting",
    text: "Roztřiď: Hardware vs Software",
    categories: ["Hardware", "Software"],
    items: [
      { text: "Procesor", category: "Hardware" },
      { text: "Windows", category: "Software" },
      { text: "Klávesnice", category: "Hardware" },
      { text: "Chrome", category: "Software" },
      { text: "Monitor", category: "Hardware" },
      { text: "Word", category: "Software" },
    ],
    correctAnswer: [],
  },

  // IT - algoritmy
  {
    id: "sort-algoritmy-1",
    type: "sorting",
    text: "Roztřiď pojmy z algoritmizace",
    categories: ["Vstup", "Zpracování", "Výstup"],
    items: [
      { text: "Načtení čísla od uživatele", category: "Vstup" },
      { text: "Výpočet součtu", category: "Zpracování" },
      { text: "Zobrazení výsledku", category: "Výstup" },
      { text: "Čtení ze souboru", category: "Vstup" },
      { text: "Porovnání hodnot", category: "Zpracování" },
      { text: "Tisk dokumentu", category: "Výstup" },
    ],
    correctAnswer: [],
  },
];

// Výběr správné odpovědi (choice) - původní otázky rozšířené
export const choiceQuestions: Question[] = [
  // Vyjmenovaná slova po M
  {
    id: "q1",
    type: "choice",
    text: "Vyberte slovo se správně doplněným i/y: m_š",
    options: ["myš", "miš"],
    correctAnswer: "myš",
    explanation: "Myš je vyjmenované slovo po M.",
  },
  {
    id: "q2",
    type: "choice",
    text: "Vyberte slovo se správně doplněným i/y: zam_kat",
    options: ["zamykat", "zamikat"],
    correctAnswer: "zamykat",
    explanation: "Zamykat je odvozeno od vyjmenovaného slova mýt.",
  },
  {
    id: "q3",
    type: "choice",
    text: "Vyberte slovo se správně doplněným i/y: kom_n",
    options: ["komín", "komýn"],
    correctAnswer: "komín",
    explanation: "Komín není vyjmenované slovo, píšeme měkké i.",
  },
  {
    id: "q4",
    type: "choice",
    text: "Vyberte slovo se správně doplněným i/y: m_dlo",
    options: ["mýdlo", "mídlo"],
    correctAnswer: "mýdlo",
    explanation: "Mýdlo je vyjmenované slovo po M.",
  },
  {
    id: "q5",
    type: "choice",
    text: "Vyberte slovo se správně doplněným i/y: hm_z",
    options: ["hmyz", "hmiz"],
    correctAnswer: "hmyz",
    explanation: "Hmyz je vyjmenované slovo po M.",
  },
  {
    id: "q6",
    type: "choice",
    text: "Vyberte slovo se správně doplněným i/y: m_slitel",
    options: ["myslitel", "mislitel"],
    correctAnswer: "myslitel",
    explanation: "Myslitel je odvozeno od vyjmenovaného slova myslet.",
  },
  {
    id: "q7",
    type: "choice",
    text: "Vyberte slovo se správně doplněným i/y: m_nout",
    options: ["minout", "mynout"],
    correctAnswer: "minout",
    explanation: "Minout není vyjmenované slovo, píšeme měkké i.",
  },
  {
    id: "q8",
    type: "choice",
    text: "Vyberte slovo se správně doplněným i/y: m_sto",
    options: ["místo", "mýsto"],
    correctAnswer: "místo",
    explanation: "Místo není vyjmenované slovo, píšeme měkké i.",
  },
  {
    id: "q9",
    type: "choice",
    text: "Vyberte slovo se správně doplněným i/y: prom_tat",
    options: ["promýtat", "promítat"],
    correctAnswer: "promítat",
    explanation: "Promítat není odvozeno od vyjmenovaného slova.",
  },
  {
    id: "q10",
    type: "choice",
    text: "Vyberte slovo se správně doplněným i/y: m_tus",
    options: ["mýtus", "mítus"],
    correctAnswer: "mýtus",
    explanation: "Mýtus je odvozeno od vyjmenovaného slova mýt (ve smyslu legend).",
  },

  // Vyjmenovaná slova po B
  {
    id: "q-b-1",
    type: "choice",
    text: "Vyberte správně: b_t nebo nebýt",
    options: ["být", "bít"],
    correctAnswer: "být",
    explanation: "Být (existovat) je vyjmenované slovo po B.",
  },
  {
    id: "q-b-2",
    type: "choice",
    text: "Vyberte správně: b_dlení",
    options: ["bydlení", "bidlení"],
    correctAnswer: "bydlení",
    explanation: "Bydlení je odvozeno od vyjmenovaného slova bydlit.",
  },
  {
    id: "q-b-3",
    type: "choice",
    text: "Vyberte správně: b_čí rohy",
    options: ["býčí", "bíčí"],
    correctAnswer: "býčí",
    explanation: "Býčí je odvozeno od vyjmenovaného slova býk.",
  },

  // Vyjmenovaná slova po L
  {
    id: "q-l-1",
    type: "choice",
    text: "Vyberte správně: ml_n",
    options: ["mlýn", "mlín"],
    correctAnswer: "mlýn",
    explanation: "Mlýn je vyjmenované slovo po L.",
  },
  {
    id: "q-l-2",
    type: "choice",
    text: "Vyberte správně: bl_skat se",
    options: ["blýskat", "blískat"],
    correctAnswer: "blýskat",
    explanation: "Blýskat je vyjmenované slovo po L.",
  },
  {
    id: "q-l-3",
    type: "choice",
    text: "Vyberte správně: sl_šet",
    options: ["slyšet", "slišet"],
    correctAnswer: "slyšet",
    explanation: "Slyšet je vyjmenované slovo po L.",
  },

  // Vyjmenovaná slova po P
  {
    id: "q-p-1",
    type: "choice",
    text: "Vyberte správně: p_tel",
    options: ["pytel", "pitel"],
    correctAnswer: "pytel",
    explanation: "Pytel je vyjmenované slovo po P.",
  },
  {
    id: "q-p-2",
    type: "choice",
    text: "Vyberte správně: slep_š",
    options: ["slepýš", "slepíš"],
    correctAnswer: "slepýš",
    explanation: "Slepýš je vyjmenované slovo po P.",
  },
];

// Helper funkce pro získání otázek podle typu cvičení
export const getQuestionsForExercise = (exerciseId: string, exerciseType: string): Question[] => {
  switch (exerciseType) {
    case "decision":
      return getDecisionQuestionsForExercise(exerciseId);
    case "typing":
      return getTypingQuestionsForExercise(exerciseId);
    case "sorting":
      return getSortingQuestionsForExercise(exerciseId);
    case "choice":
      return choiceQuestions.slice(0, 10);
    default:
      return choiceQuestions.slice(0, 10);
  }
};

const getDecisionQuestionsForExercise = (exerciseId: string): Question[] => {
  if (exerciseId.includes("vyjm-b")) return decisionQuestions.filter(q => q.id.includes("dec-b"));
  if (exerciseId.includes("vyjm-m")) return decisionQuestions.filter(q => q.id.includes("dec-m"));
  if (exerciseId.includes("vyjm-p")) return decisionQuestions.filter(q => q.id.includes("dec-p"));
  if (exerciseId.includes("vyjm-s")) return decisionQuestions.filter(q => q.id.includes("dec-s"));
  if (exerciseId.includes("vyjm-v")) return decisionQuestions.filter(q => q.id.includes("dec-v"));
  if (exerciseId.includes("vyjm-z")) return decisionQuestions.filter(q => q.id.includes("dec-z"));
  if (exerciseId.includes("shoda")) return decisionQuestions.filter(q => q.id.includes("dec-shoda"));
  if (exerciseId.includes("math") || exerciseId.includes("cisla") || exerciseId.includes("zlomky") || exerciseId.includes("delitelnost")) {
    return decisionQuestions.filter(q => q.id.includes("dec-math"));
  }
  if (exerciseId.includes("eng") || exerciseId.includes("present-simple") || exerciseId.includes("past-simple") || exerciseId.includes("future")) {
    return decisionQuestions.filter(q => q.id.includes("dec-eng"));
  }
  return decisionQuestions.slice(0, 10);
};

const getTypingQuestionsForExercise = (exerciseId: string): Question[] => {
  if (exerciseId.includes("vyjm-b")) return typingQuestions.filter(q => q.id.includes("typ-b"));
  if (exerciseId.includes("vyjm-m")) return typingQuestions.filter(q => q.id.includes("typ-m"));
  if (exerciseId.includes("vyjm-p")) return typingQuestions.filter(q => q.id.includes("typ-p"));
  if (exerciseId.includes("vyjm-s")) return typingQuestions.filter(q => q.id.includes("typ-s"));
  if (exerciseId.includes("vyjm-v")) return typingQuestions.filter(q => q.id.includes("typ-v"));
  if (exerciseId.includes("vyjm-z")) return typingQuestions.filter(q => q.id.includes("typ-z"));
  if (exerciseId.includes("shoda")) return typingQuestions.filter(q => q.id.includes("typ-shoda"));
  if (exerciseId.includes("math") || exerciseId.includes("nasobilka") || exerciseId.includes("deleni") || exerciseId.includes("procenta") || exerciseId.includes("rovnice")) {
    return typingQuestions.filter(q => q.id.includes("typ-math"));
  }
  if (exerciseId.includes("eng") || exerciseId.includes("irregular")) {
    return typingQuestions.filter(q => q.id.includes("typ-eng"));
  }
  return typingQuestions.slice(0, 10);
};

const getSortingQuestionsForExercise = (exerciseId: string): Question[] => {
  if (exerciseId.includes("slovni-druhy")) return sortingQuestions.filter(q => q.id.includes("sort-slovni"));
  if (exerciseId.includes("podstatna-jmena") || exerciseId.includes("rod")) return sortingQuestions.filter(q => q.id.includes("sort-rod"));
  if (exerciseId.includes("vetne-cleny")) return sortingQuestions.filter(q => q.id.includes("sort-vetne"));
  if (exerciseId.includes("stavba-slova")) return sortingQuestions.filter(q => q.id.includes("sort-stavba"));
  if (exerciseId.includes("vety")) return sortingQuestions.filter(q => q.id.includes("sort-vety"));
  if (exerciseId.includes("vedlejsi")) return sortingQuestions.filter(q => q.id.includes("sort-vedlejsi"));
  if (exerciseId.includes("literatura")) return sortingQuestions.filter(q => q.id.includes("sort-literatura"));
  if (exerciseId.includes("jednotky")) return sortingQuestions.filter(q => q.id.includes("sort-jednotky"));
  if (exerciseId.includes("funkce")) return sortingQuestions.filter(q => q.id.includes("sort-funkce"));
  if (exerciseId.includes("colors")) return sortingQuestions.filter(q => q.id.includes("sort-colors"));
  if (exerciseId.includes("animals")) return sortingQuestions.filter(q => q.id.includes("sort-animals"));
  if (exerciseId.includes("food")) return sortingQuestions.filter(q => q.id.includes("sort-food"));
  if (exerciseId.includes("modal")) return sortingQuestions.filter(q => q.id.includes("sort-modal"));
  if (exerciseId.includes("hw-sw") || exerciseId.includes("zaklady-pc")) return sortingQuestions.filter(q => q.id.includes("sort-hw-sw"));
  if (exerciseId.includes("algoritmy")) return sortingQuestions.filter(q => q.id.includes("sort-algoritmy"));
  return sortingQuestions.slice(0, 3);
};

// Získání všech cvičení pro dané téma
export const getExercisesForTopic = (topicId: string, subject: string): Exercise[] => {
  switch (subject) {
    case "czech":
      return czechExercises.filter(e => e.topicId === topicId);
    case "math":
      return mathExercises.filter(e => e.topicId === topicId);
    case "english":
      return englishExercises.filter(e => e.topicId === topicId);
    case "it":
      return itExercises.filter(e => e.topicId === topicId);
    default:
      return [];
  }
};
