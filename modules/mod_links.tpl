{* $Header: /cvsroot/bitweaver/_bit_mapper/modules/mod_links.tpl,v 1.2 2005/07/23 19:42:10 lsces Exp $ *}
{strip}
{if $modMap}
	{bitmodule title="$moduleTitle" name="links"}
    	<!-- THIS DISPLAYS THE MAP LINKS AND COORDINATES INFO -->
		<iframe class="LinkFrame" id="LinkFrame" name="LinkFrame" src="{$gBitLoc.MAPPER_PKG_URL}html/link_blank.html" scrolling="no" frameborder="0">
		</iframe>
	{/bitmodule}
{/if}
{/strip}