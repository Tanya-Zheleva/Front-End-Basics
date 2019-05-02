namespace TaskOne
{
    using System;

    public class SimpleMathExam : Exam
    {
        private const int MinProblemsSolved = 0;
        private const int MaxProblemsSolved = 10;

        private const int MinGrade = 2;
        private const int AverageGrade = 4;
        private const int MaxGrade = 6;

        private int problemsSolved;

        public SimpleMathExam(int problemsSolved)
        {
            this.ProblemsSolved = problemsSolved;
        }

        public int ProblemsSolved
        {
            get
            {
                return this.problemsSolved;
            }

            private set
            {
                if (value < MinProblemsSolved || value > MaxProblemsSolved) 
                {
                    throw new ArgumentException($"Solved problems count must be between {MinProblemsSolved} and {MaxProblemsSolved}.");
                }

                this.problemsSolved = value;
            }
        }

        public override ExamResult Check()
        {
            if (this.ProblemsSolved == 0)
            {
                return new ExamResult(MinGrade, MinGrade, MaxGrade, "Bad result: nothing done.");
            }
            else if (this.ProblemsSolved == 1)
            {
                return new ExamResult(AverageGrade, MinGrade, MaxGrade, "Average result: nothing done.");
            }
            else if (this.ProblemsSolved == 2)
            {
                return new ExamResult(MaxGrade, MinGrade, MaxGrade, "Average result: nothing done.");
            }

            return new ExamResult(0, 0, 0, "Invalid number of problems solved!");
        }
    }
}
