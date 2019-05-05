namespace TaskFour
{
    using System;
    using System.Diagnostics;

    public static class InsertionSorter
    {
        public static void SortIns(int[] array)
        {
            int n = array.Length;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 1; i < n; ++i)
            {
                int key = array[i];
                int j = i - 1;

                while (j >= 0 && array[j] > key)
                {
                    array[j + 1] = array[j];
                    j = j - 1;
                }

                array[j + 1] = key;
            }

            watch.Stop();
            Console.WriteLine($"Insertion sort for int[]: {watch.Elapsed}");
        }

        public static void SortDoubles(double[] array)
        {
            int n = array.Length;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 1; i < n; ++i)
            {
                double key = array[i];
                int j = i - 1;

                while (j >= 0 && array[j] > key)
                {
                    array[j + 1] = array[j];
                    j = j - 1;
                }

                array[j + 1] = key;
            }

            watch.Stop();
            Console.WriteLine($"Insertion sort for double[]: {watch.Elapsed}");
        }

        public static void SortStrings(string[] array)
        {
            int n = array.Length;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 1; i < n; ++i)
            {
                string key = array[i];
                int j = i - 1;

                while (j >= 0 && array[j].CompareTo(key) > 0)
                {
                    array[j + 1] = array[j];
                    j = j - 1;
                }

                array[j + 1] = key;
            }

            watch.Stop();
            Console.WriteLine($"Insertion sort for string[]: {watch.Elapsed}");
        }
    }
}
