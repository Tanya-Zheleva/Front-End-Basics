namespace InheritanceАndPolymorphism
{
    using System.Collections.Generic;
    using System.Text;
    using System;

    public abstract class Course
    {
        private string name;
        private string teacherName;

        protected Course(string name)
        {
            this.Name = name;
            this.Students = new List<string>();
        }

        protected Course(string name, string teacherName)
            : this(name)
        {
            this.TeacherName = teacherName;
        }

        protected Course(string courseName, string teacherName, IList<string> students)
            : this(courseName, teacherName)
        {
            this.Students = students;
        }

        public string Name
        {
            get
            {
                return this.name;
            }

            private set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Course name cannot be null or an empty string.");
                }

                this.name = value;
            }
        }

        public string TeacherName
        {
            get
            {
                return this.teacherName;
            }

            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Teacher name cannot be null or an empty string.");
                }

                this.teacherName = value;
            }
        }

        public IList<string> Students { get; set; }

        public override string ToString()
        {
            StringBuilder result = new StringBuilder();

            result.Append($"{this.GetType().Name} {{ Name = ");
            result.Append(this.Name);

            if (this.TeacherName != null)
            {
                result.Append("; Teacher = ");
                result.Append(this.TeacherName);
            }

            result.Append("; Students = ");
            result.Append(this.GetStudentsAsString());

            return result.ToString();
        }

        private string GetStudentsAsString()
        {
            if (this.Students == null || this.Students.Count == 0)
            {
                return "{ }";
            }

            return "{ " + string.Join(", ", this.Students) + " }";
        }
    }
}
