namespace TaskTwo
{
    public class Factory
    {
        private enum Gender
        {
            Male,
            Female
        };

        private class Human
        {
            public Gender Gender { get; set; }

            public string Name { get; set; }

            public int Age { get; set; }
        }

        public void CreateHuman(int age)
        {
            Human human = new Human
            {
                Age = age
            };

            if (age % 2 == 0)
            {
                human.Name = "Батката";
                human.Gender = Gender.Male;
            }
            else
            {
                human.Name = "Мацето";
                human.Gender = Gender.Female;
            }
        }
    }
}
