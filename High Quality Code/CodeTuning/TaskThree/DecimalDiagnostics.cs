namespace TaskThree
{
    using System;
    using System.Diagnostics;

    public static class DecimalDiagnostics
    {
        private const int RepeatTimes = 100000000;

        public static void TestSqrt()
        {
            decimal value = 2m;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                Math.Sqrt(value);
            }

            watch.Stop();
            Console.WriteLine($"Decimal sqrt: {watch.Elapsed}");
        }

        public static void TestNaturalLog()
        {
            decimal value = 2m;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                Math.Log(value);
            }

            watch.Stop();
            Console.WriteLine($"Decimal natural logarithm: {watch.Elapsed}");
        }

        public static void TestSinus()
        {
            decimal value = 3.14m / 4;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                Math.Sin(value);
            }

            watch.Stop();
            Console.WriteLine($"Decimal sinus: {watch.Elapsed}");
        }
    }
}
