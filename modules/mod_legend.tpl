{* $Header$ *}
{strip}
{if $modMap}
	{bitmodule title="$moduleTitle" name="legend"}
    	<!-- THIS DISPLAYS THE MAP LEGEND -->
		<iframe class="LegendFrame" id="LegendFrame" name="LegendFrame" src="{$smarty.const.MAPPER_PKG_URL}html/legend_blank.html" scrolling="no" style="width:100%; height:90px" frameborder="0">'
		</iframe>
	{/bitmodule}
{/if}
{/strip}
	