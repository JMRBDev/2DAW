import java.util.Scanner;

public class Ejercicio8 {
	
	public static void dibujarTriangulo() {
		System.out.println("Realiza un programa utilizando bucles que en funci�n de un n�mero n muestre un tri�ngulo de\r\n"
				+ "asteriscos por la consola.");
		Scanner sc = new Scanner(System.in);
		System.out.println("�Cu�ntos pisos va a tener el tri�ngulo?: ");
		int numeroPisos = sc.nextInt();
		
		for (int i = 1; i <= numeroPisos; i++) {
			System.out.println("*".repeat(i));
		}
		
		sc.close();
	}	
}
