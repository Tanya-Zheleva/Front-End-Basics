namespace TaskTwo
{
    using System;
    using System.Diagnostics;

    public static class DoubleDiagnostics
    {
        private const int RepeatTimes = 100000000;

        public static void TestAdd()
        {
            long value = 0;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value += 2;
            }

            watch.Stop();
            Console.WriteLine($"Double add: {watch.Elapsed}");
        }

        public static void TestSubtract()
        {
            long value = 0;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value -= 2;
            }

            watch.Stop();
            Console.WriteLine($"Double subtract: {watch.Elapsed}");
        }

        public static void TestIncrement()
        {
            long value = 0;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value++;
            }

            watch.Stop();
            Console.WriteLine($"Double increment: {watch.Elapsed}");
        }

        public static void TestMultiply()
        {
            long value = 1;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value *= 2;
            }

            watch.Stop();
            Console.WriteLine($"Double multiply: {watch.Elapsed}");
        }

        public static void TestDivide()
        {
            long value = 1;

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
