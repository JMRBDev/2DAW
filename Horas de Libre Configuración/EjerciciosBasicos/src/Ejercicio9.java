import java.util.Scanner;
import java.util.*;

public class Ejercicio9 {
	
	public static void numerosAmigos() {
		System.out.println("Realiza un programa que determine si dos números dados son amigos. Dos números son amigos\r\n"
				+ "si la suma de los divisores del primero es igual al segundo y viceversa.\r\n"
				+ "Un ejemplo es el par de números 220 y 284, ya que:\r\n"
				+ "• los divisores de 220 son 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 y 110, que suman 284;\r\n"
				+ "• los divisores propios de 284 son 1, 2, 4, 71 y 142, que suman 220.");
		Scanner sc = new Scanner(System.in);
		System.out.println("Introduce el primer número: ");
		int num1 = sc.nextInt();
		System.out.println("Introduce el segundo número: ");
		int num2 = sc.nextInt();
		
		List<Integer> divisoresNum1 = conseguirDivisores(num1);
		List<Integer> divisoresNum2 = conseguirDivisores(num2);
		
		int divisoresNum1Sumados = sumarDivisores(divisoresNum1);
		int divisoresNum2Sumados = sumarDivisores(divisoresNum2);
		
		if (divisoresNum1Sumados == num2 && divisoresNum2Sumados == num1) {
			System.out.println((num1) + " y " + (num2) + " son numeros amigos");
		} else {
			System.out.println((num1) + " y " + (num2) + " no son numeros amigos");
		}
				
		sc.close();
	}	
	
	public static List<Integer> conseguirDivisores(int num) {
		List<Integer> divisores = new ArrayList<Integer>();
		
		for (int i = 1; i < num; i++) {
			if (num % i == 0) {
				divisores.add(i);
			}
		}
		
		return divisores;
	}
	
	public static int sumarDivisores(List<Integer> divisores) {
		int resultado = 0;
		
		for (int i = 0; i < divisores.size(); i++) {
			resultado += divisores.get(i);
		}
		
		return resultado;
	}
}
