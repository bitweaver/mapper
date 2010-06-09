<?php
/**
 * get_content_list
 *
 * @author   Christian Fowler>
 * @version  $Revision$
 * @package  mapper
 * @subpackage functions
 */

/**
 * required setup
 */
require_once( MAPPER_PKG_PATH."BitMapper.php" );
global $gContent;
global $gLibertySystem;

if( empty( $gContent ) || !is_object( $gContent ) ) {
	$gContent = new BitMapper();
}

$contentSelect = empty( $_REQUEST['content_type'] ) ? NULL : $_REQUEST['content_type'];

// get_content_list_inc doesn't use $_REQUEST parameters as it might not be the only list in the page that needs sorting and limiting
$contentList = $gContent->getContentList( $contentSelect, isset( $offset_content ) ? $offset_content : 0, isset( $max_content ) ? $max_content : 500, isset( $content_sort_mode ) ? $content_sort_mode : 'title_asc', empty( $_REQUEST["find_objects"] ) ? NULL : $_REQUEST["find_objects"], isset( $_REQUEST['user_id'] ) ? $_REQUEST['user_id'] : NULL );

$contentTypes = array();
foreach( $gLibertySystem->mContentTypes as $cType ) {
	$contentTypes[$cType['content_type_guid']] = $gLibertySystem->getContentTypeName( $cType['content_type_guid'] );
}
?>
