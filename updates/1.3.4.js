/*

  # Changes in v1.3.4

  - fixed fa_advanced.min.css

*/

FAE.update_tag = 'https://github.com/SethClydesdale/forumactif-edge/releases/tag/v1.3.3';

FAE.update_step = [
  {
    info: 'Getting fa_advanced.min.css',
    type: 'GET',
    url: FAE.raw + 'css/fa_advanced.min.css',
    func: function(d) {
      FAE.step[FAE.index + 1].data.edit_code = d;
    }
  }
];