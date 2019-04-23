namespace TaskTwo
{
    using System;

    public class Startup
    {
        public static void Main(string[] args)
        {
        }

        public static void PrintStatistics(double[] input, int amountToPrint)
        {
            double maxInputValue = double.MinValue;

            for (int i = 0; i < amountToPrint; i++)
            {
                if (input[i] > maxInputValue)
                {
                    maxInputValue = input[i];
                }
            }

            Console.WriteLine(maxInputValue);

            double minInputValue = double.MaxValue;

            for (int i = 0; i < amountToPrint; i++)
            {
                if (input[i] < minInputValue)
                {
                    minInputValue = input[i];
                }
            }

            Console.WriteLine(maxInputValue);

            double inputArraySum = 0;

            for (int i = 0; i < amountToPrint; i++)
            {
                inputArraySum += input[i];
            }

            Console.WriteLine(inputArraySum / amountToPrint);
        }
    }
}
