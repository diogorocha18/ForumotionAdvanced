// installation instructions
FAE.step = [

  {
    info : 'Changing forum version to PunBB',
    type : 'POST',
     url : 'part=themes&sub=styles&mode=version&extended_admin=1',
    data : {
                 tpl : 'punbb',
          keep_theme : 1,
                code : 1,
      change_version : 'Save'
    }
  },


  {
    info : 'Unoptimizing and deactivating default CSS',
    type : 'POST',
     url : 'part=themes&sub=logos&mode=css&extended_admin=1',
    data : {
      allow_css_perso : 0,
             css_base : 0,
         optimize_css : 0,
      submit_base_css : 'Save'
    }
  },


  {
    info : 'Getting and deleting all JavaScript files to prevent installation errors',
    type : 'GET',
     url : '/admin/?mode=js&part=modules&sub=html&tid=' + FAE.tid,
    func : function(d) {
      var form = $('#pageListHtml', d),
          file = $('input[type="checkbox"]', form),
          i = 0,
          j = file.length;

      if (form[0]) {
        for (; i < j; i++) {
          file[i].checked = true;
        }

        $.post(form[0].action, form.serialize() + '&attachments_submit=Delete', function(d) {
          var confirmation = $('form[method="post"]', d);
          $.post(confirmation[0].action, confirmation.serialize() + '&confirm=Yes');
        });
      }
    }
  },


  {
    info : 'Enabling JavaScript codes management',
    type : 'POST',
     url : 'part=modules&sub=html&mode=js_delete&extended_admin=1',
    data : {
      allow_js_module : 1,
          conf_submit : 'Save'
    }
  },


  {
    info : 'Getting all.js',
    type : 'GET',
     url : FAE.raw + 'javascripts/in-all-the-pages/all.js',
    func : function(d) {
      FAE.step[FAE.index + 1].data.content =
      FAE.translate ?
        FAE.translate({
          from : FAE.lang_current.javascripts['[FA EDGE] ALL.JS'],
            to : FAE.lang_new.javascripts['[FA EDGE] ALL.JS']
        },
          d.replace(
            "FAE.board_lang = 'English';",
            "FAE.board_lang =  '"+ FAE.lang_new.language +"';"
          )
        ) : d;
    }
  },


  {
    info : 'Installing all.js',
    type : 'POST',
     url : 'part=modules&sub=html&mode=js_edit&extended_admin=1',
    data : {
                 title : '[FA EDGE] ALL.JS',
      'js_placement[]' : 'allpages',
                  mode : 'save',
                submit : 'Submit'
    }
  },


  {
    info : 'Getting homepage.js',
    type : 'GET',
     url : FAE.raw + 'javascripts/in-the-homepage/homepage.js',
    func : function(d) {
      FAE.step[FAE.index + 1].data.content = d;
    }
  },


  {
    info : 'Installing homepage.js',
    type : 'POST',
     url : 'part=modules&sub=html&mode=js_edit&extended_admin=1',
    data : {
                 title : '[FA EDGE] HOMEPAGE.JS',
      'js_placement[]' : 'index',
                  mode : 'save',
                submit : 'Submit'
    }
  },


  {
    info : 'Getting topics.js',
    type : 'GET',
     url : FAE.raw + 'javascripts/in-the-topics/topics.js',
    func : function(d) {
      FAE.step[FAE.index + 1].data.content =
      FAE.translate ?
        FAE.translate({
          from : FAE.lang_current.javascripts['[FA EDGE] TOPICS.JS'],
            to : FAE.lang_new.javascripts['[FA EDGE] TOPICS.JS']
        }, d) : d;
    }
  },


  {
    info : 'Installing topics.js',
    type : 'POST',
     url : 'part=modules&sub=html&mode=js_edit&extended_admin=1',
    data : {
                 title : '[FA EDGE] TOPICS.JS',
      'js_placement[]' : 'viewtopic',
                  mode : 'save',
                submit : 'Submit'
    }
  },


  {
    info : 'Getting version-data.js',
    type : 'GET',
     url : FAE.raw + 'javascripts/version-data.js',
    func : function(d) {
      FAE.step[FAE.index + 1].data.content = d;
    }
  },


  {
    info : 'Installing version-data.js',
    type : 'POST',
     url : 'part=modules&sub=html&mode=js_edit&extended_admin=1',
    data : {
                 title : '[FA EDGE] VERSION-DATA.JS',
      'js_placement[]' : 'allpages',
                  mode : 'save',
                submit : 'Submit'
    }
  },

  {
    info : 'Getting template index_body.html',
    type : 'GET',
     url : FAE.raw + 'templates/general/index_body.html',
    func : function(d) {
      FAE.step[FAE.index + 1].data.template = d;
    }
  },


  {
    info : 'Installing template index_body.html',
    type : 'POST',
     url : 'part=themes&sub=templates&mode=edit_main&extended_admin=1',
    data : {
             t : 110,
             l : 'main',
      tpl_name : 'index_body',
        submit : 'Save'
    }
  },


  {
    info : 'Publishing template index_body.html',
    type : 'PUBLISH',
     tpl : 110
  },


  {
    info : 'Getting template index_box.html',
    type : 'GET',
     url : FAE.raw + 'templates/general/index_box.html',
    func : function(d) {
      FAE.step[FAE.index + 1].data.template = d;
    }
  },


  {
    info : 'Installing template index_box.html',
    type : 'POST',
     url : 'part=themes&sub=templates&mode=edit_main&extended_admin=1',
    data : {
             t : 111,
             l : 'main',
      tpl_name : 'index_box',
        submit : 'Save'
    }
  },


  {
    info : 'Publishing template index_box.html',
    type : 'PUBLISH',
     tpl : 111
  },

  {
    info : 'Getting template memberlist_body.html',
    type : 'GET',
     url : FAE.raw + 'templates/general/memberlist_body.html',
    func : function(d) {
      FAE.step[FAE.index + 1].data.template = d;
    }
  },

  {
    info : 'Getting template overall_footer_begin.html',
    type : 'GET',
     url : FAE.raw + 'templates/general/overall_footer_begin.html',
    func : function(d) {
      FAE.step[FAE.index + 1].data.template = d;
    }
  },


  {
    info : 'Installing template overall_footer_begin.html',
    type : 'POST',
     url : 'part=themes&sub=templates&mode=edit_main&extended_admin=1',
    data : {
             t : 115,
             l : 'main',
      tpl_name : 'overall_footer_begin',
        submit : 'Save'
    }
  },


  {
    info : 'Publishing template overall_footer_begin.html',
    type : 'PUBLISH',
     tpl : 115
  },


  {
    info : 'Getting template overall_footer_end.html',
    type : 'GET',
     url : FAE.raw + 'templates/general/overall_footer_end.html',
    func : function(d) {
      FAE.step[FAE.index + 1].data.template =
      FAE.translate ?
        FAE.translate({
          from : FAE.lang_current.templates['overall_footer_end.html'],
            to : FAE.lang_new.templates['overall_footer_end.html']
        }, d) : d;
    }
  },


  {
    info : 'Installing template overall_footer_end.html',
    type : 'POST',
     url : 'part=themes&sub=templates&mode=edit_main&extended_admin=1',
    data : {
             t : 133,
             l : 'main',
      tpl_name : 'overall_footer_end',
        submit : 'Save'
    }
  },


  {
    info : 'Publishing template overall_footer_end.html',
    type : 'PUBLISH',
     tpl : 133
  },


  {
    info : 'Getting template overall_header.html',
    type : 'GET',
     url : FAE.raw + 'templates/general/overall_header.html',
    func : function(d) {
      FAE.step[FAE.index + 1].data.template =
      FAE.translate ?
        FAE.translate({
          from : FAE.lang_current.templates['overall_header.html'],
            to : FAE.lang_new.templates['overall_header.html']
        }, d) : d;
    }
  },


  {
    info : 'Installing template overall_header.html',
    type : 'POST',
     url : 'part=themes&sub=templates&mode=edit_main&extended_admin=1',
    data : {
             t : 116,
             l : 'main',
      tpl_name : 'overall_header',
        submit : 'Save'
    }
  },


  {
    info : 'Publishing template overall_header.html',
    type : 'PUBLISH',
     tpl : 116
  },

  {
    info : 'Getting template topics_list_box.html',
    type : 'GET',
     url : FAE.raw + 'templates/general/topics_list_box.html',
    func : function(d) {
      FAE.step[FAE.index + 1].data.template = d;
    }
  },


  {
    info : 'Installing template topics_list_box.html',
    type : 'POST',
     url : 'part=themes&sub=templates&mode=edit_main&extended_admin=1',
    data : {
             t : 124,
             l : 'main',
      tpl_name : 'topics_list_box',
        submit : 'Save'
    }
  },


  {
    info : 'Publishing template topics_list_box.html',
    type : 'PUBLISH',
     tpl : 124
  },

  {
    info : 'Getting template viewforum_body.html',
    type : 'GET',
     url : FAE.raw + 'templates/general/viewforum_body.html',
    func : function(d) {
      FAE.step[FAE.index + 1].data.template = d;
    }
  },


  {
    info : 'Installing template viewforum_body.html',
    type : 'POST',
     url : 'part=themes&sub=templates&mode=edit_main&extended_admin=1',
    data : {
             t : 125,
             l : 'main',
      tpl_name : 'viewforum_body',
        submit : 'Save'
    }
  },


  {
    info : 'Publishing template viewforum_body.html',
    type : 'PUBLISH',
     tpl : 125
  },

  {
    info : 'Getting template viewtopic_body.html',
    type : 'GET',
     url : FAE.raw + 'templates/general/viewtopic_body.html',
    func : function(d) {
      FAE.step[FAE.index + 1].data.template =
      FAE.translate ?
        FAE.translate({
          from : FAE.lang_current.templates.logged_out_reply,
            to : FAE.lang_new.templates.logged_out_reply
        }, d) : d;
    }
  },


  {
    info : 'Installing template viewtopic_body.html',
    type : 'POST',
     url : 'part=themes&sub=templates&mode=edit_main&extended_admin=1',
    data : {
             t : 127,
             l : 'main',
      tpl_name : 'viewtopic_body',
        submit : 'Save'
    }
  },


  {
    info : 'Publishing template viewtopic_body.html',
    type : 'PUBLISH',
     tpl : 127
  },

  {
    info : 'Getting template overall_header.html (mobile)',
    type : 'GET',
     url : FAE.raw + 'templates/mobile-version/overall_header.html',
    func : function(d) {
      FAE.step[FAE.index + 1].data.template = d;
    }
  },


  {
    info : 'Installing template overall_header.html (mobile)',
    type : 'POST',
     url : 'part=themes&sub=templates&mode=edit_main&extended_admin=1',
    data : {
             t : 1010,
             l : 'mobile',
      tpl_name : 'overall_header',
        submit : 'Save'
    }
  },


  {
       info : 'Publishing template overall_header.html (mobile)',
       type : 'PUBLISH',
        tpl : 1010,
     mobile : 1,
  },


  {
     info : 'Enabling custom templates',
     type : 'POST',
      url : 'mode=main&part=themes&sub=templates',
     data : {
       switchTemplates : 2,
                submit : 'Save'
     }
  },

  {
     info : 'Creating navigation link for control panel',
     type : 'GET',
      url : '/admin/?part=themes&sub=index&mode=navbar&extended_admin=1&tid=' + FAE.tid,
     func : function(d) {
       for (var a = $('fieldset tr', d), i = 0, j = a.length, regex = new RegExp('ForumotionAdvanced CP|' + window.location.pathname, 'ig'), hit = false; i < j; i++) {
         if (regex.test(a[i].innerHTML)) {
           hit = true;
           break;
         }
       }

       if (!hit) {
         $.post('/admin/?part=themes&sub=index&mode=navbar&tid=' + FAE.tid, {
           navbar_menu : 'ForumotionAdvanced CP',
           navbar_image : '',
           navbar_text : 'ForumotionAdvanced CP',
           navbar_url : window.location.pathname,
           navbar_admin : true,
           action : 'insert',
           submit : 'Save'
         });
       }

     }
  },


  {
    info : 'Resynchronizing forum',
    type : 'POST',
     url : 'mode=general&part=general&sub=general',
    data : {
      resync : 'on',
      submit : 'Save'
    }
  }
];

