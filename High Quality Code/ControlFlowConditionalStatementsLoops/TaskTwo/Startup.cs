namespace TaskTwo
{
    public class Startup
    {
        public static void Main(string[] args)
        {
            Potato potato;
            //... 

            if (potato != null)
            {
                if (potato.HasBeenPeeled && potato.IsGood)
                {
                    Cook(potato);
                }
            }

            //...

            bool isInRangeX = MIN_X <= x && x <= MAX_X;
            bool isInRangeY = MIN_Y <= y && y <= MAX_Y; 

            if (shouldVisitCell && (isInRangeX && isInRangeY))
            {
                VisitCell();
            }
        }
    }
}
