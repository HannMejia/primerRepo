package org.generation.controlDeFlujo;

import java.util.Scanner;

public class ControlDeFlujo {

	public static void main(String[] args) {
		// Comentarios de una sola linea
		/*
		 * Comentarios Multilínea
		 * 
		 */
		/*
		 * Tipos de datos y variables Variable es un espacio de memoria que puede variar
		 * Tipos de datos: int, float, double, short, long, byte string (es una clase y
		 * también sirve como tipo de dato) numeros enteros: int, short, long, byte byte
		 * = 128 a 12 short = 32, 768 al 32767 int = long = char = un solo caracter,
		 * puede ser numero, letra o simbolo numeros decimales: float, double boolean
		 * true-false
		 * 
		 */
		// Cine
		byte numeroSalas = 8;
		short asientosPorSala = 120;
		int entradasVendidas = 75;
		long ingresosTotales = 5000000;
		float precioEntrada = 99.99F;
		double precioCombo = 259.50;
		char asientosLetra = 'B';
		boolean estaAbierto = true;

		String nombreCine = "blockbuster";
		System.out.println("Mi cine se llama " + nombreCine);
		System.out.println(ingresosTotales);

		/*
		 * Operadores aritmeticos + suma - resta * multiplicación / división % residuo
		 * 
		 * Operadores de comparación == compara la igualdad != compara la desigualdad <
		 * menor que > mayor que <= menor o igual que >= mayor o igual que
		 * 
		 * Operadores lógicos && and || or ! not
		 */

		/*
		 * Control de flujo -Dirigir el flujo -Darle sentido y lógica al código -Orden
		 * en que se ejecutan las instrucciones o sentencias en el código -Toma de
		 * decisiones
		 */

		// Instanciar un objeto de tipo scanner (para que el usuario ingrese algun dato)
		Scanner scanner = new Scanner(System.in);

		// Para pedir datos tipo texto (strings)
		System.out.println("Hola, ingresa tu nombre ");
		String nombre = scanner.next(); // el método next encuentra y retorna
		System.out.println("¡Hola, bienvenid@, " + nombre + "!");

		// Para pedir datos numericos (numero entero)
		System.out.println("Ingresa tu edad");
		int edad = scanner.nextInt();
		System.out.print("Tienes " + edad + " años :)");

		// como cerrar scanner
		//scanner.close(); // cerrar scanner es una buena práctica ya que evita errores en el código
							// próximo

		// usando if, else, if else
		// Determinar si el usuario es un bebé, niño, adolescente, adulto, adulto mayor
		// de acuerdo a su edad
		if (edad >= 18) {
			if (edad < 70) {
				System.out.println("Eres un adulto");
			} else {
				System.out.println("Eres un adulto mayor");
			}
		} else if (edad >= 12) {
			System.out.println("Eres un adolescente");
		} else if (edad >= 6) {
			System.out.println("Eres un niño");
		} else {
			System.out.println("Eres un bebé");
		}
		
		//Switch, para comparar entre casos diferentes
		//El usuario ingresa un número del 1 al 7 para saber qué día de la semana es 
		System.out.println("Ingresa un número del 1 a 7");
		byte dia = scanner.nextByte();
		
		switch (dia) {
		case 1:
			System.out.println("Es lunes");
			break;
		case 2:
			System.out.println("Es martes");
			break;
		case 3: 
			System.out.println("Es miércoles");
			break;
		case 4:
			System.out.println("Es jueves");
			break;
		case 5:
			System.out.println("Es viernes");
			break;
		case 6:
			System.out.println("Es sábado");
			break;
		case 7:
			System.out.println("Es domingo");
			break;
		default:
			System.out.println("Dato inválido");
			break;
		}
		
		//Operador Ternario, es necesario especificar 
		//Símbolo ? para operadores ternarios
		System.out.println("Ingresa la hora en formato de 24 horas");
		int hora = scanner.nextInt();
		String operadorTernario = (hora < 17) ? "Es de día" : "Es de noche";
		System.out.println(operadorTernario);
	}

}
