namespace TaskOne
{
    using System;

    public class Startup
    {
        public static void Main(string[] args)
        {
            var parsed = StringExtensions.ToValidLatinFileName("test t");
            Console.WriteLine(parsed);
        }
    }
}
