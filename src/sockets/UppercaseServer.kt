import java.io.PrintWriter
import java.net.ServerSocket
import java.util.*

const val PORT = 9000

fun main(args: Array<String>) {
    val serverSocket = ServerSocket(PORT) // Escuchamos en el puerto 9000

    serverSocket.use {

        println("Escuchando en el puerto: $PORT")

        while (true) {
            val client = serverSocket.accept()

            client.use {
                val entrada = Scanner(client.getInputStream())
                val salida = PrintWriter(client.getOutputStream(), true)

                println("Información del cliente: $it")

                while (entrada.hasNextLine()) {
                    // Leemos el mensaje del cliente
                    val mensajeCliente = entrada.nextLine()

                    // Convertimos a mayúsculas el mensaje
                    val respuesta = mensajeCliente.uppercase()

                    println("Enviando la respuesta: $respuesta")

                    // Enviamos la respuesta al cliente
                    salida.println(respuesta)
                }

            }
        }

    }
}