{* $Header: /cvsroot/bitweaver/_bit_mapper/modules/mod_overview.tpl,v 1.1 2005/07/23 17:58:23 lsces Exp $ *}
{strip}
{if $modMap}
	{bitmodule title="$moduleTitle" name="overview"}
	    <!-- THIS DISPLAYS THE MAP THUMBNAIL OVERVIEW -->
		<iframe class="FormFrame" id="FormFrame" name="FormFrame" src="/bitweaver/mapper/html/form_blank.html" scrolling="no"  style="width:100%; height:120px" frameborder="0">
		</iframe>
	{/bitmodule}
{/if}
{/strip}