import java.util.Scanner;

public class Ejercicio7 {
	
	public static void abrirCajaFuerte() {
		System.out.println("Realiza el control de acceso a una caja fuerte. La combinaci�n ser� un n�mero de 4 cifras. El\r\n"
				+ "programa nos pedir� la combinaci�n para abrirla. Si no acertamos, se nos mostrar� el mensaje\r\n"
				+ "�Lo siento, esa no es la combinaci�n� y si acertamos se nos dir� �La caja fuerte se ha abierto\r\n"
				+ "satisfactoriamente�.\r\n"
				+ "Tendremos cuatro oportunidades para abrir la caja fuerte.");
		Scanner sc = new Scanner(System.in);
		int clave = 1234;
				
		for (int i = 0; i < 4; i++) {
			int input = sc.nextInt();
			
			if (input != clave) {
				System.out.println("Lo siento, esa no es la combinaci�n");
			} else {
				System.out.println("La caja fuerte se ha abierto satisfactoriamente");
			}
			
			if (i == 3) {
				System.out.println("Has gastado todos tus intentos");
				break;
			}
		}
		
		sc.close();
	}	
}
