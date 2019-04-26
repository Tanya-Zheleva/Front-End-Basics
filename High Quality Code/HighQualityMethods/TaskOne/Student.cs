namespace TaskOne
{
    using System;

    public class Student
    {
        private const string DefaultHobby = "None";

        private string firstName;
        private string lastName;
        private string hometown;

        private string[] hobbies;

        public Student(string firstName, string lastName, string hometown, DateTime birthday, params string[] hobbies)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Hometown = hometown;
            this.Birthday = birthday;
            this.Hobbies = hobbies;
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

        public string Hometown
        {
            get
            {
                return this.hometown;
            }
            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Invalid hometown.");
                }

                this.hometown = value;
            }
        }

        public DateTime Birthday { get; set; }

        public string[] Hobbies
        {
            get
            {
                return this.hobbies;
            }
            set
            {
                if (value.Length == 0)
                {
                    value = new string[] { DefaultHobby };
                }

                this.hobbies = value;
            }
        }

        public bool IsOlderThan(Student other)
        {
            bool isOlder = this.Birthday > other.Birthday;

            return isOlder;
        }
    }
}
