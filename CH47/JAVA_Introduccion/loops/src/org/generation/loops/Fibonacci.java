package org.generation.loops;

import java.util.Scanner;

public class Fibonacci {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("Por favor, ingresa un número para calcular Fibonacci(n): ");
		
		int n = scanner.nextInt();

		int a = 0, b = 1, fib = 0, i = 1;
		do {
		    if (i == 1) {
		        fib = a;
		    } else if (i == 2) {
		    	fib = b;
		    } else {
		        fib = a + b;
		        a = b;
		        b = fib;
		    }
		        i++;
		    } while (i <= n);

		System.out.println("Fibonacci(" + n + ") = " + fib);

	    scanner.close();

	}

}
