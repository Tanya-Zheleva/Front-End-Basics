namespace TaskFour
{
    using System;
    using System.Collections.Generic;

    public class Startup
    {
        private const int CellCount = 35;
        private const int FieldRows = 5;
        private const int FieldCols = 10;

        private const string TurnCommand = "turn";
        private const string TopCommand = "top";
        private const string RestartCommand = "restart";
        private const string ExitCommand = "exit";

        public static void Main(string[] аргументи)
        {
            string command = string.Empty;
            char[,] field = CreateField();
            char[,] bombs = PlaceBombs();
            int cellCounter = 0;
            bool hitsBomb = false;

            List<Player> players = new List<Player>(6);

            int row = 0;
            int col = 0;
            bool shouldShowMenu = true;
            bool isGameWon = false;

            do
            {
                if (shouldShowMenu)
                {
                    Console.WriteLine("Hajde da igraem na “Mini4KI”. Probvaj si kasmeta da otkriesh poleteta bez mini4ki." +
                    " Komanda 'top' pokazva klasiraneto, 'restart' po4va nova igra, 'exit' izliza i hajde 4ao!");
                    DisplayField(field);
                    shouldShowMenu = false;
                }

                Console.Write("Daj red i kolona : ");
                command = Console.ReadLine().Trim();

                if (command.Length >= 3)
                {
                    if ((int.TryParse(command[0].ToString(), out row)) &&
                        (int.TryParse(command[2].ToString(), out col)) &&
                        (row <= field.GetLength(0)) &&
                        (col <= field.GetLength(1)))
                    {
                        command = TurnCommand;
                    }
                }

                switch (command)
                {
                    case TopCommand:
                        ListTopPlayers(players);
                        break;
                    case RestartCommand:
                        field = CreateField();
                        bombs = PlaceBombs();
                        DisplayField(field);

                        hitsBomb = false;
                        shouldShowMenu = false;
                        break;
                    case ExitCommand:
                        Console.WriteLine("4a0, 4a0, 4a0!");
                        break;
                    case TurnCommand:
                        if (bombs[row, col] != '*')
                        {
                            if (bombs[row, col] == '-')
                            {
                                Move(field, bombs, row, col);
                                cellCounter++;
                            }

                            if (CellCount == cellCounter)
                            {
                                isGameWon = true;
                            }
                            else
                            {
                                DisplayField(field);
                            }
                        }
                        else
                        {
                            hitsBomb = true;
                        }

                        break;
                    default:
                        Console.WriteLine("\nGreshka! nevalidna Komanda\n");
                        break;
                }

                if (hitsBomb)
                {
                    DisplayField(bombs);

                    Console.Write($"\nHrrrrrr! Umria gerojski s {cellCounter} to4ki. Daj si niknejm: ");
                    string nickname = Console.ReadLine();

                    Player player = new Player(nickname, cellCounter);

                    if (players.Count < 5)
                    {
                        players.Add(player);
                    }
                    else
                    {
                        for (int i = 0; i < players.Count; i++)
                        {
                            if (players[i].Points < player.Points)
                            {
                                players.Insert(i, player);
                                players.RemoveAt(players.Count - 1);

                                break;
                            }
                        }
                    }

                    players.Sort((Player first, Player second) => second.Name.CompareTo(first.Name));
                    players.Sort((Player first, Player second) => second.Points.CompareTo(first.Points));

                    ListTopPlayers(players);

                    field = CreateField();
                    bombs = PlaceBombs();
                    cellCounter = 0;
                    hitsBomb = false;
                    shouldShowMenu = true;
                }

                if (isGameWon)
                {
                    Console.WriteLine("\nBRAVOOOS! Otvri 35 kletki bez kapka kryv.");
                    DisplayField(bombs);
                    Console.WriteLine("Daj si imeto, batka: ");

                    string name = Console.ReadLine();
                    Player player = new Player(name, cellCounter);

                    players.Add(player);
                    ListTopPlayers(players);

                    field = CreateField();
                    bombs = PlaceBombs();
                    cellCounter = 0;
                    isGameWon = false;
                    shouldShowMenu = true;
                }
            }
            while (command != ExitCommand);

            Console.WriteLine("Made in Bulgaria - Uauahahahahaha!");
            Console.WriteLine("AREEEEEEeeeeeee.");
            Console.Read();
        }

        private static void ListTopPlayers(List<Player> players)
        {
            Console.WriteLine("\nTo4KI:");

            if (players.Count > 0)
            {
                for (int i = 0; i < players.Count; i++)
                {
                    Console.WriteLine($"{i + 1}. {players[i].Name} --> {players[i].Points} kutii");
                }

                Console.WriteLine();
            }
            else
            {
                Console.WriteLine("prazna klasaciq!\n");
            }
        }

        private static void Move(char[,] field, char[,] bombs, int row, int col)
        {
            char bombsCount = GetCellSurroundingBombsCount(bombs, row, col);
            bombs[row, col] = bombsCount;
            field[row, col] = bombsCount;
        }

        private static void DisplayField(char[,] field)
        {
            Console.WriteLine("\n    0 1 2 3 4 5 6 7 8 9");
            Console.WriteLine("   ---------------------");

            for (int i = 0; i < FieldRows; i++)
            {
                Console.Write($"{i} | ");

                for (int j = 0; j < FieldCols; j++)
                {
                    Console.Write(string.Format($"{field[i, j]} "));
                }

                Console.Write("|");
                Console.WriteLine();
            }

            Console.WriteLine("   ---------------------\n");
        }

        private static char[,] CreateField()
        {
            char[,] field = new char[FieldRows, FieldCols];

            for (int i = 0; i < FieldRows; i++)
            {
                for (int j = 0; j < FieldCols; j++)
                {
                    field[i, j] = '?';
                }
            }

            return field;
        }

        private static char[,] PlaceBombs()
        {
            char[,] field = new char[FieldRows, FieldCols];

            for (int i = 0; i < FieldRows; i++)
            {
                for (int j = 0; j < FieldCols; j++)
                {
                    field[i, j] = '-';
                }
            }

            List<int> bombs = new List<int>();
            int maxRandomIndex = 50;
            int bombsCount = 15;

            while (bombs.Count < bombsCount)
            {
                Random rangomGenerator = new Random();
                int bomb = rangomGenerator.Next(maxRandomIndex);

                if (!bombs.Contains(bomb))
                {
                    bombs.Add(bomb);
                }
            }

            foreach (int bombIndex in bombs)
            {
                int currentCol = (bombIndex / FieldCols);
                int currentRow = (bombIndex % FieldCols);

                if (currentRow == 0 && bombIndex != 0)
                {
                    currentCol--;
                    currentRow = FieldCols;
                }
                else
                {
                    currentRow++;
                }

                field[currentCol, currentRow - 1] = '*';
            }

            return field;
        }

        private static void CalculateSurroundingBombs(char[,] field)
        {
            for (int i = 0; i < FieldRows; i++)
            {
                for (int j = 0; j < FieldCols; j++)
                {
                    if (field[i, j] != '*')
                    {
                        char surroundingBombs = GetCellSurroundingBombsCount(field, i, j);
                        field[i, j] = surroundingBombs;
                    }
                }
            }
        }

        private static char GetCellSurroundingBombsCount(char[,] field, int currentRow, int currentCol)
        {
            int surroundingBombs = 0;

            if (currentRow - 1 >= 0)
            {
                if (field[currentRow - 1, currentCol] == '*')
                {
                    surroundingBombs++;
                }
            }

            if (currentRow + 1 < FieldRows)
            {
                if (field[currentRow + 1, currentCol] == '*')
                {
                    surroundingBombs++;
                }
            }

            if (currentCol - 1 >= 0)
            {
                if (field[currentRow, currentCol - 1] == '*')
                {
                    surroundingBombs++;
                }
            }

            if (currentCol + 1 < FieldCols)
            {
                if (field[currentRow, currentCol + 1] == '*')
                {
                    surroundingBombs++;
                }
            }

            if ((currentRow - 1 >= 0) && (currentCol - 1 >= 0))
            {
                if (field[currentRow - 1, currentCol - 1] == '*')
                {
                    surroundingBombs++;
                }
            }

            if ((currentRow - 1 >= 0) && (currentCol + 1 < FieldCols))
            {
                if (field[currentRow - 1, currentCol + 1] == '*')
                {
                    surroundingBombs++;
                }
            }

            if ((currentRow + 1 < FieldRows) && (currentCol - 1 >= 0))
            {
                if (field[currentRow + 1, currentCol - 1] == '*')
                {
                    surroundingBombs++;
                }
            }

            if ((currentRow + 1 < FieldRows) && (currentCol + 1 < FieldCols))
            {
                if (field[currentRow + 1, currentCol + 1] == '*')
                {
                    surroundingBombs++;
                }
            }

            return char.Parse(surroundingBombs.ToString());
        }
    }
}
