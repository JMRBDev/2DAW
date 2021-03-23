import java.util.Scanner;

public class Ejercicio4 {
	
	public static void aumentarSueldo() {
		System.out.println("De un operario se conoce su sueldo y los a�os de antig�edad (pedir por teclado). Se pide\r\n"
				+ "confeccionar un programa que lea los datos de entrada e informe del sueldo a pagar, teniendo\r\n"
				+ "en cuenta las siguientes condiciones:\r\n"
				+ "� Si el sueldo es inferior a 500 y su antig�edad es igual o superior a 10 a�os, otorgarle un\r\n"
				+ "aumento del 20 %.\r\n"
				+ "� Si el sueldo es inferior a 500 pero su antig�edad es menor a 10 a�os, otorgarle un\r\n"
				+ "aumento de 5 %.\r\n"
				+ "� Si el sueldo es mayor o igual a 500 no se realizar�n cambios.");
		Scanner sc = new Scanner(System.in);
		System.out.print("Sueldo: ");
		float sueldo = sc.nextFloat();
		System.out.print("A�os: ");
		int antiguedad = sc.nextInt();
		
		String resultado = new String();
		
		if (sueldo < 500 && antiguedad >= 10) {
			resultado = "Sueldo a pagar: " + (sueldo + sueldo * 0.2);
		} else if (sueldo < 500 && antiguedad < 10) {
			resultado = "Sueldo a pagar: " + (sueldo + sueldo * 0.05);
		} else if (sueldo >= 500) {
			resultado = "Sueldo a pagar: " + sueldo;
		}
		
		System.out.println(resultado);
		sc.close();
	}	
}
