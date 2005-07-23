{* $Header: /cvsroot/bitweaver/_bit_mapper/modules/mod_legend.tpl,v 1.1 2005/07/23 17:58:23 lsces Exp $ *}
{strip}
{if $modMap}
	{bitmodule title="$moduleTitle" name="legend"}
    	<!-- THIS DISPLAYS THE MAP LEGEND -->
		<iframe class="LegendFrame" id="LegendFrame" name="LegendFrame" src="/bitweaver/mapper/html/legend_blank.html" scrolling="no" style="height:90px" frameborder="0">'
		</iframe>
	{/bitmodule}
{/if}
{/strip}
	