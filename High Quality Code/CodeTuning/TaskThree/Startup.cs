namespace TaskThree
{
    public class Startup
    {
        public static void Main(string[] args)
        {
            IDiagnosable doubleDiagnostic = new DoubleDiagnostic();
            //doubleDiagnostic.Test();

            IDiagnosable floatDiagnostic = new FloatDiagnostic();
            floatDiagnostic.Test();
        }
    }
}
