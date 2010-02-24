{* $Header: /cvsroot/bitweaver/_bit_mapper/modules/mod_navi.tpl,v 1.5 2010/02/24 20:42:26 lsces Exp $ *}
{strip}
{if $modMap}
	{bitmodule title="$moduleTitle" name="navi"}
    	<!-- THIS DISPLAYS THE MAP NAVIGATION SELECTIONS -->
		<iframe class="NaviFrame" id="NaviFrame" name="NaviFrame" src="{$smarty.const.MAPPER_PKG_URL}html/navi_blank.html" scrolling="no" style="width:100%; height:180px" frameborder="0">
		</iframe>
		<p>Select ONE of the above maps, and click Update Map, the area displayed will switch to that years map.</p>
	{/bitmodule}
{/if}
{/strip}
