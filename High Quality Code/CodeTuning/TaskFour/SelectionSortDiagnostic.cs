namespace TaskFour
{
    using System;
    using System.Diagnostics;
    using System.Linq;

    public class SelectionSortDiagnostic : Diagnostic
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

                T temp = array[minIndex];
                array[minIndex] = array[i];
                array[i] = temp;
            }

            watch.Stop();
            Console.WriteLine($"Selection sort for {typeof(T).Name.ToLower()} {sortingType} array: {watch.Elapsed}");
        }
    }
}
