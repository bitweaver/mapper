{* $Header$ *}
{strip}
{if $modMap}
	{bitmodule title="$moduleTitle" name="overview"}
	    <!-- THIS DISPLAYS THE MAP THUMBNAIL OVERVIEW -->
		<iframe class="FormFrame" id="FormFrame" name="FormFrame" src="{$smarty.const.MAPPER_PKG_URL}html/form_blank.html" scrolling="no"  style="width:100%; height:120px" frameborder="0">
		</iframe>
	{/bitmodule}
{/if}
{/strip}