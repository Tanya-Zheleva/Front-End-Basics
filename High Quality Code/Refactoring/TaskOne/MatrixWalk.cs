namespace TaskOne
{
    using System;

    public class MatrixWalk
    {
        public static void Main(string[] args)
        {
            //Console.WriteLine( "Enter a positive number " );
            //string input = Console.ReadLine(  );
            //int n = 0;
            //while ( !int.TryParse( input, out n ) || n < 0 || n > 100 )
            //{
            //    Console.WriteLine( "You haven't entered a correct positive number" );
            //    input = Console.ReadLine(  );
            //}

            int n = 6;
            int[,] matrix = new int[n, n];
            int value = 1;
            int row = 0;
            int col = 0;
            int dx = 1;
            int dy = 1;

            while (HasEmptyCell(matrix))
            {
                matrix[row, col] = value;

                if (!HasEmptySurroundingCells(matrix, row, col))
                {
                    if (!HasEmptyCell(matrix))
                    {
                        break;
                    }

                    FindEmptyCell(matrix, ref row, ref col);

                    dx = 1;
                    dy = 1;
                    value++;
                    matrix[row, col] = value;
                }

                if (row + dx >= n || row + dx < 0 || col + dy >= n || col + dy < 0 || matrix[row + dx, col + dy] != 0)
                {
                    while (row + dx >= n || row + dx < 0 || col + dy >= n || col + dy < 0 || matrix[row + dx, col + dy] != 0)
                    {
                        ChangeDirection(ref dx, ref dy);
                    }
                }

                row += dx;
                col += dy;
                value++;
            }

            for (int r = 0; r < matrix.GetLength(0); r++)
            {
                for (int c = 0; c < matrix.GetLength(1); c++)
                {
                    Console.Write($"{matrix[r, c],3}");
                }

                Console.WriteLine();
            }
        }

        public static void ChangeDirection(ref int dx, ref int dy)
        {
            int[] directionsX = { 1, 1, 1, 0, -1, -1, -1, 0 };
            int[] directionsY = { 1, 0, -1, -1, -1, 0, 1, 1 };
            int dicrectionIndex = 0;

            for (int i = 0; i < directionsX.Length; i++)
            {
                if (directionsX[i] == dx && directionsY[i] == dy)
                {
                    dicrectionIndex = i;

                    break;
                }
            }

            if (dicrectionIndex == directionsX.Length - 1)
            {
                dx = directionsX[0];
                dy = directionsY[0];

                return;
            }

            dx = directionsX[dicrectionIndex + 1];
            dy = directionsY[dicrectionIndex + 1];
        }

        public static bool HasEmptySurroundingCells(int[,] matrix, int row, int col)
        {
            int[] directionsX = { 1, 1, 1, 0, -1, -1, -1, 0 };
            int[] directionsY = { 1, 0, -1, -1, -1, 0, 1, 1 };

            for (int i = 0; i < directionsX.Length; i++)
            {
                if (row + directionsX[i] >= matrix.GetLength(0) || row + directionsX[i] < 0)
                {
                    directionsX[i] = 0;
                }

                if (col + directionsY[i] >= matrix.GetLength(1) || col + directionsY[i] < 0)
                {
                    directionsY[i] = 0;
                }
            }

            for (int i = 0; i < directionsX.Length; i++)
            {
                if (matrix[row + directionsX[i], col + directionsY[i]] == 0)
                {
                    return true;
                }
            }

            return false;
        }

        public static bool HasEmptyCell(int[,] matrix)
        {
            for (int r = 0; r < matrix.GetLength(0); r++)
            {
                for (int c = 0; c < matrix.GetLength(1); c++)
                {
                    if (matrix[r, c] == 0)
                    {
                        return true;
                    }
                }
            }

            return false;
        }

        public static void FindEmptyCell(int[,] matrix, ref int row, ref int col)
        {
            for (int r = 0; r < matrix.GetLength(0); r++)
            {
                for (int c = 0; c < matrix.GetLength(1); c++)
                {
                    if (matrix[r, c] == 0)
                    {
                        row = r;
                        col = c;

                        return;
                    }
                }
            }
        }
    }
}
