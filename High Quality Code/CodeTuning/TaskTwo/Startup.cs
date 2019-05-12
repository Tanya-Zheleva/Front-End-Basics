namespace TaskTwo
{
    public class Startup
    {
        public static void Main(string[] args)
        {
            IDiagnosable decimalDiagnostics= new DecimalDiagnostic();
            //decimalDiagnostic.Test();

            IDiagnosable intDiagnostic = new IntDiagnostic();
            //intDiagnostic.Test();

            IDiagnosable doubleDiagnostic = new DoubleDiagnostic();
            //doubleDiagnostic.Test

            IDiagnosable longDiagnostic = new LongDiagnostic();
            //longDiagnostic.Test();

            IDiagnosable floatDiagnostic = new FloatDiagnostic();
            floatDiagnostic.Test();
        }
    }
}
