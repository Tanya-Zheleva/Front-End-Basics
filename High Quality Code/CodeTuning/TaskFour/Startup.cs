namespace TaskFour
{
    using System;
    using System.Linq;
    using System.Text;

    public class Startup
    {
        public static void Main(string[] args)
        {
            int length = 1000;

            //int[] randomInts = GetRandomIntArray(length);
            //int[] sortedInts = randomInts.OrderBy(x => x).ToArray();
            //int[] reversedInts = randomInts.OrderByDescending(x => x).ToArray();

            //double[] randomDoubles = GetRandomDoubleArray(length);
            //double[] sortedDoubles = randomDoubles.OrderBy(x => x).ToArray();
            //double[] reversedDoubles = randomDoubles.OrderByDescending(x => x).ToArray();

            string[] randomStrings = GetRandomStringArray(length);
            string[] sortedStrings = randomStrings.OrderBy(x => x).ToArray();
            string[] reversedStrings = randomStrings.OrderByDescending(x => x).ToArray();

            //InsertionSorter.SortStrings(randomStrings);
            //InsertionSorter.SortStrings(randomStrings);
            //InsertionSorter.SortStrings(reversedStrings);

            //SelectionSorter.SortStrings(randomStrings);
            //SelectionSorter.SortStrings(sortedStrings);
            //SelectionSorter.SortStrings(reversedStrings);

            Quicksorter.SortStrings(randomStrings);
            Quicksorter.SortStrings(sortedStrings);
            Quicksorter.SortStrings(reversedStrings);
        }

        private static void Print<T>(T[] arr)
        {
            Console.WriteLine(string.Join(" ", arr));
        }

        private static string GenerateString(int size, Random rnd)
        {
            string characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            StringBuilder result = new StringBuilder(size);

            for (int i = 0; i < size; i++)
            {
                result.Append(characters[rnd.Next(characters.Length)]);
            }

            return result.ToString();
        }

        private static string[] GetRandomStringArray(int length)
        {
            string[] array = new string[length];
            int stringSize = 5;
            Random rnd = new Random();

            for (int i = 0; i < length; i++)
            {
                array[i] = GenerateString(stringSize, rnd);
            }

            return array;
        }

        private static int[] GetRandomIntArray(int length)
        {
            int[] array = new int[length];
            Random rnd = new Random();

            for (int i = 0; i < length; i++)
            {
                array[i] = rnd.Next(1, 600);
            }

            return array;
        }

        private static double[] GetRandomDoubleArray(int length)
        {
            double[] array = new double[length];
            Random rnd = new Random();

            for (int i = 0; i < length; i++)
            {
                array[i] = rnd.NextDouble() * 1000;
            }

            return array;
        }
    }
}