FAE.index = -1;
FAE.quota = FAE.step.length;

// proceed to and execute the next step in the installation
FAE.next = function() {
  if (++FAE.index >= FAE.quota) {
    FAE.log('Installation of Forumotion Advanced has been completed successfully!', 'color:#8B5;font-weight:bold;');
    FAE.log('When you\'re finished, please <a href="javascript:window.location.reload();">click here</a> to reload the page and experience your forum in a whole new way!');

  } else {
    var step = FAE.step[FAE.index];
    FAE.log(step.info + '...');

    if (step.type == 'POST') {
      $.post('/admin/?' + step.url + FAE.tid, FAE.Encode(step.data), function() {
        window.setTimeout(FAE.next, FAE.delay);
      }).error(FAE.error);

    } else if (step.type == 'GET') {
      $.get(step.url, function(d) {
        step.func(d);
        window.setTimeout(FAE.next, FAE.delay);
      }).error(FAE.error);

    } else if (step.type == 'PUBLISH') {
      $.get('/admin/?part=themes&sub=templates&mode=edit_main&main_mode=edit&extended_admin=1&t=' + step.tpl + '&l=' + ( step.mobile ? 'mobile' : 'main' ) + '&pub=1&tid=' + FAE.tid, function() {
        window.setTimeout(FAE.next, FAE.delay);
      }).error(FAE.error);
    }

  }

  FAE.progress();
};

// handler in case of any errors in the installation process
FAE.error = function() {
  FAE.log('An error was encountered on step ' + FAE.index + ' (' + FAE.step[FAE.index].info + ') of the installation process. Please <a href="https://github.com/diogorocha18/ForumotionAdvanced/wiki/Support-and-Discussion" target="_blank">open a new issue</a> and provide this information for further assistance.', 'color:#E53;font-weight:bold;');
  window.setTimeout(FAE.next, 1000);
};
