namespace TaskThree
{
    using System;
    using System.Diagnostics;

    public class DoubleDiagnostic : IDiagnosable
    {
        private const int RepeatTimes = 100000000;

        public void Test()
        {
            this.TestSqrt();
            this.TestNaturalLog();
            this.TestSinus();
        }

        private void TestSqrt()
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

        private void TestNaturalLog()
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

        private void TestSinus()
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
