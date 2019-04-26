namespace TaskThree
{
    using System;

    public class Startup
    {
        public static void Main(string[] args)
        {
            int size = 100;
            int[] tokens = new int[size];

            int currentValue = 0;
            int expectedValue = 666;

            for (int i = 0; i < 100; i++)
            {
                if (i % 10 == 0)
                {
                    if (tokens[i] == expectedValue)
                    {
                        currentValue = expectedValue;
                    }
                }

                Console.WriteLine(tokens[i]);
            }

            //...

            if (currentValue == expectedValue)
            {
                Console.WriteLine("Value Found");
            }
        }
    }
}
