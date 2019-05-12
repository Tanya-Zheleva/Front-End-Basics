namespace TaskTwo
{
    using System;
    using System.Diagnostics;

    public class IntDiagnostic : IDiagnosable
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
            int value = 0;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value += 2;
            }

            watch.Stop();
            Console.WriteLine($"Int add: {watch.Elapsed}");
        }

        private void TestSubtract()
        {
            int value = 0;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value -= 2;
            }

            watch.Stop();
            Console.WriteLine($"Int subtract: {watch.Elapsed}");
        }

        private void TestIncrement()
        {
            int value = 0;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value++;
            }

            watch.Stop();
            Console.WriteLine($"Int increment: {watch.Elapsed}");
        }

        private void TestMultiply()
        {
            int value = 1;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value *= 1;
            }

            watch.Stop();
            Console.WriteLine($"Int multiply: {watch.Elapsed}");
        }

        private void TestDivide()
        {
            // Same as 1000000
            int value = 1;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value /= 1;
            }

            watch.Stop();
            Console.WriteLine($"Int divide: {watch.Elapsed}");
        }
    }
}
