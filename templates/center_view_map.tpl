{* $Header: /cvsroot/bitweaver/_bit_mapper/templates/center_view_map.tpl,v 1.3 2007/07/28 09:16:04 lsces Exp $ *}
<div class="floaticon">{bithelp}</div>

<div class="display map">
	<div class="header">
		<h1>{tr}Map - IOM{/tr}</h1>
	</div>
	<iframe class="ScriptFrame" id="ScriptFrame" name="ScriptFrame" src="{$smarty.const.MAPPER_PKG_URL}html/script_blank.html" scrolling="no" style="visibility:hidden; height:0px;">
	</iframe>
	<iframe class="MapFrame" id="MapFrame" name="MapFrame" src="{$smarty.const.MAPPER_PKG_URL}html/map_blank.html" style="width:100%; height:840px;" frameborder="1">
	</iframe>
</div>
