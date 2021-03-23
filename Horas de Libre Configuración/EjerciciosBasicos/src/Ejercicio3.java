import java.util.Scanner;

public class Ejercicio3 {
	
	public static void resolverEcuacionPrimerGrado() {
		System.out.println("Realiza un programa que resuelva una ecuación de primer grado (del tipo ax+ b = 0). Ten en\r\n"
				+ "cuenta que la ecuación puede que no tenga solución");
		Scanner sc = new Scanner(System.in);
		System.out.print("a: ");
		float a = sc.nextFloat();
		System.out.print("b: ");
		float b = sc.nextFloat();
		System.out.print("x: ");
		float x = sc.nextFloat();
		
		float resultado = a*x + b;
		
		System.out.println(resultado);
		sc.close();
	}	
}
