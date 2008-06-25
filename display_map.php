<?php
/**
 * $Header: /cvsroot/bitweaver/_bit_mapper/display_map.php,v 1.4 2008/06/25 22:21:13 spiderr Exp $
 *
 * Copyright ( c ) 2004 bitweaver.org
 * All Rights Reserved. See copyright.txt for details and a complete list of authors.
 * Licensed under the GNU LESSER GENERAL PUBLIC LICENSE. See license.txt for details
 *
 * @package mapper
 * @subpackage functions
 */

/**
 * required setup
 */
require_once( '../bit_setup_inc.php' );

// require_once( LIBERTY_PKG_PATH.'lookup_content_inc.php');

$gBitSystem->verifyPackage( 'mapper' );
//$gBitSystem->verifyFeature( 'feature_map_display' );

$gBitSystem->setBrowserTitle( 'Display Mapsever map');
// PDF for '.$gContent->mInfo['title'] );

//$gDefaultCenter = 'bitpackage:mapper/center_view_map.tpl';
//$gBitSmarty->assign_by_ref( 'gDefaultCenter', $gDefaultCenter );
$modMap = true;
$gBitSmarty->assign( 'modMap', $modMap );
$gBitSystem->display( 'bitpackage:mapper/center_view_map.tpl', NULL, array( 'display_mode' => 'display' ));
?>
