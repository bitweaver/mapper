{* $Header$ *}
{strip}
{if $modMap}
	{bitmodule title="$moduleTitle" name="links"}
    	<!-- THIS DISPLAYS THE MAP LINKS AND COORDINATES INFO -->
		<iframe class="LinkFrame" id="LinkFrame" name="LinkFrame" src="{$smarty.const.MAPPER_PKG_URL}html/link_blank.html" scrolling="no" style="width:100%" frameborder="0">
		</iframe>
	{/bitmodule}
{/if}
{/strip}