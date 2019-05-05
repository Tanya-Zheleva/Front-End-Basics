namespace TaskFour
{
    using System;
    using System.Diagnostics;

    public static class SelectionSorter
    {
        public static void SortIns(int[] array)
        {
            int n = array.Length;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < n - 1; i++)
            {
                int minIndex = i;

                for (int j = i + 1; j < n; j++)
                {
                    if (array[j] < array[minIndex])
                    {
                        minIndex = j;
                    }
                }

                int temp = array[minIndex];
                array[minIndex] = array[i];
                array[i] = temp;
            }

            watch.Stop();
            Console.WriteLine($"Selection sort for int[]: {watch.Elapsed}");
        }

        public static void SortDoubles(double[] array)
        {
            int n = array.Length;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < n - 1; i++)
            {
                int minIndex = i;

                for (int j = i + 1; j < n; j++)
                {
                    if (array[j] < array[minIndex])
                    {
                        minIndex = j;
                    }
                }

                double temp = array[minIndex];
                array[minIndex] = array[i];
                array[i] = temp;
            }

            watch.Stop();
            Console.WriteLine($"Selection sort for double[]: {watch.Elapsed}");
        }

        public static void SortStrings(string[] array)
        {
            int n = array.Length;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < n - 1; i++)
            {
                int minIndex = i;

                for (int j = i + 1; j < n; j++)
                {
                    if (array[j].CompareTo(array[minIndex]) < 0)
                    {
                        minIndex = j;
                    }
                }

                string temp = array[minIndex];
                array[minIndex] = array[i];
                array[i] = temp;
            }

            watch.Stop();
            Console.WriteLine($"Selection sort for string[]: {watch.Elapsed}");
        }
    }
}
