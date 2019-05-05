namespace TaskThree
{
    using System;
    using System.Diagnostics;

    public static class DoubleDiagnostics
    {
        private const int RepeatTimes = 100000000;

        public static void TestSqrt()
        {
            double value = 2;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                Math.Sqrt(value);
            }

            watch.Stop();
            Console.WriteLine($"Double sqrt: {watch.Elapsed}");
        }

        public static void TestNaturalLog()
        {
            double value = 2;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                Math.Log(value);
            }

            watch.Stop();
            Console.WriteLine($"Double natural logarithm: {watch.Elapsed}");
        }

        public static void TestSinus()
        {
            double value = 3.14 / 4;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                Math.Sin(value);
            }

            watch.Stop();
            Console.WriteLine($"Double sinus: {watch.Elapsed}");
        }
    }
}
