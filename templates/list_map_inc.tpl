{strip}
{form legend="Search for map"}
	<input type="hidden" name="user_id" value="{$user_id}" />
	<div class="control-group">
		{forminput}
			<input type="text" name="find_objects" />
			<input type="submit" class="btn" value="{tr}filter{/tr}" name="search_objects" />
			{formhelp note="You can restrict the content listing to a given content type or apply a filter."}
		{/forminput}
	</div>
{/form}

<table class="table data">
	<caption>{tr}Available Maps{/tr}</caption>
	<tr>
		<th>{smartlink ititle="Title" isort=title page=$page user_id=$user_id idefault=1}</th>
		<th>{tr}Author{/tr}</th>
		<th>{tr}Most Recent Editor{/tr}</th>
		<th>&nbsp;</th>
	</tr>
	{foreach from=$contentList item=item}
		<tr class="{cycle values='odd,even'}">
			<td>{$item.display_link}</td>
			<td>{displayname real_name=$item.creator_real_name user=$item.creator_user}</td>
			<td>{displayname real_name=$item.modifier_real_name user=$item.modifier_user}</td>
			<td>{$item.last_modified|bit_short_date}</td>
		</tr>
	{/foreach}
</table>

{libertypagination numPages=$numPages page=$curPage sort_mode=$sort_mode content_type=$contentSelect user_id=$user_id}
{/strip}
