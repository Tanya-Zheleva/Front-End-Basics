namespace TaskOne.Tests
{
    using Microsoft.VisualStudio.TestTools.UnitTesting;

    [TestClass]
    public class MatrixWalkTests
    {
        private int[,] matrix;
       
        [TestInitialize]
        public void Initialize()
        {
            matrix = new int[5, 5];

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
            int targetX = 2;
            int targetY = 3;
            this.matrix[targetX, targetY] = 0;

            int x = 0;
            int y = 0;

            int[,] matrix1 = this.matrix;
            MatrixWalk.FindEmptyCell(matrix1, ref x, ref y);

            Assert.AreEqual(targetX, x);
            Assert.AreEqual(targetY, y);
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

            int x = 2;
            int y = 3;
            bool isTopEmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, x, y);

            Assert.IsTrue(isTopEmpty);
        }

        [TestMethod]
        public void HasEmptySurroundingCells_ReturnsTrue_RightEmpty()
        {
            int emptyX = 2;
            int emptyY = 4;
            this.matrix[emptyX, emptyY] = 0;

            int x = 2;
            int y = 3;
            bool isRightEmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, x, y);

            Assert.IsTrue(isRightEmpty);
        }

        [TestMethod]
        public void HasEmptySurroundingCells_ReturnsTrue_BottomEmpty()
        {
            int emptyX = 3;
            int emptyY = 3;
            this.matrix[emptyX, emptyY] = 0;

            int x = 2;
            int y = 3;
            bool isBottomRmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, x, y);

            Assert.IsTrue(isBottomRmpty);
        }

        [TestMethod]
        public void HasEmptySurroundingCells_ReturnsTrue_LeftEmpty()
        {
            int emptyX = 2;
            int emptyY = 2;
            this.matrix[emptyX, emptyY] = 0;

            int x = 2;
            int y = 3;
            bool isLeftEmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, x, y);

            Assert.IsTrue(isLeftEmpty);
        }

        [TestMethod]
        public void HasEmptySurroundingCells_ReturnsTrue_TopRightEmpty()
        {
            int emptyX = 1;
            int emptyY = 4;
            this.matrix[emptyX, emptyY] = 0;

            int x = 2;
            int y = 3;
            bool isTopRightEmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, x, y);

            Assert.IsTrue(isTopRightEmpty);
        }

        [TestMethod]
        public void HasEmptySurroundingCells_ReturnsTrue_BottomRightEmpty()
        {
            int emptyX = 3;
            int emptyY = 4;
            this.matrix[emptyX, emptyY] = 0;

            int x = 2;
            int y = 3;
            bool isBottomRightEmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, x, y);

            Assert.IsTrue(isBottomRightEmpty);
        }

        [TestMethod]
        public void HasEmptySurroundingCells_ReturnsTrue_BottomLefttEmpty()
        {
            int emptyX = 3;
            int emptyY = 2;
            this.matrix[emptyX, emptyY] = 0;

            int x = 2;
            int y = 3;
            bool isBottomLeftEmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, x, y);

            Assert.IsTrue(isBottomLeftEmpty);
        }

        [TestMethod]
        public void HasEmptySurroundingCells_ReturnsTrue_TopLefttEmpty()
        {
            int emptyX = 1;
            int emptyY = 2;
            this.matrix[emptyX, emptyY] = 0;

            int x = 2;
            int y = 3;
            bool isTopLeftEmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, x, y);

            Assert.IsTrue(isTopLeftEmpty);
        }

        [TestMethod]
        public void HasEmptySurroundingCells_ReturnsFalse_NoCellFound()
        {
            int x = 2;
            int y = 3;
            bool isEmpty = MatrixWalk.HasEmptySurroundingCells(this.matrix, x, y);

            Assert.IsFalse(isEmpty);
        }

        [TestMethod]
        public void ChangeDirection_ChangesDirectionCorrectly()
        {
            int[] directionsX = { 1, 1, 1, 0, -1, -1, -1, 0 };
            int[] directionsY = { 1, 0, -1, -1, -1, 0, 1, 1 };

            int dx = 1;
            int dy = 1;

            for (int i = 1; i < directionsX.Length; i++)
            {
                MatrixWalk.ChangeDirection(ref dx, ref dy);

                Assert.AreEqual(directionsX[i], dx);
                Assert.AreEqual(directionsY[i], dy);
            }
        }
    }
}
