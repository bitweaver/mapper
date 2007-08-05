{* $Header: /cvsroot/bitweaver/_bit_mapper/modules/mod_legend.tpl,v 1.4 2007/08/05 15:16:41 lsces Exp $ *}
{strip}
{if $modMap}
	{bitmodule title="$moduleTitle" name="legend"}
    	<!-- THIS DISPLAYS THE MAP LEGEND -->
		<iframe class="LegendFrame" id="LegendFrame" name="LegendFrame" src="{$smarty.const.MAPPER_PKG_URL}html/legend_blank.html" scrolling="no" style="width:100%; height:90px" frameborder="0">'
		</iframe>
	{/bitmodule}
{/if}
{/strip}
	