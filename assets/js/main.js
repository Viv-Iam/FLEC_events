/************* Main Js File ************************
    Template Name: Evlis
    Author: Themescare
    Version: 1.0
    Copyright 2019
*************************************************************/


/*------------------------------------------------------------------------------------
    
JS INDEX
=============

01 - Ripple Setup
02 - Flipclock Setup
03 - Select JS





-------------------------------------------------------------------------------------*/


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		/* 
		=================================================================
		01 - Ripple Setup
		=================================================================	
		*/

		$('#home').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		})


		/* 
		=================================================================
		02 - Flipclock Setup
		=================================================================	
		*/

		var clock;
		$(document).ready(function () {
			var currentDate = new Date();
			var futureDate = new Date('2019-11-17 03:00');
			var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
			clock = $('.your-clock').FlipClock(diff, {
				clockFace: 'DailyCounter',
				countdown: true
			});
		});


		/* 
		=================================================================
		03 - Select JS
		=================================================================	
		*/

		$('select').niceSelect();


	});


}(jQuery));

