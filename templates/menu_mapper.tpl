{strip}
<ul>
	<li><a class="item" href="{$smarty.const.MAPPER_PKG_URL}index.php">{biticon iname=format-justify-fill ilocation=menu iexplain="List Map Archive"}</a></li>
    {if $gBitUser->hasPermission('bit_p_v_map_mapper')}
		<li><a class="item" href="{$smarty.const.MAPPER_PKG_URL}display_map.php">{biticon iname=camera-photo ilocation=menu iexplain="Browse the map"}</a></li>
	{/if}
</ul>
{/strip}
