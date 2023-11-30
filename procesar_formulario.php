<?php
// Verificar si se han recibido datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Conectar a la base de datos (reemplaza los valores con tus propias credenciales)
    $servername = "localhost";
    $username = "c1412363_fresiad";
    $password = "ZUbiba50zi";
    $dbname = "c1412363_fresiad";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Preparar la consulta SQL para insertar los datos en la tabla de clientes
    $sql = "INSERT INTO clientes (nombre, apellido, telefono, email, mensaje)
            VALUES ('$nombre', '$apellido', '$telefono', '$email', '$mensaje')";

    // Ejecutar la consulta
    if ($conn->query($sql) === TRUE) {
        echo "¡Datos insertados correctamente en la base de datos!";
    } else {
        echo "Error al insertar datos: " . $conn->error;
    }

    // Cerrar la conexión
    $conn->close();
}
?>
