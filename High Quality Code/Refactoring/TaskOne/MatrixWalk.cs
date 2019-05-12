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
            Cell cell = new Cell();
            Path path = new Path { Dx = 1, Dy = 1 };

            while (HasEmptyCell(matrix))
            {
                matrix[cell.Row, cell.Col] = value;

                if (!HasEmptySurroundingCells(matrix, cell))
                {
                    if (!HasEmptyCell(matrix))
                    {
                        break;
                    }

                    FindEmptyCell(matrix, cell);

                    path.Dx = 1;
                    path.Dy = 1;
                    value++;
                    matrix[cell.Row, cell.Col] = value;
                }

                if (cell.Row + path.Dx >= n || cell.Row + path.Dx < 0 ||
                        cell.Col + path.Dy >= n || cell.Col + path.Dy < 0 || 
                        matrix[cell.Row + path.Dx, cell.Col + path.Dy] != 0)
                {
                    while (cell.Row + path.Dx >= n || cell.Row + path.Dx < 0 ||
                            cell.Col + path.Dy >= n || cell.Col + path.Dy < 0 ||
                            matrix[cell.Row + path.Dx, cell.Col + path.Dy] != 0)
                    {
                        ChangeDirection(path);
                    }
                }

                cell.Row += path.Dx;
                cell.Col += path.Dy;
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

        public static void ChangeDirection(Path path)
        {
            int[] directionsX = { 1, 1, 1, 0, -1, -1, -1, 0 };
            int[] directionsY = { 1, 0, -1, -1, -1, 0, 1, 1 };
            int dicrectionIndex = 0;

            for (int i = 0; i < directionsX.Length; i++)
            {
                if (directionsX[i] == path.Dx && directionsY[i] == path.Dy)
                {
                    dicrectionIndex = i;

                    break;
                }
            }

            if (dicrectionIndex == directionsX.Length - 1)
            {
                path.Dx = directionsX[0];
                path.Dy = directionsY[0];

                return;
            }

            path.Dx = directionsX[dicrectionIndex + 1];
            path.Dy = directionsY[dicrectionIndex + 1];
        }

        public static bool HasEmptySurroundingCells(int[,] matrix, Cell cell)
        {
            int[] directionsX = { 1, 1, 1, 0, -1, -1, -1, 0 };
            int[] directionsY = { 1, 0, -1, -1, -1, 0, 1, 1 };

            for (int i = 0; i < directionsX.Length; i++)
            {
                if (cell.Row + directionsX[i] >= matrix.GetLength(0) || cell.Row + directionsX[i] < 0)
                {
                    directionsX[i] = 0;
                }

                if (cell.Col + directionsY[i] >= matrix.GetLength(1) || cell.Col + directionsY[i] < 0)
                {
                    directionsY[i] = 0;
                }
            }

            for (int i = 0; i < directionsX.Length; i++)
            {
                if (matrix[cell.Row + directionsX[i], cell.Col + directionsY[i]] == 0)
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

        public static void FindEmptyCell(int[,] matrix, Cell cell)
        {
            for (int r = 0; r < matrix.GetLength(0); r++)
            {
                for (int c = 0; c < matrix.GetLength(1); c++)
                {
                    if (matrix[r, c] == 0)
                    {
                        cell.Row = r;
                        cell.Col = c;

                        return;
                    }
                }
            }
        }
    }
}
