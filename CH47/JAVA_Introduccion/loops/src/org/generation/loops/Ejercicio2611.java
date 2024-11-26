package org.generation.loops;

import java.util.Scanner;

public class Ejercicio2611 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Hola, ingresa tu nombre ");
		String nombre = scanner.next();
		System.out.println("¡Hola, bienvenid@, " + nombre + "!");
		
		for (int i = 0; i < nombre.length(); i++) { 
			System.out.println("Letra: " + nombre.charAt(i)); 
		} 
		
		scanner.close();
			
	}

}
