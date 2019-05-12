namespace TaskTwo
{
    using System;
    using System.Diagnostics;

    public class LongDiagnostic : IDiagnosable
    {
        private const int RepeatTimes = 100000000;

        public void Test()
        {
            this.TestAdd();
            this.TestSubtract();
            this.TestIncrement();
            this.TestMultiply();
            this.TestDivide();
        }

        private void TestAdd()
        {
            long value = 0;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value += 2;
            }

            watch.Stop();
            Console.WriteLine($"Long add: {watch.Elapsed}");
        }

        private void TestSubtract()
        {
            long value = 0;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value -= 2;
            }

            watch.Stop();
            Console.WriteLine($"Long subtract: {watch.Elapsed}");
        }

        private void TestIncrement()
        {
            long value = 0;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value++;
            }

            watch.Stop();
            Console.WriteLine($"Long increment: {watch.Elapsed}");
        }

        private void TestMultiply()
        {
            long value = 1;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value *= 1;
            }

            watch.Stop();
            Console.WriteLine($"Long multiply: {watch.Elapsed}");
        }

        private void TestDivide()
        {
            // Same as 1000000
            long value = 1;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value /= 1;
            }

            watch.Stop();
            Console.WriteLine($"Long divide: {watch.Elapsed}");
        }
    }
}
