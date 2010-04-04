<?php
/**
 * list_content
 *
 * @author   spider <spider@steelsun.com>
 * @version  $Revision: 1.6 $
 * @package  mapper
 * @subpackage functions
 */

/**
 * required setup
 */
require_once("../kernel/setup_inc.php");

// now that we have all the offsets, we can get the content list
include_once( MAPPER_PKG_PATH.'get_map_list_inc.php' );
 
//$gBitSmarty->assign_by_ref('offset', $offset);
$gBitSmarty->assign( 'contentSelect', $contentSelect );
$gBitSmarty->assign( 'contentTypes', $contentTypes );
$gBitSmarty->assign( 'contentList', $contentList );

$gBitSystem->setBrowserTitle( 'List Map Archive' );
$gBitSystem->display( 'bitpackage:mapper/list_maps.tpl' , NULL, array( 'display_mode' => 'list' ));
?>
