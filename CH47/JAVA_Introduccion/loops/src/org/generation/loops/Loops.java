package org.generation.loops;

public class Loops {

	public static void main(String[] args) {
		/*Loops: While y Do while*/
		
		/*While*/
		int contador = 1;
		
		while (contador <= 5) {
			System.out.println("Iteracion " + contador);
			contador++;
		}
		
		/*Do while*/
		/*Para prevenir que un loop se vaya a infinito, se debe incluir la igualdad en la condición*/
		/*Con el loop for esta caracteristica no siempre es necesaria*/
		int contadorDoWhile = 1;
		do {
			System.out.println("Iteración Do while " + contadorDoWhile);
			contadorDoWhile++;
		} while (contadorDoWhile <= 5);
		
		/*Diferencia entre while y do while: en do while, la función se ejecuta al menos una vez*/
		
		/*Loop For
		 * Las condiciones en for se basa en 3 partes:
		 * 1. Inicialización: se inicializa el contador
		 * 2. Condición: se utiliza la compración de dos variables: el inicializador y la variable a recorrer, la cantidad o condición que delimite n numero de iteraciones; de preferencia se iguala
		 * 3. Incremento: actualización del contador*/
		
		for (int i = 0; i <= 5; i++) {
			System.out.println("Iteración for: " + i);
		}
		
		/*ForEach en Java
		 * Utiliza la palabra reservada for, similar a cómo se usa un for puro
		 * en lugar de recibir un condicional de tres partes (inicializador; condicion; incremento), va a utilizar ua estructura de parámetros
		 * (TipoDeElemento, elemento(identificadorElemento) : collection(array,ArrayList,set,map)
		 * for es nativo; forEach es preconstruido, pertenece a un objeto*/
		
		String[] names = {"Leo ", "Dani ", "Sebas "};
		
		String misCompaneros = "";
		
		for(String name : names) {
			misCompaneros += name;
		}
		System.out.println(misCompaneros);
	}

}
