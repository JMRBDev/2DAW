import java.util.Scanner;

public class Ejercicio8 {
	
	public static void dibujarTriangulo() {
		System.out.println("Realiza un programa utilizando bucles que en función de un número n muestre un triángulo de\r\n"
				+ "asteriscos por la consola.");
		Scanner sc = new Scanner(System.in);
		System.out.println("¿Cuántos pisos va a tener el triángulo?: ");
		int numeroPisos = sc.nextInt();
		
		for (int i = 1; i <= numeroPisos; i++) {
			System.out.println("*".repeat(i));
		}
		
		sc.close();
	}	
}
