import java.io.PrintWriter
import java.net.Socket
import java.util.*

private const val HOST = "localhost"

fun main(args: Array<String>) {
    val clientSocket = Socket(HOST, PORT)

    clientSocket.use {
        // Entrada para permitir escribir mensajes por consola
        val entrada = Scanner(System.`in`)

        // Mensaje respuesta del servidor
        val respuesta = Scanner(clientSocket.getInputStream())

        // Salida para el envío de mensajes hacia el servidor
        val salida = PrintWriter(clientSocket.getOutputStream(), true)

        println("Enviar mensaje al servidor: ")

        while (entrada.hasNextLine()) {
            salida.println(entrada.nextLine())

            println("Respuesta del servidor: ${respuesta.nextLine()}")
        }

    }
}