namespace TaskFour
{
    using System;
    using System.Diagnostics;

    public static class Quicksorter
    {
        public static void SortIns(int[] array, int low, int high)
        {
            Stopwatch watch = Stopwatch.StartNew();

            Sort(array, 0, array.Length - 1);

            watch.Stop();           
            Console.WriteLine($"Quick sort for int[]: {watch.Elapsed}");
        }

        public static void SortDoubles(double[] array)
        {
            Stopwatch watch = Stopwatch.StartNew();

            Sort(array, 0, array.Length - 1);

            watch.Stop();
            Console.WriteLine($"Quick sort for double[]: {watch.Elapsed}");
        }

        public static void SortStrings(string[] array)
        {
            Stopwatch watch = Stopwatch.StartNew();

            Sort(array, 0, array.Length - 1);

            watch.Stop();
            Console.WriteLine($"Quick sort for string[]: {watch.Elapsed}");
        }

        private static void Sort<T>(T[] array, int low, int high) where T : IComparable<T>
        {
            if (low < high)
            {
                int partition = Partition(array, low, high);

                Sort(array, low, partition - 1);
                Sort(array, partition + 1, high);
            }
        }

        private static int Partition<T>(T[] arr, int low, int high) where T : IComparable<T>
        {
            T pivot = arr[high];
            int i = low - 1;

            for (int j = low; j < high; j++)
            {
                if (arr[j].CompareTo(pivot) < 0)
                {
                    i++;

                    T temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }

            T temp1 = arr[i + 1];
            arr[i + 1] = arr[high];
            arr[high] = temp1;

            return i + 1;
        }
    }
}
