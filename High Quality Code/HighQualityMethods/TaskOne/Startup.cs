namespace TaskOne
{
    using System;

    public class Startup
    {
        public static void Main(string[] args)
        {
            Console.WriteLine(CalcTriangleArea(3, 4, 5));
            Console.WriteLine(NumberToDigit(5));
            Console.WriteLine(FindMax(5, -1, 3, 2, 14, 2, 3));

            PrintAsNumber(1.3, "f");
            PrintAsNumber(0.75, "%");
            PrintAsNumber(2.30, "r");

            Point pointOne = new Point(3, -1);
            Point pointTwo = new Point(3, 2.5);

            Console.WriteLine(CalcDistance(pointOne, pointTwo));

            bool horizontal = pointOne.Y == pointTwo.Y;
            bool vertical = pointOne.X == pointTwo.X;

            Console.WriteLine($"Horizontal? {horizontal}");
            Console.WriteLine($"Vertical? {vertical}");

            Student peter = new Student("Peter", "Ivanov", "Sofia", new DateTime(1992, 3, 17));
            Student stella = new Student("Stella", "Markova", "Vidin", new DateTime(1993, 11, 3), "gamer", "high results");

            Console.WriteLine($"{peter.FirstName} older than {stella.FirstName} -> {peter.IsOlderThan(stella)}");
        }

        private static double CalcTriangleArea(double a, double b, double c)
        {
            if (a <= 0 || b <= 0 || c <= 0)
            {
                throw new ArgumentException("Sides should be positive.");
            }

            if (a + b <= c || a + c <= b || b + c <= a)
            {
                throw new InvalidOperationException("Sides do not from a triangle.");
            }

            double s = (a + b + c) / 2;
            double area = Math.Sqrt(s * (s - a) * (s - b) * (s - c));

            return area;
        }

        static string NumberToDigit(int number)
        {
            if (number < 0 || number > 9)
            {
                throw new ArgumentException("Invalid Number.");
            }

            string numberAsString = string.Empty;

            switch (number)
            {
                case 0:
                    numberAsString = "zero";
                    break;
                case 1:
                    numberAsString = "one";
                    break;
                case 2:
                    numberAsString = "two";
                    break;
                case 3:
                    numberAsString = "three";
                    break;
                case 4:
                    numberAsString = "four";
                    break;
                case 5:
                    numberAsString = "five";
                    break;
                case 6:
                    numberAsString = "six";
                    break;
                case 7:
                    numberAsString = "seven";
                    break;
                case 8:
                    numberAsString = "eight";
                    break;
                case 9:
                    numberAsString = "nine";
                    break;
            }

            return numberAsString;
        }

        private static int FindMax(params int[] elements)
        {
            if (elements == null)
            {
                throw new ArgumentNullException("Elements array must not be null.");
            }

            if (elements.Length == 0)
            {
                throw new ArgumentException("At least one element must be passed");
            }

            int max = int.MinValue;

            for (int i = 0; i < elements.Length; i++)
            {
                if (elements[i] > max)
                {
                    max = elements[i];
                }
            }

            return max;
        }

        private static void PrintAsNumber(double number, string format)
        {
            if (format != "f" && format != "%" && format != "r")
            {
                throw new ArgumentException("Invalid format.");
            }

            if (format == "f")
            {
                Console.WriteLine("{0:f2}", number);
            }

            if (format == "%")
            {
                Console.WriteLine("{0:p0}", number);
            }

            if (format == "r")
            {
                Console.WriteLine("{0,8}", number);
            }
        }

        private static double CalcDistance(Point pointOne, Point pointTwo)
        {
            double dx = (pointTwo.X - pointOne.X) * (pointTwo.X - pointOne.X);
            double dy = (pointTwo.Y - pointOne.Y) * (pointTwo.Y - pointOne.Y);

            double distance = Math.Sqrt(dx + dy);

            return distance;
        }
    }
}
