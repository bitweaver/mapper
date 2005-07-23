{strip}

<div class="mapper">
	{jstabs}
		{jstab title="Mapper Settings"}
			{form legend="Mapper Settings"}
				<input type="hidden" name="page" value="{$page}" />

			{if $gBitSystem->isPackageActive('mapper')}
				<div class="row">
					{formlabel label="Font" for="font"}
					{forminput}
						<input type="text" name="font" id="font" size="50" value="{$mapperSettings.font|escape}" />
					{/forminput}
				</div>


				<div class="row">
					{formlabel label="Automatic XY Tracker" for="autotrack"}
					{forminput}
						<input type="checkbox" {if $mapperSettings.autotrack eq 'on'}checked="checked"{/if} name="autotrack" id="autotrack" />
					{/forminput}
				</div>
			{/if}

				<div class="row submit">
					<input type="submit" name="save" value="{tr}Apply Settings{/tr}" />
				</div>
			{/form}
		{/jstab}

		{jstab title="Mapper Archive"}
			<h2>Available Maps</h2>

		{/jstab}
	{/jstabs}
</div><!-- end .pdf -->

{/strip}
