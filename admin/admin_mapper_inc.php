<?php

require_once( MAPPER_PKG_PATH.'BitMapper.php' );

//defaults
$mapper = new BitMapper();

if( !empty( $_REQUEST['save'] ) ) {
	if( $gBitSystem->isPackageActive( 'mapper' ) ) {
		$mapper->storeSettings( $_REQUEST );
	}
}

// assign to smarty
$smarty->assign('mapperSettings', $mapper->mSettings );
?>
