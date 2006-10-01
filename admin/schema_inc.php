<?php
global $gBitInstaller;

$gBitInstaller->registerPackageInfo( MAPPER_PKG_NAME, array(
	'description' => "Mapserver client interface and archive.",
	'license' => '<a href="http://www.gnu.org/licenses/licenses.html#LGPL">LGPL</a>',
) );


// ### Default UserPermissions
$gBitInstaller->registerUserPermissions( MAPPER_PKG_NAME, array(
	array('bit_p_v_map_mapper', 'Can view MAP files', 'basic', 'mapper'),
	array('bit_p_view_mapper', 'Can view map archives', 'registered', 'mapper'),
	array('bit_p_create_mapper', 'Can create a map archive', 'registered', 'mapper'),
	array('bit_p_edit_mapper', 'Can edit map archives', 'registered', 'mapper'),
	array('bit_p_admin_mapper', 'Can admin map archives', 'editors', 'mapper')
) );




?>
