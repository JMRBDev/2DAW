import java.util.Scanner;

public class Ejercicio1 {

	public static void pasarPesetasAEuros() {
		System.out.println("Ejercicio 1: Realiza un conversor de euros a pesetas. La cantidad de euros que se quiere convertir debe ser\r\n"
				+ "introducida por teclado.");
		System.out.print("Euros: ");
		Scanner sc = new Scanner(System.in);
		float euros = sc.nextFloat();
		float resultado = (float)(euros * 166.386);
		System.out.println(euros + "€ son " + resultado + "pesetas.");
		sc.close();
	}

}
