import java.util.Scanner;

public class Ejercicio2 {
	
	public static void saludarSegunLaHora() {
		System.out.println("Ejercicio 2: Realiza un programa que pida una hora por teclado y que muestre luego buenos d�as, buenas\r\n"
				+ "tardes o buenas noches seg�n la hora. Se utilizar�n los tramos de 6 a 12, de 13 a 20 y de 21 a 5.\r\n"
				+ "respectivamente. S�lo se tienen en cuenta las horas, los minutos no se deben introducir por\r\n"
				+ "teclado.");
		System.out.print("�Qu� hora es?: ");
		Scanner sc = new Scanner(System.in);
		int hora = sc.nextInt();
		String saludo = new String();
		
		if (hora >= 6 && hora < 12) {
			saludo = "Buenos d�as";
		} else if (hora >= 13 && hora < 20) {
			saludo = "Buenas tardes";
		} else if (hora >= 21 && hora < 5) {
			saludo = "Buenas noches";
		}
		
		System.out.println(saludo);
		sc.close();
	}
	
}
