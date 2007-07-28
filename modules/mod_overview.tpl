{* $Header: /cvsroot/bitweaver/_bit_mapper/modules/mod_overview.tpl,v 1.3 2007/07/28 09:15:00 lsces Exp $ *}
{strip}
{if $modMap}
	{bitmodule title="$moduleTitle" name="overview"}
	    <!-- THIS DISPLAYS THE MAP THUMBNAIL OVERVIEW -->
		<iframe class="FormFrame" id="FormFrame" name="FormFrame" src="{$smarty.const.MAPPER_PKG_URL}html/form_blank.html" scrolling="no"  style="width:100%; height:120px" frameborder="0">
		</iframe>
	{/bitmodule}
{/if}
{/strip}