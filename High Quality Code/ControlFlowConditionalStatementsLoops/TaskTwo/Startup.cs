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

            bool inRangeX = MIN_X <= x && x <= MAX_X;
            bool inRangeY = MIN_Y <= y && y <= MAX_Y; 

            if (shouldVisitCell && (inRangeX && inRangeY))
            {
                VisitCell();
            }
        }
    }
}
