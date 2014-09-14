<div class="form-holder clearfix">
	<?php print render($form['title']); ?>
	
	<div class="form-group">
		<h2>Gallery Settings</h2>
		<?php print render($form['field_start_with_thumbnails']); ?>
		<?php print render($form['field_background_color']); ?>
	</div>
	
	<div class="form-group">
		<h2>Menu Settings</h2>
		<?php print render($form['menu']['enabled']); ?>
		<?php print render($form['menu']['link']); ?>
		
	</div>
	
	<?php print render($form['options']['status']); ?>

	<div class="actions">
		<?php print render($form['actions']); ?>
	</div> 
</div>

<div class="form-hidden">
	<?php print drupal_render_children($form); ?>
</div>