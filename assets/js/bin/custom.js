$(document).ready(function() {


  
  
  


	function goToByScroll(id){
    // Remove "link" from the ID
  id = id.replace("link", "");
    // Scroll
  $('html,body').animate({
      scrollTop: $("#"+id).offset().top},
      'slow');
  }


  //Side nav
  $(".button-collapse").sideNav();

  //Chips - Tags
  $('.chips').material_chip();

  //tabs
  //$('ul.tabs').tabs();


  //Carousel
  $('.carousel.carousel-slider').carousel({full_width: true});



  $('#input_second.autocomplete').autocomplete({
    data: {
        "Paris": null,
        "Lyon": null,
        "Nice": null,
      }
  });

	$('#input_third.autocomplete').autocomplete({
	    data: {
	      "Paris": null,
	      "Lyon": null,
	      "Nice": null,
	    }
	});
	$('.dropdown-button.notification-header').dropdown({
			inDuration: 300,
			outDuration: 225,
			//constrain_width: false, // Does not change width of dropdown to that of the activator
			//hover: true, // Activate on hover
			//gutter: 0, // Spacing from edge
			belowOrigin: false, // Displays dropdown below the button
			alignment: 'right' // Displays dropdown with edge aligned to the left of button
		}
	);


	$('#notificationAlert').click (function(){
		$(this).removeClass('new-alert').find('span').remove('.new-notice-alert');
	});

	//Forms
	$('select').material_select();


	//Modal
	//$('.modal-trigger').saveBulk();
	$('.modal').modal();

	//Modal Table
	$('#saveBulkTable tbody tr').click(function(event){
	    event.preventDefault();
	    $('tr').removeClass('active');
	    $(this).addClass('active');
	  });


	$('#userProfile_1').click (function(){
		$(this).parent().addClass('read');
	});

  $('#filled-in-box-1').change(function(){
      if($(this).is(':checked')){
          $('#listNavDisplay').addClass('hide');
          $('#actionHeader').fadeIn('6000');
          $(this).parent('.card-content').addClass('checked');
      }else{
          $('#listNavDisplay').removeClass('hide');
          $('#actionHeader').fadeOut('6000');
          $(this).parent('.card-content').removeClass('checked');
      }
  });

  $('#filled-in-box-2').change(function(){
      if($(this).is(':checked')){
          $('#listNavDisplay').addClass('hide');
          $('#actionHeader').fadeIn('6000');
          $(this).parent('.card-content').addClass('checked');
      }else{
          $('#listNavDisplay').removeClass('hide');
          $('#actionHeader').fadeOut('6000');
          $(this).parent('.card-content').removeClass('checked');
      }
  });

  $('#filled-in-box-3').change(function(){
      if($(this).is(':checked')){
          $('#listNavDisplay').addClass('hide');
          $('#actionHeader').fadeIn('6000');
          $(this).parent('.card-content').addClass('checked');
      }else{
          $('#listNavDisplay').removeClass('hide');
          $('#actionHeader').fadeOut('6000');
          $(this).parent('.card-content').removeClass('checked');
      }
  });

  //Select All - checkbox
  $('#selectNone').hide(); //Deselect All


  $('#selectAllList').click(function(){
      $('#filled-in-box-1').prop("checked", true);
      $('#filled-in-box-2').prop("checked", true);
      $('#filled-in-box-3').prop("checked", true);
      $('#filled-in-box-4').prop("checked", true);
      $('#filled-in-box-5').prop("checked", true);
      $('#filled-in-box-6').prop("checked", true);
      $( "#selectCount").text('6 resume selected');
      $(this).hide();
      $('#selectNone').show();
      $('.card-content').addClass('checked');
  });


  //Deselect All
  $('#selectNone').click(function(){
      $('#filled-in-box-1').prop("checked", false);
      $('#filled-in-box-2').prop("checked", false);
      $('#filled-in-box-3').prop("checked", false);
      $('#filled-in-box-4').prop("checked", false);
      $('#filled-in-box-5').prop("checked", false);
      $('#filled-in-box-6').prop("checked", false);
      $( "#selectCount").text('No resume selected');
      $(this).hide();
      $('#selectAllList').show();
      $('.card-content').removeClass('checked');
  });


	//Create Folder
	$('#createFolderBtn').click (function(event){
		event.preventDefault();
		$(this).hide();
		$('#saveBulkTable').fadeOut();
    $('#saveToFolderAction').fadeOut();
		$('#createFolderFormActions').fadeIn().removeClass('hide');
		$('#createFolderForm').fadeIn().removeClass('hide');
	});


  //Show More Expérience
  $('#show_more_01').click(function(event){
    event.preventDefault();
    $(this).hide();
    $('#contentHide').removeClass('hide').addClass('show');
    $('#show_less_01').show();
  });

  //Show less 
  $('#show_less_01').click(function(event){
    event.preventDefault();
    $(this).hide();
    $('#contentHide').removeClass('show').addClass('hide');
    $('#show_more_01').parent().show();
    $('#show_more_01').show();
  });

  	
  	// $(".modal-trigger").click(function (){
   //      alert ("test");
   //      var divID = '#' + $(this).attr('id') + 'profile_';
   //      $(divID).modal('open');
   //  });


  	//Scroll to top
  	// $(".modal-trigger").click(function (){
   //      alert ("test");
   //      var divID = '#' + $(this).attr('id') + 'profile_';
   //      $('html, body').animate({
   //          scrollTop: $(divID).offset().top
   //      }, 1000);
   //  });
	
	$('.card-title a').click(function(){
		$(this).closest('.card').addClass('read');
	});
	$('.modal-trigger').click(function(){
		$(this).closest('.card').addClass('read');
	});

	$('#confirmCreateBtn').click(function(){
		$('#createFolderForm').fadeOut();
		$('#saveBulkTable').fadeIn();
		$('#modalFooter').fadeIn();
	});

	// $('#modifySearch').hide();
	// $('#modifySearchBtn').click(function(event){
	// 	event.preventDefault();
	// 	$('#searchList').hide();
	// 	$('#modifySearch').fadeIn().show();
	// });

  //Mots-clès - AIDE
  // $( "#input_mots" ).focus(function() {
  //     $('#recentPanel').fadeOut();
  //     $('#helpPanel').fadeIn(1000).removeClass('hide');
  // });

  // $('#closeHelpPanel').click(function(event){
  //   event.preventDefault();
  //   $('#helpPanel').hide('fast').addClass('hide');
  //   $('#recentPanel').fadeIn();
  // });

  //Ville Habitee
  $( "#input_second" ).focus(function() {
    $('#addVille').fadeIn(1000).removeClass('hide');
  });
  $('#addVille').click(function(event){
    event.preventDefault();
    $('#villeField_01').fadeIn(1000).removeClass('hide');
  });
  $('#remove_1').click(function(event){
    event.preventDefault();
    $('#villeField_01').fadeOut().addClass('hide');
  });

  // plus de critères
  $('#moreCriteria').click(function(event){
    event.preventDefault();
    $(this).hide();
    $('#moreCriteriaPanel').fadeIn().removeClass('hide');
    //goToByScroll('moreCriteriaPanel');
  });

  // masquer les autres critères
  $('#lessCriteria').click(function(event){
    event.preventDefault();
    $('#moreCriteria').show();
    $('#moreCriteriaPanel').fadeOut().addClass('hide');
    //goToByScroll('searchForm');
  });



//Search click - Rechercher BUTTON

 $('#btnRechercher').click(function(event){
    event.preventDefault();
    $('body').addClass('has-become-side-nav');
    $('#searchFormPanel').addClass('side-nav fixed').removeClass('col s12 m12 l12');
    $('#resultFormPanel').removeClass('hide col s12 m12 l9').addClass('col s12 m12 l12');
    $('#recentPanel').hide();
    $('#btnRechercher').removeClass('right');
    
    $('.side-nav.fixed .input-field').addClass('change');
    Materialize.toast('Showing your search results', 1000);

  });

 


    //Resume Details - plus d'information
    $('#showLessInfo').hide();
    $('#showMoreInfo').click(function(event){
      event.preventDefault();
      $(this).hide();
      $('#showLessInfo').show();
      $('#previewDetail').removeClass('medium-height').addClass('full-height');
    });

    //Resume Details - minus d'information
    $('#showLessInfo').click(function(event){
      event.preventDefault();
      $(this).hide();
      $('#showMoreInfo').show();
      $('#previewDetail').removeClass('full-height').addClass('medium-height');
    });


    //Resume Details - Show more EXPÉRIENCE PROFESSIONNELLE
    $('#showLessExp').hide();
    $('#showLessExp2').hide();
    $('#showMoreExp').click(function(event){
      event.preventDefault();
      $(this).hide();
      $('#showLessExp').show();
      $('#expContainer').removeClass('small-height').addClass('full-height');
    });

    //Resume Details - Show Less EXPÉRIENCE PROFESSIONNELLE
    $('#showLessExp').click(function(event){
      event.preventDefault();
      $(this).hide();
      $('#showMoreExp').show();
      $('#expContainer').removeClass('full-height').addClass('small-height');
    });


    //Resume Details - Show more formation
    $('#showLessFormation').hide();
    $('#showLessFormation2').hide();
    $('#showMoreFormation').click(function(event){
      event.preventDefault();
      $(this).hide();
      $('#showLessFormation').show();
      $('#formationContainer').removeClass('small-height').addClass('full-height');
    });

    //Resume Details - Show Less formation
    $('#showLessFormation').click(function(event){
      event.preventDefault();
      $(this).hide();
      $('#showMoreFormation').show();
      $('#formationContainer').removeClass('full-height').addClass('small-height');
    });


    //$('#sideList_0').hide();
    $('#detail_2').hide();
    $('#detail_3').hide();
    
    $('#sideList_0 .card-title a').click(function(event){
      event.preventDefault();
      $('#leftResultList #listPanelDetail').addClass('clicked');
      $('#detail_1').fadeIn();
      $('#detail_2').fadeOut();
      goToByScroll('detailsView');
    });

    // $('#sideList_1 .card-title a').click(function(event){
    //   event.preventDefault();
    //   $('#detail_1').fadeOut();
    //   $('#detail_2').fadeIn();
    //   $('#listPanelDetail').addClass('clicked').removeClass('scroll');
    //   goToByScroll('leftResultList');
    // });


    //var divHeight1 = $('#listPanelDetail').height();
    //alert('side-nav height is = '+ divHeight1+'px');

    

    var divHeight = $( window ).height()-136;
    $( "#listPanelDetail" ).css('height', divHeight+'px');  
    //Setting the height of the LEFT side Resume list

    // var scrollHeight = $('#listPanelDetail').height+82();
    // $( "#listPanelDetail" ).css('height', scrollHeight+'px');
    
    $(window).scroll(function(){

      if ($(window).scrollTop() >= 70) {
         $('#searchFormPanel').css("top",'0');
         $('#leftResultList #backToResult').addClass('scroller');
         $('#leftResultList #listPanelDetail').addClass('scroll');
         $('#leftResultList #listPanelDetail').removeClass('clicked');
         
         $( "footer" ).css('padding-left', '310px');
        

      }
      else {
         $('#searchFormPanel').css("top", '56px');
         $('#leftResultList #backToResult').removeClass('scroller');
         $('#leftResultList #listPanelDetail').removeClass('scroll');
         $('#leftResultList #listPanelDetail').removeClass('clicked');
         
         $( "footer" ).removeAttr('style');
      }
    });



    $('.fixed-action-btn').openFAB();

    $('#emailSaveSwitch').change(function(){
      if($(this).is(':checked')){
          $(this).parent('label').addClass('checked');
          $('#saveEmail').prop({disabled: false});
          $('#frequenceFields').prop({disabled: false});
      }else{
          $(this).parent('label').removeClass('checked');
          $('#saveEmail').prop({disabled: true});
          $('#frequenceFields').prop({disabled: true});
      }
    });

    $('#partageSwitch').change(function(){
      if($(this).is(':checked')){
        $(this).parent('label').addClass('checked');
      }else{
        $(this).parent('label').removeClass('checked');
      }
    });

    //Sauvegarder recherche
    $('#saveSearch').hide();
    $('#SaveSearches').click(function(event){
      event.preventDefault();
      $('#saveSearch').fadeIn();
    });

    
    //Sauvegarder recherche - ENREGISTRER Button
    $('#submitSaveSearches').click(function(event){
      event.preventDefault();
      $('#saveSearch').fadeOut();
      Materialize.toast('Your searches has ben saved!', 2000);
    });

    //Sauvegarder recherche -  ANNULER Button
    $('#cancelSaveSearches').click(function(event){
      event.preventDefault();
      $('#saveSearch').fadeOut();
    });

    $('#downloadCV_1').click(function() {
        $('.count').html(function(i, val) { return val*1+1 });
        Materialize.toast('CV Successfully Downloaded!', 2000);
    });

    //CV Blocked
    $('#blockCV_1').click(function() {
        $(this).toggleClass('red grey');
        Materialize.toast('CV Blocked Successfully!', 2000);
    });

    //Show Recent Searches
    $('#showRecentSearch').click(function(event){
      event.preventDefault();
      $('header nav').addClass('nav-extended');
      $('#recentSearchWrapper').show().removeClass('hide');
      $('#viewPanel').hide();
      $('#tabSearchView').fadeIn().removeClass('hide');
    });

    //Show Recent Searches - Click on Link
    $('#recent_1').click(function(event){
      event.preventDefault();
      $('body').addClass('has-become-side-nav');
      $('#searchFormPanel').addClass('side-nav fixed').removeClass('col s12 m12 l12');
      $('#resultFormPanel').removeClass('hide col s12 m12 l9').addClass('col s12 m12 l12');
      $('#recentPanel').hide();
      $('#viewPanel').show();
      $('#btnRechercher').removeClass('right');
      
      $('.side-nav.fixed .input-field').addClass('change');
      Materialize.toast('Showing your search results', 2000);
      $('#tabSearchView').fadeOut().addClass('hide');
    });

    //Show Saved Searches
    $('#showSavedSearch').click(function(event){
      event.preventDefault();
      $('#viewPanel').hide();
      $('#tabSearchView').fadeIn().removeClass('hide');
      $('#recentSearchesLink').removeClass('active');
      $('#savedSearchesLink').addClass('active');

    });

    $('#deleteFolder_1').click(function(event){
      event.preventDefault();
      Materialize.toast('Folder deleted successfully!', 2000);
      $('#folder_1').hide();
    });

    // $('#viewFolders_01').click(function(event){
    //   event.preventDefault();
    //   $('#mesDossiers').fadeIn().removeClass('hide');
    //   $('#viewPanel').hide();
    // });
    

    //From Top Navigation
    $('#menuFolderView').click(function(event){
      event.preventDefault();
      $('#mesDossiers').fadeIn().removeClass('hide');
      $('#viewPanel').hide();
      //Materialize.toast('Folder deleted successfully!', 4000);
    });

    $('#mesViewFolders').click(function(event){
      event.preventDefault();
      $('#mesDossiers').fadeIn().removeClass('hide');
      $('#viewPanel').hide();
      //Materialize.toast('Folder deleted successfully!', 4000);
    });

    //Folder Title - Open
    $('#editFolderTitle_1').click(function(event){
      event.preventDefault();
      $('#editFormTitle').fadeIn("fast").removeClass('hide').addClass('active-form');
      $('#folderTitle_1').hide();
      //$('#folderTitleActions').hide();
      //Materialize.toast('Folder deleted successfully!', 4000);
    });

    //Folder Title - Save
    $('#editFormTitleSave').click(function(event){
      event.preventDefault();
      $('#editFormTitle').hide().addClass('hide').removeClass('active-form');
      $('#folderTitle_1').show();
      Materialize.toast('Folder title saved successfully!', 2000);
    });

    //Folder Title - Cancel
    $('#editFormTitleCancel').click(function(event){
      event.preventDefault();
      $('#editFormTitle').hide().addClass('hide').removeClass('active-form');
      $('#folderTitle_1').show();
    });


    //Folder Title - Delete
    $('#deleteFolderList_1').click(function(event){
      event.preventDefault();
      //$('tbody tr:first-child').remove();
      Materialize.toast('Folder deleted successfully!', 2000);
    });


    //Create Folder - Show Form
    // $('#createFolderButton').click(function(event){
    //   event.preventDefault();
    //   $(this).hide();
    //   $('#createNewFolder').fadeIn('fast').removeClass('hide').css('margin-top','30px');
    //   $('#listFolderViews').hide();
    //   //Materialize.toast('Folder deleted successfully!', 2000);
    // });


    //Create Folder - Create Button
    $('#createFolderSave').click(function(event){
      event.preventDefault();
      Materialize.toast('Folder created successfully!', 2000);
    });

    $('#emailChips').material_chip({
      data: [{
        tag: 'romain.ehrenfeld@lesjeudis.com',
      }, {
        tag: 'bambo.diaby@lesjeudis.com',
      }],
      placeholder: '+Email address',
    });

    $('#folderChips').material_chip({
      data: [{
        tag: 'Technician',
      }, {
        tag: 'Archi technique',
      }, {
        tag: 'CONSULTANT IBELEM',
      }],
      placeholder: '+Add folder',
      secondaryPlaceholder: '+Add folder',
    });

    $('#folderChips_00').material_chip({
      data: [{
        tag: 'Technician',
      }, {
        tag: 'Archi technique',
      }, {
        tag: 'CONSULTANT IBELEM',
      }],
      placeholder: '+Add folder',
      secondaryPlaceholder: '+Add folder',
    });

    $('.chips').on('chip.add', function(e, chip){
      // you have the added chip here
      Materialize.toast('Resume added!', 2000);
    });


    $('.chips').on('chip.delete', function(e, chip){
      // you have the deleted chip here
      Materialize.toast('Removed from folder!', 2000);
    });
    

    $('#folderChips_2').material_chip({
      placeholder: '+Add folder',
      secondaryPlaceholder: '+Add folder',
    });

    $('#folderChipsDetail_01').material_chip({
      data: [{
        tag: 'Technician',
      }, {
        tag: 'Archi technique',
      }, {
        tag: 'CONSULTANT IBELEM',
      }],
      placeholder: '+Add folder',
      secondaryPlaceholder: '+Add folder',
    });
    

    //Resume Details - plus d'information
    $('#showLess_1').hide();
    $('#showLess_2').hide();
    $('#showMore_1').click(function(event){
      event.preventDefault();
      $(this).hide();
      $('.gradient-shadow').hide();
      $('#showLess_1').fadeIn('slow');
      $('#card_01 .card-content').removeClass('small-height').addClass('full-height');
    });
    $('#showMore_2').click(function(event){
      event.preventDefault();
      $(this).hide();
      $('.gradient-shadow').hide();
      $('#showLess_2').show();
      $('#card_02 .card-content').removeClass('small-height').addClass('full-height');
    });

    //Resume Details - minus d'information
    $('#showLess_1').click(function(event){
      event.preventDefault();
      $(this).hide();
      $('.gradient-shadow').show();
      $('#showMore_1').show();
      $('#card_01 .card-content').removeClass('full-height').addClass('small-height');
    });
    $('#showLess_2').click(function(event){
      event.preventDefault();
      $(this).hide();
      $('.gradient-shadow').show();
      $('#showMore_2').show();
      $('#card_02 .card-content').removeClass('full-height').addClass('small-height');
    });
});

