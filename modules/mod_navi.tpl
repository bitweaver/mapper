{* $Header: /cvsroot/bitweaver/_bit_mapper/modules/mod_navi.tpl,v 1.4 2007/08/05 15:16:41 lsces Exp $ *}
{strip}
{if $modMap}
	{bitmodule title="$moduleTitle" name="navi"}
    	<!-- THIS DISPLAYS THE MAP NAVIGATION SELECTIONS -->
		<iframe class="NaviFrame" id="NaviFrame" name="NaviFrame" src="{$smarty.const.MAPPER_PKG_URL}html/navi_blank.html" scrolling="no" style="width:100%; height:180px" frameborder="0">
		</iframe>
	{/bitmodule}
{/if}
{/strip}
