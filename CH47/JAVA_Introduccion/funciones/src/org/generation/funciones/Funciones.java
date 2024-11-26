package org.generation.funciones;

import java.util.ArrayList;
import java.util.List;
/*
 * La diferencia entre una funcion y un método es que le método depende del objeto y la función es independiente
 * 
 * --métodos estáticos--
 * Se definen con la palabra static; puede crearse directamente desde una clase sin necesidad de instanciarse
 * 
 * --métodos de instancia--
 * no se definen con static; necesitan ser invocadas en una instancia de la clase 
 * 
 * --métodos tipo void--
 * Realiza una tarea sin devolver un valor
 * 
 * --métodos abstractos--
 * Deben ser implementados por clases hijas 
 * 
 * --constructores--
 * POO (Programacion Orientada a Objetos)
 * 
 * --métodos con valor de retorno--
 * Utiliza la palabra return para devolver un valor
 * 
 * //Recordatorio: la clase main ejecuta
 * 
 * */

public class Funciones{
	
	static class Productos{
		
		String nombre;
		double precio;
		
		Productos(String nombre, double precio){
			this.nombre = nombre;
			this.precio = precio;
		}
	}
	
	static class carritoCompra {
		List<Productos> Productos = new ArrayList<>();
		
		void agregarProductos (Productos barbie) {
			Productos.add(barbie);	
		}
		
		double calcularTotal() {
			double total = 0;
			for (Productos barbie : Productos) {
			total += barbie.precio;
		}
		return total;
		
	}
	
	double calcularTotalEnvio (double costoEnvio) {
		double total = calcularTotal();
		double costoDeEnvio = calcularTotal();
		return costoDeEnvio;
	}
	
}

	public static void main(String[] args) {
	
	Productos muñeca1 = new Productos("Barbie", 115.70);
	Productos muñeca2 = new Productos("Chelsea", 98.70);
	Productos muñeca3 = new Productos("Kelly", 105.70);
	
	carritoCompra carrito = new carritoCompra();
	carrito.agregarProductos(muñeca1);
	carrito.agregarProductos(muñeca2);
	carrito.agregarProductos(muñeca3);
	
	double totalCarrito = carrito.calcularTotal();
	double envio = 87.65;
	double totalFinal = totalCarrito + envio;
	
	System.out.println("Tu total es de " + totalCarrito);
	System.out.println("Tu total es de " + totalFinal);
	}

}
