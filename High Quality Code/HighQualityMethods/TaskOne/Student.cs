namespace TaskOne
{
    using System;

    public class Student
    {
        private const string DefaultHobby = "None";

        private string firstName;
        private string lastName;
        private string otherInfo;

        public Student(string firstName, string lastName)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
        }

        public string FirstName
        {
            get
            {
                return this.firstName;
            }

            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Invalid first name.");
                }

                this.firstName = value;
            }
        }

        public string LastName
        {
            get
            {
                return this.lastName;
            }

            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Invalid last name.");
                }

                this.lastName = value;
            }
        }

        public string OtherInfo
        {
            get
            {
                return this.otherInfo;
            }

            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Student other info cannot be null or an empty string.");
                }

                this.otherInfo = value;
            }
        }

        public bool IsOlderThan(Student otherStudent)
        {
            DateTime firstDate = DateTime.Parse(this.OtherInfo.Substring(this.OtherInfo.Length - 10));
            DateTime secondDate = DateTime.Parse(otherStudent.OtherInfo.Substring(otherStudent.OtherInfo.Length - 10));

            return firstDate > secondDate;
        }
    }
}
