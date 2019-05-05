namespace TaskTwo
{
    using System;
    using System.Diagnostics;

    public static class IntDiagnostics
    {
        private const int RepeatTimes = 1000000000;

        public static void TestAdd()
        {
            int testInt = 0;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                testInt += 2;
            }

            watch.Stop();
            Console.WriteLine($"Int add: {watch.Elapsed}");
        }

        public static void TestSubtract()
        {
            int testInt = 0;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                testInt -= 2;
            }

            watch.Stop();
            Console.WriteLine($"Int subtract: {watch.Elapsed}");
        }

        public static void TestIncrement()
        {
            int testInt = 0;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                testInt++;
            }

            watch.Stop();
            Console.WriteLine($"Int increment: {watch.Elapsed}");
        }

        public static void TestMultiply()
        {
            int testInt = 0;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                testInt *= 2;
            }

            watch.Stop();
            Console.WriteLine($"Int multiply: {watch.Elapsed}");
        }

        public static void TestDivide()
        {
            // Same as 1000000
            int testInt = 1;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                testInt /= 2;
            }

            watch.Stop();
            Console.WriteLine($"Int divide: {watch.Elapsed}");
        }
    }
}
