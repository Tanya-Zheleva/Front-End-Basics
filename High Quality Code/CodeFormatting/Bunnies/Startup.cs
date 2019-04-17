namespace Bunnies
{
    using System.Collections.Generic;
    using System.IO;

    public class Startup
    {
        public static void Main(string[] args)
        {
            List<Bunny> bunnies = new List<Bunny>
            {
                new Bunny("Leonid", 1, FurType.NotFluffy),
                new Bunny("Rasputin", 2, FurType.ALittleFluffy),
                new Bunny("Tiberii", 3, FurType.ALittleFluffy),
                new Bunny("Neron", 1, FurType.ALittleFluffy),
                new Bunny("Klavdii", 3, FurType.Fluffy),
                new Bunny("Vespasian", 3, FurType.Fluffy),
                new Bunny("Domician", 4, FurType.FluffyToTheLimit),
                new Bunny("Tit", 2, FurType.FluffyToTheLimit)
            };

            ConsoleWriter consoleWriter = new ConsoleWriter();

            foreach (var bunny in bunnies)
            {
                bunny.Introduce(consoleWriter);
            }

            string filePath = @"..\..\bunnies.txt";

            using (var writer = new StreamWriter(filePath))
            {
                foreach (var bunny in bunnies)
                {
                    writer.WriteLine(bunny.ToString());
                }
            }
        }
    }
}