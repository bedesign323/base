<div class="form-holder clearfix">
	<?php print render($form['title']); ?>
	<?php print render($form['field_video_url']['und'][0]['video_url']); ?>
	<?php print render($form['field_video_description']); ?>
	<?php print render($form['options']['status']); ?>

	<div class="actions">
		<?php print render($form['actions']); ?>
	</div> 
</div>

<div class="form-hidden">
	<?php print drupal_render_children($form); ?>
</div>