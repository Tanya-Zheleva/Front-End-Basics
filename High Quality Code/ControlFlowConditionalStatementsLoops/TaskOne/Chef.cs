namespace TaskOne
{
    public class Chef
    {
        public void Cook()
        {
            Potato potato = this.GetPotato();

            this.Peel(potato);
            this.Cut(potato);

            Carrot carrot = this.GetCarrot();

            this.Cut(carrot);
            this.Peel(carrot);

            Bowl bowl = this.GetBowl();

            bowl.Add(carrot);
            bowl.Add(potato);
        }

        private Potato GetPotato()
        {
            return new Potato();
        }

        private Carrot GetCarrot()
        {
            return new Carrot();
        }

        private Bowl GetBowl()
        {
            return new Bowl();
        }

        private void Cut(Vegetable vegetable)
        {
            //...
        }
      
        private void Peel(Vegetable vegetable)
        {
            //...
        }
    }
}
