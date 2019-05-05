namespace TaskThree
{
    using System;
    using System.Diagnostics;

    public static class FloatDiagnostics
    {
        private const int RepeatTimes = 100000000;

        public static void TestSqrt()
        {
            float value = 2;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                Math.Sqrt(value);
            }

            watch.Stop();
            Console.WriteLine($"Float sqrt: {watch.Elapsed}");
        }

        public static void TestNaturalLog()
        {
            float value = 2;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                Math.Log(value);
            }

            watch.Stop();
            Console.WriteLine($"Float natural logarithm: {watch.Elapsed}");
        }

        public static void TestSinus()
        {
            float value = 3.14f / 4;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                Math.Sin(value);
            }

            watch.Stop();
            Console.WriteLine($"Float sinus: {watch.Elapsed}");
        }
    }
}
