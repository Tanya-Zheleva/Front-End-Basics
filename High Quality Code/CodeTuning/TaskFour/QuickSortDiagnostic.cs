namespace TaskFour
{
    using System;
    using System.Diagnostics;
    using System.Linq;

    public class QuickSortDiagnostic : Diagnostic
    {
        public override void SortInts(int count)
        {
            int[] random = this.GetRandomIntArray(count);
            int[] sorted = this.GetRandomIntArray(count).OrderBy(x => x).ToArray();
            int[] reversed = this.GetRandomIntArray(count).OrderByDescending(x => x).ToArray();

            this.Sort(random, "random value");
            this.Sort(sorted, "sorted");
            this.Sort(reversed, "reversed");
        }

        public override void SortDoubles(int count)
        {
            double[] random = this.GetRandomDoubleArray(count);
            double[] sorted = this.GetRandomDoubleArray(count).OrderBy(x => x).ToArray();
            double[] reversed = this.GetRandomDoubleArray(count).OrderByDescending(x => x).ToArray();

            this.Sort(random, "random value");
            this.Sort(sorted, "sorted");
            this.Sort(reversed, "reversed");
        }

        public override void SortStrings(int count)
        {
            string[] random = this.GetRandomStringArray(count);
            string[] sorted = this.GetRandomStringArray(count).OrderBy(x => x).ToArray();
            string[] reversed = this.GetRandomStringArray(count).OrderByDescending(x => x).ToArray();

            this.Sort(random, "random value");
            this.Sort(sorted, "sorted");
            this.Sort(reversed, "reversed");
        }

        private void Sort<T>(T[] array, string sortingType) where T : IComparable<T>
        {
            Stopwatch watch = Stopwatch.StartNew();

            this.SortByRange(array, 0, array.Length - 1);

            watch.Stop();
            Console.WriteLine($"Quick sort for {typeof(T).Name.ToLower()} {sortingType} array: {watch.Elapsed}");
        }

        private void SortByRange<T>(T[] array, int low, int high) where T : IComparable<T>
        {
            if (low < high)
            {
                int partition = this.Partition(array, low, high);

                this.SortByRange(array, low, partition - 1);
                this.SortByRange(array, partition + 1, high);
            }
        }

        private int Partition<T>(T[] arr, int low, int high) where T : IComparable<T>
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
