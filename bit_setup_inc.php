<?php
global $gBitSystem;

$registerHash = array(
	'package_name' => 'mapper',
	'package_path' => dirname( __FILE__ ).'/',
	'homeable' => TRUE,
);
$gBitSystem->registerPackage( $registerHash );

if( $gBitSystem->isPackageActive( 'mapper' ) ) {

	$menuHash = array(
		'package_name'  => MAPPER_PKG_NAME,
		'index_url'     => MAPPER_PKG_URL.'index.php',
		'menu_template' => 'bitpackage:mapper/menu_mapper.tpl',
	);
	$gBitSystem->registerAppMenu( $menuHash );
}
?>
