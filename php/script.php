<?php
// Koneksi Ke database Mysql
$Servername = 'localhost';
$username = 'username';
$password ='password';
$dbname = 'database_name';

$conn = new mysqli($Servername, $username,$password,$dbname);


//periksa koneksi

if ($conn->connect_error) {
    die("Koneksi Gagal: " . $conn->connect_error);
}


//ambil data dari formulir 
$full_name = $_POST['full_name'];
$email = $_POST['email'];
$mobile_number = $_POST['mobile_number'];
$email_subject = $_POST['email_subject'];
$message = $_POST['message'];



// masukan data ke database 
$sql = "INSERT INTO messages (full_name, email, mobile_number, email_subject, message) VALUES ('$full_name', '$email', '$mobile_number', '$email_subject', '$message')";


if ($conn->query($sql) === TRUE) {
    echo "Pesan berhasil dikirim!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}



// tutup koneksi ke datbaase 
$conn->close();
?>