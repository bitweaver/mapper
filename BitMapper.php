<?php
/**
* @package mapper
* @author lsces <lester@lsces.co.uk>
* @version $Revision: 1.1 $
*/

/**
 * required setup
 */
require_once( LIBERTY_PKG_PATH.'LibertyAttachable.php' );		// FisheyeGallery base class

/**
* @package mapper
* @subpackage BitMapper
*/
class BitMapper extends LibertyAttachable
{
	var $mSettings;
	
	function BitMapper() 
	{	
		LibertyAttachable::LibertyAttachable();
		$this->loadSettings();
		
	}

	function loadSettings() {
		global $gBitSystem;
		$this->mSettings = $this->getDefaultSettings();
		foreach( array_keys( $this->mSettings ) as $key ) {
			$keyPref = $gBitSystem->getPreference( $key, NULL );
			if( !empty( $keyPref ) ) {
				$this->mSettings[$key] = $keyPref;
			}
		}
	}

	function verifySettings( &$pParamHash ) {
		$defaults = $this->getDefaultSettings();
		
		// let's trim out all whitespace
		foreach( array_keys( $pParamHash ) as $key ) {
			$pParamHash[$key] = trim( $pParamHash[$key] );
		}

		if( isset( $pParamHash['font'] ) && ( $pParamHash['font'] != $defaults['font'] ) ) {
			$pParamHash['setting_store']['font'] = $pParamHash['font'];
		}

		if( isset( $pParamHash['autotrack'] ) ) {
			$pParamHash['setting_store']['autotrack'] = $pParamHash['autotrack'];
		}

		return( !empty( $pParamHash['setting_store'] ) );
	}

	function storeSettings( &$pParamHash ) {
		global $gBitSystem;
		$gBitSystem->expungePackagePreferences( MAPPER_PKG_NAME );
		if( $this->verifySettings( $pParamHash ) ) {
			foreach( array_keys( $pParamHash['setting_store'] ) as $key ) {
				$gBitSystem->storePreference( $key, $pParamHash['setting_store'][$key],  MAPPER_PKG_NAME );
				$this->mSettings[$key] = $pParamHash['setting_store'][$key];
			}
		}
	}


	function getDefaultSettings() {
		return( array(	"font" => "LuxiSerif.afm",
						"autotrack" => 'off'
			) );
	}
}
?>
