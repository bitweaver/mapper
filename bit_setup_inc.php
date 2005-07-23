<?php
global $gBitSystem;

$gBitSystem->registerPackage( 'mapper', dirname( __FILE__ ).'/' );

if( $gBitSystem->isPackageActive( 'mapper' ) ) {

	$gBitSystem->registerAppMenu( 'mapper', $gBitSystem->getPreference('mapper_menu_text','Mapper'), MAPPER_PKG_URL.'index.php', 'bitpackage:mapper/menu_mapper.tpl', 'Map Archive');
}
?>
