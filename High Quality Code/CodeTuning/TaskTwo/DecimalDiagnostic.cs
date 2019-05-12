namespace TaskTwo
{
    using System;
    using System.Diagnostics;

    public class DecimalDiagnostic : IDiagnosable
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
            decimal value = 0m;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value += 2;
            }

            watch.Stop();
            Console.WriteLine($"Decimal add: {watch.Elapsed}");
        }

        private void TestSubtract()
        {
            decimal value = 0m;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value -= 2;
            }

            watch.Stop();
            Console.WriteLine($"Decimal subtract: {watch.Elapsed}");
        }

        private void TestIncrement()
        {
            decimal value = 0m;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value++;
            }

            watch.Stop();
            Console.WriteLine($"Decimal increment: {watch.Elapsed}");
        }

        private void TestMultiply()
        {
            decimal value = 1m;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value *= 1;
            }

            watch.Stop();
            Console.WriteLine($"Decimal multiply: {watch.Elapsed}");
        }

        private void TestDivide()
        {
            decimal value = 1m;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value /= 1;
            }

            watch.Stop();
            Console.WriteLine($"Decimal divide: {watch.Elapsed}");
        }
    }
}
