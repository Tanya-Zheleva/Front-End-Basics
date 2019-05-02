namespace TaskOne
{
    using System;

    public class Startup
    {
        public static void Main(string[] args)
        {
            Console.WriteLine(CalcTriangleArea(3, 4, 5));
            Console.WriteLine(DigitToString(5));
            Console.WriteLine(FindMax(5, -1, 3, 2, 14, 2, 3));

            PrintNumberByFormat(1.3, "f");
            PrintNumberByFormat(0.75, "%");
            PrintNumberByFormat(2.30, "r");

            Point pointOne = new Point(3, -1);
            Point pointTwo = new Point(3, 2.5);

            Console.WriteLine(CalcDistance(pointOne, pointTwo));

            bool horizontal = pointOne.Y == pointTwo.Y;
            bool vertical = pointOne.X == pointTwo.X;

            Console.WriteLine($"Horizontal? {horizontal}");
            Console.WriteLine($"Vertical? {vertical}");

            Student peter = new Student("Peter", "Ivanov");
            peter.OtherInfo = "From Sofia, born at 17.03.1992";

            Student stella = new Student("Stella", "Markova");
            stella.OtherInfo = "From Vidin, gamer, high results, born at 03.11.1993";

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

        private static string DigitToString(int digit)
        {
            if (digit < 0 || digit > 9)
            {
                throw new ArgumentException("Invalid Number.");
            }

            string digitAsString = string.Empty;

            switch (digit)
            {
                case 0:
                    digitAsString = "zero";
                    break;
                case 1:
                    digitAsString = "one";
                    break;
                case 2:
                    digitAsString = "two";
                    break;
                case 3:
                    digitAsString = "three";
                    break;
                case 4:
                    digitAsString = "four";
                    break;
                case 5:
                    digitAsString = "five";
                    break;
                case 6:
                    digitAsString = "six";
                    break;
                case 7:
                    digitAsString = "seven";
                    break;
                case 8:
                    digitAsString = "eight";
                    break;
                case 9:
                    digitAsString = "nine";
                    break;
            }

            return digitAsString;
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

        private static void PrintNumberByFormat(double number, string format)
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
