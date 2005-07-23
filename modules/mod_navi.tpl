{* $Header: /cvsroot/bitweaver/_bit_mapper/modules/mod_navi.tpl,v 1.2 2005/07/23 19:42:10 lsces Exp $ *}
{strip}
{if $modMap}
	{bitmodule title="$moduleTitle" name="navi"}
    	<!-- THIS DISPLAYS THE MAP NAVIGATION SELECTIONS -->
		<iframe class="NaviFrame" id="NaviFrame" name="NaviFrame" src="{$gBitLoc.MAPPER_PKG_URL}html/navi_blank.html" scrolling="no" style="width:100%; height:160px" frameborder="0">
		</iframe>
	{/bitmodule}
{/if}
{/strip}
