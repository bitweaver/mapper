{strip}
<ul>
	<li><a class="item" href="{$smarty.const.MAPPER_PKG_URL}index.php">{biticon ipackage=liberty iname=list iexplain="list maps" iforce="icon"} {tr}List Map Archive{/tr}</a></li>
    {if $gBitUser->hasPermission('bit_p_v_map_mapper')}
		<li><a class="item" href="{$smarty.const.MAPPER_PKG_URL}display_map.php">{biticon ipackage=liberty iname=tree iexplain="browse map" iforce="icon"} {tr}Browse Map{/tr}</a></li>
	{/if}
</ul>
{/strip}
