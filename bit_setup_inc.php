<?php
global $gBitSystem;

$registerHash = array(
	'package_name' => 'mapper',
	'package_path' => dirname( __FILE__ ).'/',
	'homeable' => TRUE,
);
$gBitSystem->registerPackage( $registerHash );

if( $gBitSystem->isPackageActive( 'mapper' ) ) {

	$gBitSystem->registerAppMenu( 'mapper', $gBitSystem->getConfig('mapper_menu_text','Mapper'), MAPPER_PKG_URL.'index.php', 'bitpackage:mapper/menu_mapper.tpl', 'Map Archive');
}
?>
