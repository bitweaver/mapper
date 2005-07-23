{* $Header: /cvsroot/bitweaver/_bit_mapper/modules/mod_tools.tpl,v 1.2 2005/07/23 19:42:10 lsces Exp $ *}
{strip}
{if $modMap}
	{bitmodule title="$moduleTitle" name="tools"}
		<!-- THIS DISPLAYS THE MAP TOOL BAR -->
		<iframe class="ToolFrame" id="ToolFrame" name="ToolFrame" src="{$gBitLoc.MAPPER_PKG_URL}html/tool_blank.html" scrolling="no"  style="width:100%; height:100px;"frameborder="0">
		</iframe>
	{/bitmodule}
{/if}
{/strip}