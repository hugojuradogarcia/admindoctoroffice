function RegisterController(t,e){t.arrayAddress=[],t.arrayServices=[],t.status="  ",t.customFullscreen=!1,t.arrayAddress.push({question:"Dirección del consultorio completa 1",name:"address1"}),t.arrayServices.push({service:"",price:""}),t.addAddress=function(){var e=t.arrayAddress.length+1;3>=e&&t.arrayAddress.push({question:"Dirección del consultorio completa "+e,name:"address"+e})},t.addService=function(){var e=t.arrayServices.length+1;15>=e&&t.arrayServices.push({service:"",price:""})},t.week=[{day:"Lunes",hour_init:"",hour_final:"",enable:!1},{day:"Martes",hour_init:"",hour_final:"",enable:!1},{day:"Miercoles",hour_init:"","hour_fina l":"",enable:!1},{day:"Jueves",hour_init:"",hour_final:"",enable:!1},{day:"Viernes",hour_init:"",hour_final:"",enable:!1},{day:"Sábado",hour_init:"",hour_final:"",enable:!1},{day:"Domingo",hour_init:"",hour_final:"",enable:!1}],t.timeConsultation=["15","30","45","60"],t.gridOptions={data:[],sort:{predicate:"companyName",direction:"asc"}}}function PatientController(t){t.patientDischarge=new Date,t.maritalStatus=["Soltero","Casado"],t.calculateAge=function(){t.patientAge=moment().diff(t.patientBirthdate,"years")}}RegisterController.$inject=["$scope","$mdDialog"],PatientController.$inject=["$scope"],function(){"use strict";angular.module("doctorOffice",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","ngMaterial","toastr","ui.utils.masks","pascalprecht.translate","ngMask","md.data.table"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=t}angular.module("doctorOffice").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("doctorOffice").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,n,a,o){var i,r=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){r.type(t).pause()["delete"]()}),i=e.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(t){r.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){i()})}function n(t,e){function n(){return a().then(function(){t.info("Activated Contributors View")})}function a(){return e.getContributors(10).then(function(t){return o.contributors=t,o.contributors})}var o=this;o.contributors=[],n()}n.$inject=["$log","githubContributor"];var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:n,controllerAs:"vm"};return a}t.$inject=["malarkey"],angular.module("doctorOffice").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function n(n){function o(t){return t.data}function i(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return n||(n=30),e.get(a+"/contributors?per_page="+n).then(o)["catch"](i)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:a,getContributors:n};return o}t.$inject=["$log","$http"],angular.module("doctorOffice").factory("githubContributor",t)}(),angular.module("doctorOffice").controller("RegisterController",RegisterController),angular.module("doctorOffice").controller("PatientController",PatientController),function(){"use strict";function t(t,e,n){function a(){i(),t(function(){r.classAnimation="rubberBand"},4e3)}function o(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),r.classAnimation=""}function i(){r.awesomeThings=e.getTec(),angular.forEach(r.awesomeThings,function(t){t.rank=Math.random()})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1481744223078,r.showToastr=o,a()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("doctorOffice").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("doctorOffice").run(t)}(),function(){"use strict";function t(t){t.when("/",{templateUrl:"app/register/register.html",controller:"RegisterController",controllerAs:"register"}).when("/register",{templateUrl:"app/register/register.html",controller:"RegisterController",controllerAs:"register"}).when("/patient",{templateUrl:"app/patient/patient.html",controller:"PatientController",controllerAs:"patient"}).when("/report",{templateUrl:"app/report/report.html",controller:"ReportController",controllerAs:"report"}).otherwise({redirectTo:"/"})}t.$inject=["$routeProvider"],angular.module("doctorOffice").config(t)}(),function(){"use strict";angular.module("doctorOffice").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}function e(t){t.preferredLanguage("es")}function n(t){t.theme("default").primaryPalette("light-blue")}t.$inject=["$logProvider","toastrConfig"],e.$inject=["$translateProvider"],n.$inject=["$mdThemingProvider"],angular.module("doctorOffice").config(t).config(e).config(n)}(),angular.module("doctorOffice").run(["$templateCache",function(t){t.put("app/main/main.html","<div layout=column></div>"),t.put("app/patient/patient.html",'<md-content class=md-padding layout=column><div layout=row><h2>Registro del Paciente</h2></div><md-content layout-padding><div><form name=userForm flex=70 flex-offset=15><div layout-gt-sm=row layout=column layout-align="center top"><div flex=30><h5>Fecha de alta del paciente</h5><md-datepicker ng-model=patientDischarge md-placeholder="Fecha de alta"></md-datepicker></div><md-input-container class="md-block md-icon-float" flex=70><label>Nombre del paciente</label><md-icon class="fa fa-wheelchair-alt" aria-hidden=true></md-icon><input type=text name=patientName ng-model=patientName></md-input-container></div><div layout-gt-sm=row layout=column layout-align="center top"><div><h5>Fecha de nacimiento</h5><md-datepicker ng-model=patientBirthdate md-placeholder="Fecha de nacimiento" ng-change=calculateAge()></md-datepicker></div><md-input-container class=md-block flex=20><label>Edad</label><input type=text name=patientAge ng-model=patientAge disabled></md-input-container><md-input-container class=md-block flex=20><label>Estado civil</label><md-select ng-model=patientMaritalStatus><md-option ng-repeat="status in maritalStatus">{{status}}</md-option></md-select></md-input-container><md-input-container class=md-block flex=30><label>Ocupación</label><input type=text name=patientEmployment ng-model=patientEmployment></md-input-container></div><div layout-gt-sm=row layout=column layout-margin><md-input-container class=md-block flex=90 layout-padding><label>Dirección</label><input type=text name=patientAddress ng-model=patientAddress></md-input-container><md-input-container class=md-block flex=10 layout-padding><label>C.P.</label><input type=text name=patientZipCode ng-model=patientZipCode></md-input-container></div><div layout-gt-sm=row layout=column layout-margin><md-input-container class=md-block flex=90 layout-padding><label>Quien lo recomineda</label><input type=text name=patientRecommendation ng-model=patientRecommendation></md-input-container></div><div layout-gt-sm=row layout=column layout-margin><md-input-container class="md-block md-icon-float" flex layout-margin><label>Teléfono de casa</label><md-icon class="fa fa-phone" aria-hidden=true></md-icon><input type=text name=patientHomePhone ng-model=patientHomePhone ui-br-phone-number></md-input-container><md-input-container class="md-block md-icon-float" flex layout-margin><label>Teléfono celular</label><md-icon class="fa fa-mobile" aria-hidden=true></md-icon><input type=text name=patientMobilePhone ng-model=patientMobilePhone ui-br-phone-number></md-input-container><md-input-container class="md-block md-icon-float" flex layout-margin><label>Teléfono oficina</label><md-icon class="fa fa-building-o" aria-hidden=true></md-icon><input type=text name=patientOfficePhone ng-model=patientOfficePhone ui-br-phone-number></md-input-container></div></form></div></md-content></md-content>'),t.put("app/register/register.html",'<md-content class=md-padding layout=column><div layout=row><h2>Registro del Médico</h2></div><md-content layout-padding><div><form name=userForm flex=70 flex-offset=15><div layout-gt-sm=row layout=column><md-input-container class="md-block md-icon-float" flex layout-margin><label>Nombre completo</label><md-icon type=text class="fa fa-user-md" aria-hidden=true></md-icon><input type=text name=doctorNameFull ng-model=doctorNameFull class=upper-case></md-input-container><md-input-container class="md-block md-icon-float" flex layout-margin><label>Cedula profesional</label><md-icon class="fa fa-id-card" aria-hidden=true></md-icon><input type=text name=doctorIdentityCard ng-model=doctorIdentityCard mask=A?9? restrict=reject repeat=20></md-input-container><md-input-container class=md-block flex layout-margin><label>Especialidad</label><input type=text name=doctorSpecialty ng-model=doctorSpecialty></md-input-container></div><div><md-table-container><table md-table md-row-select multiple ng-model=selected md-progress=promise><thead md-head><tr md-row><th md-column ng-repeat="days in week"><md-button class="md-fab md-primary" aria-label={{days.day}}>{{days.day | limitTo: 1}}<md-tooltip>{{days.day}}</md-tooltip></md-button></th></tr></thead><tbody md-body><tr md-row><td md-cell ng-repeat="days in week"><md-input-container class=md-input-has-placeholder layout-padding layout-align="center center"><input type=text ng-model=days.hour_init placeholder=HH:mm ui-time-mask=short></md-input-container><md-input-container class=md-input-has-placeholder layout-padding layout-align="center center"><input type=text ng-model=days.hour_final aria-label=time ui-time-mask=short></md-input-container></td></tr></tbody></table></md-table-container><!--<md-list>\r\n<h3 class="md-title row">Horario de servicio</h3>\r\n\r\n<md-list-item>\r\n\r\n<div class="md-list-item-text" ng-repeat="days in week" layout-align="center center" layout="column" >\r\n<md-button class="md-fab md-primary" aria-label="{{days.day}}">{{days.day | limitTo: 1}}\r\n<md-tooltip>\r\n{{days.day}}\r\n</md-tooltip>\r\n</md-button>\r\n\r\n<md-input-container class="md-input-has-placeholder" layout-padding layout-align="center center">\r\n<input type="text" ng-model="days.hour_init" placeholder="HH:mm" ui-time-mask="short"/>\r\n</md-input-container>    \r\n\r\n<md-input-container class="md-input-has-placeholder" layout-padding layout-align="center center">\r\n<input type="text" ng-model="days.hour_final" aria-label="time" ui-time-mask="short"/>\r\n</md-input-container>\r\n\r\n</div>\r\n</md-list-item>\r\n</md-list> --></div><div layout=column><md-button class="md-raised md-default" ng-click=addAddress()>+ Nueva dirección</md-button><md-input-container class="md-block md-icon-float" ng-repeat="address in arrayAddress"><label>{{address.question}}</label><md-icon class="fa fa-address-card" aria-hidden=true></md-icon><input type=text name={{address.name}} ng.model=doctorAddress></md-input-container></div><div layout=column><md-button class="md-raised md-default" ng-click=addService()>+ Agregar servicio</md-button><div layout=row ng-repeat="service in arrayServices"><md-input-container class="md-block md-icon-float" layout=column flex=70><label>Servicio</label><md-icon class="fa fa-cart-plus" aria-hidden=true></md-icon><input type=text name={{service.name}} ng-model=doctorService></md-input-container><md-input-container class="md-block md-icon-float" layout=column flex=30><label>Costo</label><md-icon class="fa fa-usd" aria-hidden=true></md-icon><input type=text name={{service.price}} ng-model=doctorServicePrice ui-money-mask=2></md-input-container></div></div><div layout-gt-sm=row layout=column><md-input-container flex><label>Tiempo de consulta</label><md-select ng-model=doctorTime><md-option><em>None</em></md-option><md-option ng-repeat="time in timeConsultation">{{time}} min</md-option></md-select></md-input-container><md-switch class=md-primary aria-label=Asistente layout-padding layout-margin flex ng-model=doctorAssistant>Asistente virtual</md-switch><md-input-container class="md-block md-icon-float" flex layout-margin><label>Teléfono consultorio</label><md-icon class="fa fa-phone" aria-hidden=true></md-icon><input type=text name=officePhone ng-model=doctorOfficeNumber ui-br-phone-number></md-input-container></div><div layout-gt-sm=row layout=column><md-input-container class="md-block md-icon-float" flex layout-margin><label>Teléfono celular</label><md-icon class="fa fa-mobile" aria-hidden=true></md-icon><input type=text name=doctorMobilePhone ng-model=doctorMobilePhone ui-br-phone-number></md-input-container><md-input-container class="md-block md-icon-float" flex layout-margin><label>Email</label><md-icon class="fa fa-envelope" aria-hidden=true></md-icon><input type=email name=doctorEmail ng-model=doctorEmail></md-input-container></div></form></div></md-content></md-content>'),t.put("app/report/report.html","<md-content class=md-padding layout=column><div layout=row><h2>Reportes</h2></div></md-content>"),t.put("app/template/dialogSchedule.tmpl.html",'<!--<md-toolbar class="md-table-toolbar md-default">\r\n    <div class="md-toolbar-tools">\r\n        <span><i class="fa fa-calendar" aria-hidden="true"></i> Horarios</span>\r\n    </div>\r\n</md-toolbar>--><!-- exact table from live demo --> <!--<md-table-container layout="layout-padding">\r\n    <table md-table multiple ng-model="selected" md-progress="promise">\r\n\r\n        <thead md-head md-order="query.order" md-on-reorder="getDesserts">\r\n            <tr md-row>\r\n                <th md-column><span></span></th>  \r\n                <th md-column ng-repeat="days in week"><span><md-button class="md-fab md-primary">{{days.day | limitTo: 1}}\r\n                    </md-button></span></th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody md-body>\r\n\r\n        </tbody>\r\n\r\n    </table>\r\n</md-table-container>-->'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout-gt-sm=row layout=column><section flex layout=row layout-align="left center"><i class="fa fa-heartbeat fa-3x layout-padding" aria-hidden=true></i><md-button href=#register class="md-raised md-primary"><i class="fa fa-user-md" aria-hidden=true></i> Doctor</md-button><md-button href=#patient class="md-raised md-primary"><i class="fa fa-wheelchair-alt" aria-hidden=true></i> Paciente</md-button><md-button href=#report class="md-raised md-primary"><i class="fa fa-line-chart" aria-hidden=true></i> Reportes</md-button></section><div layout=column layout-align=end layout-padding><h4><span>Administrador de Consultorios Medicos</span></h4></div></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-4d7a25ae35.js.map
