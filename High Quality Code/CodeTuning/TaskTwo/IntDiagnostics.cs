﻿namespace TaskTwo
{
    using System;
    using System.Diagnostics;

    public static class IntDiagnostics
    {
        private const int RepeatTimes = 100000000;

        public static void TestAdd()
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

        public static void TestSubtract()
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

        public static void TestIncrement()
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

        public static void TestMultiply()
        {
            int value = 1;

            Stopwatch watch = Stopwatch.StartNew();

            for (int i = 0; i < RepeatTimes; i++)
            {
                value *= 2;
            }

            watch.Stop();
            Console.WriteLine($"Int multiply: {watch.Elapsed}");
        }

        public static void TestDivide()
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
