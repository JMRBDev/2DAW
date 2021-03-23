import java.util.Scanner;

public class Ejercicio10 {
	
	public static void detectarString() {
		System.out.println("Realiza un programa que pida continuamente una cadena y un número al usuario y compruebe,\r\n"
				+ "usando una estructura switch, de qué cadena se trata. Si se trata de la cadena “primo”, debe\r\n"
				+ "mostrar un mensaje indicando si el número es primo. Si se trata de la cadena “divisible”, debe\r\n"
				+ "mostrar un mensaje indicando si el número es divisible entre 3. En otro caso, debe mostrar\r\n"
				+ "mensaje de error y finalizar.");
		Scanner sc = new Scanner(System.in);
		
		while (true) {
			System.out.println("Introduce una cadena: ");
			String cadena = sc.nextLine();
			System.out.println("Introduce un número: ");
			int numero = sc.nextInt();
			
			switch (cadena.toLowerCase()) {
			case "primo":
				if (comprobarSiEsPrimo(numero)) {
					System.out.println("El número " + (numero) + " es primo.");
				} else {
					System.out.println("El número " + (numero) + " no es primo.");
				}
				break;
			case "divisible":
				if (comprobarSiEsDivisible(numero)) {
					System.out.println("El número " + (numero) + " es divisible entre 3.");
				} else {
					System.out.println("El número " + (numero) + " no es divisible entre 3.");
				}
			default:
				System.out.println("Opción inválida.");
				break;
			}
		}
				
	}
	
	public static boolean comprobarSiEsPrimo(int num) {
		boolean esPrimo = false;
		
		for (int i = 2; i < num; i++) {
			if (num % i == 0) {
				esPrimo = false;
			} else {
				esPrimo = true;
			}
		}
		
		return esPrimo;
	}
	
	public static boolean comprobarSiEsDivisible(int num) {
		
		if (num % 3 == 0) {
			return true;
		}
		
		return false;
	}
}
