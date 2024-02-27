/*
  # Changes in v1.0.1-Beta
  - fixed fa_advanced.min.css
*/

FAE.update_tag = 'https://github.com/SethClydesdale/forumactif-edge/releases/tag/v1.0.1-Beta';

FAE.update_step = [
  {
    info: 'Getting fa_advanced.min.css',
    type: 'GET',
    url: FAE.raw + 'css/fa_advanced.min.css',
    func: function (d) {
      var cssCode = FAE.translate ? FAE.translate({
        from: FAE.lang_current.css,
        to: FAE.lang_new.css
      }, d) : d;

      FAE.step[FAE.index + 1].data.edit_code = cssCode;
    }
  },
  {
    info: 'Installing fa_advanced.min.css',
    type: 'POST',
    url: 'part=themes&sub=logos&mode=css&extended_admin=1',
    data: {
      edit_code: '',
      submit: 'Submit'
    }
  }
];