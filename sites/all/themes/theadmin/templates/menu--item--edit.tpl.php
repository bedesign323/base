<div class="form-holder clearfix">
	<?php print render($form['link_title']); ?>
	<?php print render($form['link_path']); ?>
	<?php print render($form['parent']); ?>

	<div class="actions">
		<?php print render($form['actions']); ?>
	</div> 
</div>

<div class="form-hidden">
	<?php print drupal_render_children($form); ?>
</div>