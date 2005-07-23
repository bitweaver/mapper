{* $Header: /cvsroot/bitweaver/_bit_mapper/modules/mod_legend.tpl,v 1.2 2005/07/23 19:42:10 lsces Exp $ *}
{strip}
{if $modMap}
	{bitmodule title="$moduleTitle" name="legend"}
    	<!-- THIS DISPLAYS THE MAP LEGEND -->
		<iframe class="LegendFrame" id="LegendFrame" name="LegendFrame" src="{$gBitLoc.MAPPER_PKG_URL}html/legend_blank.html" scrolling="no" style="height:90px" frameborder="0">'
		</iframe>
	{/bitmodule}
{/if}
{/strip}
	