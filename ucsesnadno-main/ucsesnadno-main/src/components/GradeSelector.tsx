interface GradeSelectorProps {
  selectedGrade: number | null;
  onSelectGrade: (grade: number) => void;
}

const GradeSelector = ({ selectedGrade, onSelectGrade }: GradeSelectorProps) => {
  const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
      {grades.map((grade) => (
        <button
          key={grade}
          onClick={() => onSelectGrade(grade)}
          className={`grade-card text-center ${
            selectedGrade === grade ? "grade-card-active" : ""
          }`}
        >
          <span className="text-3xl font-bold text-foreground">{grade}</span>
          <span className="block text-sm text-muted-foreground mt-1">třída</span>
        </button>
      ))}
    </div>
  );
};

export default GradeSelector;
