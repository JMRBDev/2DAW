import java.util.Scanner;
import java.util.*;

public class Ejercicio6 {
	
	public static void analizarValores() {
		System.out.println("Realizar la carga de 10 valores enteros por teclado. Se desea conocer:\r\n"
				+ "• La cantidad de valores ingresados negativos.\r\n"
				+ "• La cantidad de valores ingresados positivos.\r\n"
				+ "• La suma de los números pares.\r\n"
				+ "• Si existe algún múltiplo de 5.");
		Scanner sc = new Scanner(System.in);
		List<Integer> numeros = new ArrayList<Integer>();
		int numerosNegativos = 0;
		int sumaPares = 0;
		boolean existeMultiploCinco = false;
		
		for (int i = 0; i < 10; i++) {
			System.out.println("Introduce el " + (i + 1) + "º número: ");
			int input = sc.nextInt();
			numeros.add(input);
		}
		
		for (int i = 0; i < numeros.size(); i++) {
			int numero = numeros.get(i);
			if (numero < 0) {
				numerosNegativos += 1;
			}
			if (numero % 2 == 0) {
				sumaPares += numero;
			}
			if (numero % 5 == 0) {
				existeMultiploCinco = true;
			}
		}
		
		System.out.println("Hay " + (numerosNegativos) + " numeros negativos y "
		+ (numeros.size() - numerosNegativos) + " numeros positivos. La suma de los pares es "
		+ (sumaPares) + (existeMultiploCinco ? " y existe algún múltiplo de 5." : " y no existen múltiplos de 5."));
		
		sc.close();
	}	
}
