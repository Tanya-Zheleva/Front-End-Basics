namespace TaskThree
{
    using System;
    using System.Diagnostics;

    public class FloatDiagnostic : IDiagnosable
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
            float value = 2f;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                Math.Sqrt(value);
            }

            watch.Stop();
            Console.WriteLine($"Float sqrt: {watch.Elapsed}");
        }

        private void TestNaturalLog()
        {
            float value = 2f;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                Math.Log(value);
            }

            watch.Stop();
            Console.WriteLine($"Float natural logarithm: {watch.Elapsed}");
        }

        private void TestSinus()
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
