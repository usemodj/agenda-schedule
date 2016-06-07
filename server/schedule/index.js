/**
 * Created by jinny on 16. 6. 7.
 */
export default function(config) {
  var showMessageJob = require('./jobs/showMessage');

  // Setup agenda
  var Agenda = require("agenda");
  //var agenda = new Agenda({db: { address: 'localhost:27017/agenda-schedule'}});
  console.log(config.mongo.uri)
  var agenda = new Agenda({db: { address: config.mongo.uri, collection: 'agendaJobs'}});

  agenda.on('ready', function(){
    showMessageJob.showMessage(agenda);
    agenda.every('5 seconds', 'show message');
  });

  agenda.start();
  return agenda;
}
