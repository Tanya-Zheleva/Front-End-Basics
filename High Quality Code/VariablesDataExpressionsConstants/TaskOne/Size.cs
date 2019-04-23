namespace TaskOne
{
    using System;

    public class Size
    {
        private double width;
        private double height;

        public Size(double wwidth, double height)
        {
            this.Width = wwidth;
            this.Height = height;
        }

        public double Width
        {
            get
            {
                return this.width;
            }
            set
            {
                if (value <= 0)
                {
                    throw new ArgumentException("Width cannot be zero or negative.");
                }

                this.width = value;
            }
        }
        
        public double Height
        {
            get
            {
                return this.height;
            }

            set
            {
                if (value <= 0)
                {
                    throw new ArgumentException("Height cannot be zero or negative.");
                }

                this.height = value;
            }
        }

        public static Size GetRotatedSize(Size size, double angleOfRotation)
        {
            double rotationCos = Math.Abs(Math.Cos(angleOfRotation));
            double rotationSin = Math.Abs(Math.Sin(angleOfRotation));

            double rotatedWidth = (rotationCos * size.width) + (rotationSin * size.height);
            double rotatedHeight = (rotationSin * size.width) + (rotationCos * size.height);

            Size rotatedSize = new Size(rotatedWidth, rotatedHeight);

            return rotatedSize;
        }
    }
}
