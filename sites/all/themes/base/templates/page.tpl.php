
<div id="header-container">
	<div id="header">
		<div id="logo"><a href="/"></a></div>
		
		<div id="main-nav">
			<div class="menu-toggle icon-list"></div>

			<div id="menu">
				<?php print render($page['nav_main']); ?>
				<div class="social-icons">
					<a href="http://twitter.com/" class="icon-twitter" target="_blank"></a>
					<a href="http://instagram.com/" class="icon-instagram" target="_blank"></a>
					<a href="" class="icon-youtube" target="_blank"></a>
				</div>
			</div>
		</div> 

		
	</div>
</div>

<div id="main-container">
	<div class="main">
		<?php if(isset($messages)): ?>
			<div id="messages"><?php echo $messages; ?></div>
		<?php endif; ?>

		<?php if(isset($tabs)): ?>
			<div id="tabs"><?php echo render($tabs); ?></div>
		<?php endif; ?>

		<?php if(isset($title)): ?>
			<h1 id="page-title"><?php echo $title; ?></h1>
		<?php endif; ?>
		<div id="content">
			<?php print render($page['content']); ?>
		</div>
	</div>
</div>

<div id="footer-container">
	<div  id="footer">
		<div class="inner">
			<div class="footer-main"><?php print render($page['footer_main']); ?></div>
			<div class="footer-left"><?php print render($page['footer_left']); ?></div>
			<div class="footer-right"><?php print render($page['footer_right']); ?></div>
		</div>
		<div class="copy">
			&copy; <?php echo date('Y') . ' ' . $site_name; ?>
		</div>
	</div>
</div>
