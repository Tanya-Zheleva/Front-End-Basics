namespace TaskFour
{
    using System;
    using System.Text;

    public abstract class Diagnostic : IDiagnosable
    {
        public abstract void SortInts(int count);

        public abstract void SortDoubles(int count);

        public abstract void SortStrings(int count);

        protected int[] GetRandomIntArray(int length)
        {
            int[] array = new int[length];
            Random rnd = new Random();

            for (int i = 0; i < length; i++)
            {
                array[i] = rnd.Next(1, 600);
            }

            return array;
        }

        protected double[] GetRandomDoubleArray(int length)
        {
            double[] array = new double[length];
            Random rnd = new Random();

            for (int i = 0; i < length; i++)
            {
                array[i] = rnd.NextDouble() * 1000;
            }

            return array;
        }

        protected string[] GetRandomStringArray(int length)
        {
            string[] array = new string[length];
            int stringSize = 5;
            Random rnd = new Random();

            for (int i = 0; i < length; i++)
            {
                array[i] = this.GenerateString(stringSize, rnd);
            }

            return array;
        }

        private string GenerateString(int size, Random rnd)
        {
            const string characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            StringBuilder result = new StringBuilder(size);

            for (int i = 0; i < size; i++)
            {
                result.Append(characters[rnd.Next(characters.Length)]);
            }

            return result.ToString();
        }
    }
}
