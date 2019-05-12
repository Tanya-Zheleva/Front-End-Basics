namespace TaskOne.Tests
{
    using Microsoft.VisualStudio.TestTools.UnitTesting;

    [TestClass]
    public class MatrixWalkTests
    {
        private int[,] matrix;
        private Cell cell;
       
        [TestInitialize]
        public void Initialize()
        {
            this.cell = new Cell { Row = 2, Col = 3 };
            this.matrix = new int[5, 5];

            for (int r = 0; r < this.matrix.GetLength(0); r++)
            {
                for (int c = 0; c < this.matrix.GetLength(1); c++)
                {
                    this.matrix[r, c] = 3;
                }
            }
        }

        [TestMethod]
        public void FindEmptyCell_ReturnsCorrectResult()
        {
            int targetRow = 1;
            int targetCol = 3;
            this.matrix[targetRow, targetCol] = 0;

            Cell cell = new Cell();

            MatrixWalk.FindEmptyCell(this.matrix, cell);

            Assert.AreEqual(targetRow, cell.Row);
            Assert.AreEqual(targetCol, cell.Col);
        }

        [TestMethod]
        public void HasEmptyCell_ReturnsTrue_CellFound()
        {
            this.matrix[2, 3] = 0;
            bool hasEmpty = MatrixWalk.HasEmptyCell(this.matrix);

            Assert.IsTrue(hasEmpty);
        }

        [TestMethod]
        public void HasEmptyCell_ReturnsFalse_CellNotFound()
        {
            bool hasEmpty = MatrixWalk.HasEmptyCell(this.matrix);

            Assert.IsFalse(hasEmpty);
        }

        [TestMethod]
        public void HasEmptySurroundingCells_ReturnsTrue_TopEmpty()
        {
            int emptyX = 1;
            int emptyY = 3;
            this.matrix[emptyX, emptyY] = 0;

            bool isTopEmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, this.cell);

            Assert.IsTrue(isTopEmpty);
        }

        [TestMethod]
        public void HasEmptySurroundingCells_ReturnsTrue_RightEmpty()
        {
            int emptyX = 2;
            int emptyY = 4;
            this.matrix[emptyX, emptyY] = 0;

            bool isRightEmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, this.cell);

            Assert.IsTrue(isRightEmpty);
        }

        [TestMethod]
        public void HasEmptySurroundingCells_ReturnsTrue_BottomEmpty()
        {
            int emptyX = 3;
            int emptyY = 3;
            this.matrix[emptyX, emptyY] = 0;

            bool isBottomRmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, this.cell);

            Assert.IsTrue(isBottomRmpty);
        }

        [TestMethod]
        public void HasEmptySurroundingCells_ReturnsTrue_LeftEmpty()
        {
            int emptyX = 2;
            int emptyY = 2;
            this.matrix[emptyX, emptyY] = 0;

            bool isLeftEmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, this.cell);

            Assert.IsTrue(isLeftEmpty);
        }

        [TestMethod]
        public void HasEmptySurroundingCells_ReturnsTrue_TopRightEmpty()
        {
            int emptyX = 1;
            int emptyY = 4;
            this.matrix[emptyX, emptyY] = 0;

            bool isTopRightEmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, this.cell);

            Assert.IsTrue(isTopRightEmpty);
        }

        [TestMethod]
        public void HasEmptySurroundingCells_ReturnsTrue_BottomRightEmpty()
        {
            int emptyX = 3;
            int emptyY = 4;
            this.matrix[emptyX, emptyY] = 0;

            bool isBottomRightEmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, this.cell);

            Assert.IsTrue(isBottomRightEmpty);
        }

        [TestMethod]
        public void HasEmptySurroundingCells_ReturnsTrue_BottomLefttEmpty()
        {
            int emptyX = 3;
            int emptyY = 2;
            this.matrix[emptyX, emptyY] = 0;

            bool isBottomLeftEmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, this.cell);

            Assert.IsTrue(isBottomLeftEmpty);
        }

        [TestMethod]
        public void HasEmptySurroundingCells_ReturnsTrue_TopLefttEmpty()
        {
            int emptyX = 1;
            int emptyY = 2;
            this.matrix[emptyX, emptyY] = 0;

            bool isTopLeftEmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, this.cell);

            Assert.IsTrue(isTopLeftEmpty);
        }

        [TestMethod]
        public void HasEmptySurroundingCells_ReturnsFalse_NoCellFound()
        {
            bool isEmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, this.cell);

            Assert.IsFalse(isEmpty);
        }

        [TestMethod]
        public void ChangeDirection_ChangesDirectionCorrectly()
        {
            int[] directionsX = { 1, 1, 1, 0, -1, -1, -1, 0 };
            int[] directionsY = { 1, 0, -1, -1, -1, 0, 1, 1 };

            Path path = new Path { Dx = 1, Dy = 1 };

            for (int i = 1; i < directionsX.Length; i++)
            {
                MatrixWalk.ChangeDirection(path);

                Assert.AreEqual(directionsX[i], path.Dx);
                Assert.AreEqual(directionsY[i], path.Dy);
            }
        }
    }
}
