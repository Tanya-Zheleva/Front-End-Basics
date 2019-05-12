namespace TaskTwo
{
    using System;
    using System.Diagnostics;

    public class FloatDiagnostic : IDiagnosable
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
            float value = 0f;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value += 2;
            }

            watch.Stop();
            Console.WriteLine($"Float add: {watch.Elapsed}");
        }

        private void TestSubtract()
        {
            float value = 0f;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value -= 2;
            }

            watch.Stop();
            Console.WriteLine($"Float subtract: {watch.Elapsed}");
        }

        private void TestIncrement()
        {
            float value = 0f;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value++;
            }

            watch.Stop();
            Console.WriteLine($"Float increment: {watch.Elapsed}");
        }

        private void TestMultiply()
        {
            float value = 1f;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value *= 1;
            }

            watch.Stop();
            Console.WriteLine($"Float multiply: {watch.Elapsed}");
        }

        private void TestDivide()
        {
            float value = 1f;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value /= 1;
            }

            watch.Stop();
            Console.WriteLine($"Float divide: {watch.Elapsed}");
        }
    }
}
