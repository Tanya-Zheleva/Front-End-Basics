namespace TaskTwo
{
    using System;
    using System.Diagnostics;

    public class DoubleDiagnostic : IDiagnosable
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
            double value = 0;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value += 2;
            }

            watch.Stop();
            Console.WriteLine($"Double add: {watch.Elapsed}");
        }

        private void TestSubtract()
        {
            double value = 0;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value -= 2;
            }

            watch.Stop();
            Console.WriteLine($"Double subtract: {watch.Elapsed}");
        }

        private void TestIncrement()
        {
            double value = 0;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value++;
            }

            watch.Stop();
            Console.WriteLine($"Double increment: {watch.Elapsed}");
        }

        private void TestMultiply()
        {
            double value = 1;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value *= 1;
            }

            watch.Stop();
            Console.WriteLine($"Double multiply: {watch.Elapsed}");
        }

        private void TestDivide()
        {
            double value = 1;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value /= 1;
            }

            watch.Stop();
            Console.WriteLine($"Double divide: {watch.Elapsed}");
        }
    }
}
