{* $Header$ *}
{strip}
{if $modMap}
	{bitmodule title="$moduleTitle" name="tools"}
		<!-- THIS DISPLAYS THE MAP TOOL BAR -->
		<iframe class="ToolFrame" id="ToolFrame" name="ToolFrame" src="{$smarty.const.MAPPER_PKG_URL}html/tool_blank.html" scrolling="no"  style="width:100%; height:100px;"frameborder="0">
		</iframe>
	{/bitmodule}
{/if}
{/strip}