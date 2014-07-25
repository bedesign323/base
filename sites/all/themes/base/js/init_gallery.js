Drupal.behaviors.init_gallery = {
	attach: function (context, settings) {
		if(!jQuery('body').hasClass('mobile')){
			
			var items =  jQuery('.gallery.full .images li');
			var total_items = items.length;
			var current_item = 0;
			var last_item = 0;
			var trans_speed = 800;
			var border = 50;
			var gallery = jQuery('.gallery.full');
			var controls = jQuery('#controls');
			var win = jQuery(window);
			var win_w = win.width();

			var settings = Drupal.settings.gallery_settings;
			var autoplay = settings.autoplay;
			var hide_controls = settings.hide_controls;
			var start_thumbs = settings.start_thumbs;

			
			
			controls.hide();
			
			if(hide_controls == 0){
				controls.delay(trans_speed / 2).fadeIn(trans_speed);
			}

			// Process images
			jQuery(items).each(function(index) {
			   var $this = jQuery(this)
			   $this.addClass('item-' + index).hide();
				$this.attr('rel', index);
			   
			   if(index == 0){
			   	$this.fadeIn(trans_speed);
			   }
			});

			jQuery('.image-group img').each(function(index) {
			   var $this = jQuery(this)
			   var wt = $this.parent().data('wt');
			   var w = $this.data('width');
			   var h = $this.data('height');
			   var wp = (w / wt) * 99.5;
			   $this.css('max-width', wp + '%');

			   if(index == 0){
			   	$this.css('margin-right', ((w / wt) / 2) + '%');
			   }else{
			   	$this.css('margin-left', ((w / wt) / 2) + '%');
			   }
			});
			
			// gallery functions
			function nextItem(){
				last_item = current_item;
				current_item++;
				if(current_item == total_items){
					current_item = 0;
				}
				fadeItems();
			}
			
			function lastItem(){
				last_item = current_item;
				current_item--;
				if(current_item == -1){
					current_item = total_items - 1;
				}
				fadeItems();
			}

			function selectItem(index){
				last_item = current_item;
				current_item = index;

				if(current_item == -1){
					current_item = total_items - 1;
				}
				fadeThumbs();
			}

			function fadeThumbs(){
				gallery.fadeOut(300, function(){
					gallery.addClass('is-not-thumb');
					gallery.removeClass('is-thumb');
					resize_stuff();
					items.hide();
					gallery.show();

					jQuery(' .item-' + current_item).fadeIn(trans_speed);
					resize_stuff();
					controls.fadeIn(300);
					setClicks();
				});
			}
			
	
			function fadeItems(){
				if(!jQuery('body').hasClass('mobile')){
					if(last_item != current_item){
						jQuery(' .item-' + current_item).fadeIn(trans_speed);
						jQuery(' .item-' + last_item).fadeOut(trans_speed);
					}			
				}
				resize_stuff();
				setCount();

			}
			
			function fadeImage(){
				gallery.fadeOut(300, function(){
					gallery.removeClass('is-not-thumb');
					gallery.addClass('is-thumb');
					items.removeAttr('style');
					items.show();
					gallery.fadeIn(300);
					controls.fadeOut(300);
					resize_stuff();
					setClicks();
					
				});

			}

			jQuery('#controls .item-last').click(function(){
				lastItem();
				clearInterval(slide_show);
				return false;
			});

			jQuery('#controls .thumbs-btn').click(function(){
				fadeImage();
				clearInterval(slide_show);
				return false;
			});

			function setClicks(){
				jQuery('.gallery.full .images li').unbind('click');
				if(gallery.hasClass('is-thumb')){
					jQuery('.gallery.full.is-thumb .images li').click(function(){
						var rel = jQuery(this).attr('rel');
						selectItem(rel);
						clearInterval(slide_show);
						return false;
					});
				}else{
					jQuery('.gallery.full.is-not-thumb .images li').click(function(){
						nextItem();
						clearInterval(slide_show);
						return false;
					});

				}
			}

			function setCount(){
				var count = (current_item + 1) + ' / ' + total_items;
				jQuery('.image-count').text(count);
			}
			
			jQuery('#controls .item-next').click(function(){
				nextItem();
				clearInterval(slide_show);
				return false;
			});	

			jQuery(window).resize(function(){
				resize_stuff();
			});

			function resize_stuff(){
				win_w = win.width();

				if( win_w > 700){
					var gh = jQuery('.gallery.full li').height();
					jQuery('.gallery.full li img').each(function(index) {
					   var $this = jQuery(this);
					   var ih = $this.height();
					   var pt = (gh - ih) / 2;
					   $this.css('margin-top', pt);
					});

				}
			}

			var slide_show;

			if(autoplay == 1){
				slide_show = setInterval(nextItem, 4000);
			}

			if(start_thumbs == 1){
				fadeImage();
				clearInterval(slide_show);
			}

			resize_stuff();
			setClicks();
			setCount();
		}
	}
}