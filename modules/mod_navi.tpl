{* $Header: /cvsroot/bitweaver/_bit_mapper/modules/mod_navi.tpl,v 1.1 2005/07/23 17:58:23 lsces Exp $ *}
{strip}
{if $modMap}
	{bitmodule title="$moduleTitle" name="navi"}
    	<!-- THIS DISPLAYS THE MAP NAVIGATION SELECTIONS -->
		<iframe class="NaviFrame" id="NaviFrame" name="NaviFrame" src="/bitweaver/mapper/html/navi_blank.html" scrolling="no" style="width:100%; height:160px" frameborder="0">
		</iframe>
	{/bitmodule}
{/if}
{/strip}
