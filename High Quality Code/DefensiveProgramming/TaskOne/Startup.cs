namespace TaskOne
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    public class Startup
    {
        public static void Main(string[] args)
        {
            try
            {
                char[] substr = Subsequence("Hello!".ToCharArray(), 2, 3);
                Console.WriteLine(substr);

                int[] subarr = Subsequence(new int[] { -1, 3, 2, 1 }, 0, 2);
                Console.WriteLine(string.Join(" ", subarr));

                int[] allarr = Subsequence(new int[] { -1, 3, 2, 1 }, 0, 4);
                Console.WriteLine(string.Join(" ", allarr));

                int[] emptyarr = Subsequence(new int[] { -1, 3, 2, 1 }, 0, 0);
                Console.WriteLine(string.Join(" ", emptyarr));

                Console.WriteLine(ExtractEnding("I love C#", 2));
                Console.WriteLine(ExtractEnding("Nakov", 4));
                Console.WriteLine(ExtractEnding("beer", 4));
                Console.WriteLine(ExtractEnding("Hi", 100));

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            try
            {
                CheckPrime(23);
                Console.WriteLine("23 is prime.");
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine("23 is not prime");
            }

            try
            {
                CheckPrime(33);
                Console.WriteLine("33 is prime.");
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine("33 is not prime");
            }

            List<Exam> peterExams = new List<Exam>()
            {
                new SimpleMathExam(2),
                new CSharpExam(55),
                new CSharpExam(100),
                new SimpleMathExam(1),
                new CSharpExam(0),
            };

            Student peter = new Student("Peter", "Petrov", peterExams);
            double peterAverageResult = peter.CalcAverageExamResultInPercents();

            Console.WriteLine($"Average results = {peterAverageResult:p0}");
        }

        public static T[] Subsequence<T>(T[] arr, int startIndex, int count)
        {
            if (arr == null)
            {
                throw new ArgumentException("Array must be initialized.");
            }

            if (arr.Length == 0)
            {
                throw new ArgumentException("Array must contain at least one element.");
            }

            if (startIndex < 0 || startIndex >= arr.Length)
            {
                throw new IndexOutOfRangeException("Index is outside the bounds of the array.");
            }

            int endIndex = startIndex + count;

            if (endIndex > arr.Length)
            {
                throw new InvalidOperationException($"Cannot extract {count} elements starting from position {startIndex}");
            }

            List<T> result = new List<T>();

            for (int i = startIndex; i < endIndex; i++)
            {
                result.Add(arr[i]);
            }

            return result.ToArray();
        }

        public static string ExtractEnding(string str, int count)
        {
            if (count > str.Length)
            {
                throw new ArgumentException("Invalid amount of characters to extract.");
            }

            StringBuilder result = new StringBuilder();

            int extractStartPosition = str.Length - count;

            for (int i = extractStartPosition; i < str.Length; i++)
            {
                result.Append(str[i]);
            }

            return result.ToString();
        } 

        public static void CheckPrime(int number)
        {
            for (int divisor = 2; divisor <= Math.Sqrt(number); divisor++)
            {
                if (number % divisor == 0)
                {
                    throw new ArgumentException("The number is not prime.");
                }
            }
        }
    }
}
