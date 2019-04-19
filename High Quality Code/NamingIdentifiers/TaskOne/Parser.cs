namespace TaskOne
{
    using System;

    public class Parser
    {
        private const int MaxCount = 6;

        public static void CreateInstance()
        {
            BoolParser instance = new BoolParser();

            instance.Parse(true);
        }

        public class BoolParser
        {
            public void Parse(bool toBeParsed)
            {
                string result = toBeParsed.ToString();

                Console.WriteLine(result);
            }
        }
    }
}
