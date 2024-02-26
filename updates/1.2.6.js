/*

  # Changes in v1.2.6

  - Updated suggestions and feedback footer link.

*/

FAE.update_tag = 'https://github.com/diogorocha18/ForumotionAdvanced/releases/tag/v1.2.6';

FAE.update_step = [
  {
    info : 'Getting template overall_footer_end.html',
    type : 'GET',
     url : '/admin/index.forum?part=themes&sub=templates&mode=edit_main&t=133&l=main&extended_admin=1&tid=' + FAE.tid,
    func : function(d) {
      var form = $('form[name="post"]', d)[0];

      if (form) {
        FAE.step[FAE.index + 1].data.template = form.template.value
                                                .replace('http://fmdesign.forumotion.com/t701-ForumotionAdvanced-suggestions-and-feedback#13925', 'https://github.com/diogorocha18/ForumotionAdvanced/wiki/Suggestions-and-Feedback');
      }
    }
  },


  {
    info : 'Updating template overall_footer_end.html',
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
  }
];