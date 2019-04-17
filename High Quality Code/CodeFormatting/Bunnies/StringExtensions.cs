namespace Bunnies
{
    using System.Text;

    public static class StringExtensions
    {
        public static string SplitByUppercase(this string sequence)
        {
            int margin = 10;
            int stringSize = sequence.Length + margin;
            char whitespace = ' ';

            StringBuilder builder = new StringBuilder(stringSize);

            foreach (var letter in sequence)
            {
                if (char.IsUpper(letter))
                {
                    builder.Append(whitespace);
                }

                builder.Append(letter);
            }

            return builder.ToString().Trim();
        }
    }
}
