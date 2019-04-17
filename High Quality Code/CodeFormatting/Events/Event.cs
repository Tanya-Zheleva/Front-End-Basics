namespace Events
{
    using System;
    using System.Text;

    public class Event : IComparable
    {
        private DateTime date;
        private string title;
        private string location;

        public Event(DateTime date, string title, string location)
        {
            this.date = date;
            this.title = title;
            this.location = location;
        }

        public int CompareTo(object obj)
        {
            Event other = obj as Event;
            int dateComparison = this.date.CompareTo(other.date);
            int titleComparison = this.title.CompareTo(other.title);
            int locationComparison = this.location.CompareTo(other.location);

            if (dateComparison == 0)
            {
                if (titleComparison == 0)
                {
                    return locationComparison;
                }

                return titleComparison;
            }

            return dateComparison;
        }

        public override string ToString()
        {
            StringBuilder result = new StringBuilder();
            string dateFormat = "yyyy-MM-ddTHH:mm:ss";

            result.Append(this.date.ToString(dateFormat));
            result.Append(" | " + this.title);

            if (!string.IsNullOrEmpty(this.location))
            {
                result.Append(" | " + this.location);
            }

            return result.ToString();
        }
    }
}
