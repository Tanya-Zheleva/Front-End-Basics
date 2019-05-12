namespace TaskFour
{
    using System;
    using System.Diagnostics;
    using System.Linq;

    public class InsertionSortDiagnostic : Diagnostic
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
            int n = array.Length;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 1; i < n; ++i)
            {
                T key = array[i];
                int j = i - 1;

                while (j >= 0 && array[j].CompareTo(key) > 0)
                {
                    array[j + 1] = array[j];
                    j = j - 1;
                }

                array[j + 1] = key;
            }

            watch.Stop();
            Console.WriteLine($"Insertion sort for {typeof(T).Name.ToLower()} {sortingType} array: {watch.Elapsed}");
        }
    }
}
