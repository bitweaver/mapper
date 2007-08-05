{* $Header: /cvsroot/bitweaver/_bit_mapper/modules/mod_links.tpl,v 1.4 2007/08/05 15:16:41 lsces Exp $ *}
{strip}
{if $modMap}
	{bitmodule title="$moduleTitle" name="links"}
    	<!-- THIS DISPLAYS THE MAP LINKS AND COORDINATES INFO -->
		<iframe class="LinkFrame" id="LinkFrame" name="LinkFrame" src="{$smarty.const.MAPPER_PKG_URL}html/link_blank.html" scrolling="no" style="width:100%" frameborder="0">
		</iframe>
	{/bitmodule}
{/if}
{/strip}