import java.util.Scanner;

public class Ejercicio5 {
	
	public static void mostrarTablaMultiplicar() {
		System.out.println("Escribir un programa que muestre la tabla de multiplicar de un número N introducido por teclado.");
		Scanner sc = new Scanner(System.in);
		System.out.print("Tabla a mostrar: ");
		int numero = sc.nextInt();
		
		for (int i = 0; i <= 10; i++) {
			System.out.println(numero + "x" + (i) + " = " + (numero * i));
		}

		sc.close();
	}	
}
