<?php

// $Header: /cvsroot/bitweaver/_bit_mapper/display_map.php,v 1.2 2005/07/30 12:07:19 lsces Exp $

// Copyright (c) 2002-2003, Lester Caine - lsces. gdv Client
// wz_jsgraphics.js Copyright - Copyright (c) 2002-2004 Walter Zorn.
// All Rights Reserved. See copyright.txt for details and a complete list of authors.
// Licensed under the GNU LESSER GENERAL PUBLIC LICENSE. See license.txt for details.

// Initialization
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
$gBitSystem->display( 'bitpackage:mapper/center_view_map.tpl');
?>
