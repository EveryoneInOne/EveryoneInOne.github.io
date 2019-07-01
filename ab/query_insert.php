<?php
	require_once ("connect.php");
	
$php_zmienna_formularz_1=$_POST['formularz_zmienna_1'];
$php_zmienna_formularz_2=$_POST['formularz_zmienna_2'];
$php_zmienna_DL=$_POST['zmienna_formularz_DL'];
$php_zmienna_SZER=$_POST['zmienna_formularz_SZER'];

$sql=pg_query("INSERT INTO public.tabela_lab(
	pierwsza_zmienna_opisowa, druga_zmienna_numeryczna, geometria)
	VALUES ( '$php_zmienna_formularz_1', '$php_zmienna_formularz_2', ST_GeomFromEWKT('SRID=4326; POINT($php_zmienna_DL $php_zmienna_SZER)'));");

if ($sql){
//	echo "działa";
}else{
	echo 'nie działa';
};
pg_close($polaczenie);

?>