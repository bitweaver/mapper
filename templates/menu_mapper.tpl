{strip}
{if $packageMenuTitle}<a class="dropdown-toggle" data-toggle="dropdown" href="#"> {tr}{$packageMenuTitle}{/tr} <b class="caret"></b></a>{/if}
<ul class="{$packageMenuClass}">
	<li><a class="item" href="{$smarty.const.MAPPER_PKG_URL}index.php">{booticon iname="icon-list"   ilocation=menu iexplain="List Map Archive"}</a></li>
    {if $gBitUser->hasPermission('bit_p_v_map_mapper')}
		<li><a class="item" href="{$smarty.const.MAPPER_PKG_URL}display_map.php">{booticon iname="icon-camera" ilocation=menu iexplain="Browse the map"}</a></li>
	{/if}
</ul>
{/strip}
