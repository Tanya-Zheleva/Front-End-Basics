namespace TaskFour
{
    public class Startup
    {
        public static void Main(string[] args)
        {
            int length = 10000;

            IDiagnosable selectionSortDiagnostic = new SelectionSortDiagnostic();
            //selectionSortDiagnostic.SortDoubles(length);

            IDiagnosable quickSortDiagnostic = new QuickSortDiagnostic();
            //quickSortDiagnostic.SortStrings(length);

            IDiagnosable insertionSortDiagnostic = new InsertionSortDiagnostic();
            insertionSortDiagnostic.SortDoubles(length);
        }
    }
}
