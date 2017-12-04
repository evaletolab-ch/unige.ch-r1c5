function appConfig(){}function appRun(n,e){}function WidensComponent(n,e,t){var a=n;a.criteria='{"cleGroupe":15740,"annee":2017}',a.toggle=!1,a.updateWidens=function(n,e){a.criteria=JSON.stringify(n),a.toggle=!1,window.scrollTo(0,0),e.preventDefault()}}function unigeMember(n,e,t,a,i){function r(e,r,s){var l=parseInt(s.mid||0);e.limit=parseInt(s.limit||1e6),e.offset=0;var o={bottom:i.get("/partials/member-center.html"),main:i.get("/partials/member-main.html"),right:i.get("/partials/member-right.html")};e.getTitle=function(n){if(t.title)return t.title[n+"_"+t.lang]},a.get(l).then(function(i){e["class"]=t.css.main,e.displayError=!0,e.layout="main",e.lang=t.lang,e.content={},console.log("-----------",i),e.content.cv_prof=i.cv_prof,t.layout.main.forEach(function(n){["cv_prof"].indexOf(n)>-1||(e.content[n]=a.pathObject(i.cv_prof,n))});var r=angular.element(t.selectors.right||""),s=e.$new();s.displayError=!1,s.content={},s["class"]=t.css.right,s.layout="right",t.layout.right.forEach(function(n){["cv_prof"].indexOf(n)>-1||(s.content[n]=a.pathObject(i.cv_prof,n))}),r.html(n(o.main)(s))},function(n){e.error=t.title["error_"+t.lang]+" "+l,e.details=n})}return{templateUrl:"/partials/member-main.html",restrict:"E",replace:!0,scope:{},link:r}}function unigeNav(n,e){function t(n,e,t){}return{templateUrl:"/partials/nav.html",restrict:"E",replace:!0,link:t}}function unigeSeo(n,e){function t(n,t,a){n.timeout=parseInt(a.timeout||0),n.json=a.json||"seo-a.json",setTimeout(function(){e({method:"GET",url:n.json}).then(function(e){n.title=e.data.title,n.content=e.data.content},function(n){console.log("------------ ERROR",n.data)})},n.timeout)}return{templateUrl:"/partials/seo-view.html",restrict:"E",replace:!0,scope:{},link:t}}function unigeVersion(){function n(n,e,t){}return{restrict:"E",template:'<span>R1C5 {{ "%VERSION%" | interpolate  }}</span>',link:n}}function widens(n,e,t,a){function i(n,i,r){n.progressbar=a.createInstance(),n.progressbar.setParent(i[0]),n.progressbar.setAbsolute(),n.select=function(e){return n.selectedCle===e?void(n.selectedCle=null):void(n.selectedCle=e)},r.$observe("criteria",function(){console.log("--------------unige-widens",r.criteria,i[0]),n.progressbar.start(),n.criteria=JSON.parse(r.criteria),n.result={loading:!0},n.method="Groupe_GetProgrammeEtudesOfCode",n.criteria.cleGroupe&&(n.method="Groupe_GetProgrammeEtudesOfKey"),r.code&&r.year&&(n.method="Groupe_GetProgrammeEtudesOfCode",n.criteria={codeProgrammeEtudes:r.code,annee:r.year}),r.key&&r.year&&(n.method="Groupe_GetProgrammeEtudesOfKey",n.criteria={cleGroupe:r.key,annee:r.year}),t.$promise.then(function(){n.server=t.widens&&t.widens.url||"https://cms2.unige.ch/ses/widens/widens.businessdata/webservice.jsonp.php?",n.selectedCle,e.get(n.server+"method="+n.method+"&criteria="+JSON.stringify(n.criteria),!0).then(function(e){n.result=e.data,n.result.loading=!1,n.progressbar.complete(),console.log("---",n.result)},function(n){console.log("------------ ERROR",n.data)})})})}return{templateUrl:"/partials/widens.html",restrict:"E",replace:!1,scope:{},link:i}}function widensGroup(n,e){function t(n,e,t){n.level=parseInt(t.level)+1}return{templateUrl:"/partials/widens-group.html",restrict:"E",replace:!1,scope:{group:"="},link:t}}function interpolate(n){return function(e){return String(e).replace(/\%VERSION\%/gm,n)}}function config(n,e){function t(){return!a}var a=angular.element("html").hasClass("nativejson"),i={lang:(angular.element("html").attr("lang")||"fr").toLowerCase(),SERVER:window.location.origin,isNative:t};return i.SERVER=a?"data/":window.location.origin+"/content.php?content=",i.$promise=e.get(i.SERVER+"config.json"),i.$promise.then(function(n){angular.extend(i,n.data),"fr"!==i.lang&&(i.lang="en")}),i}function http(n,e,t){function a(n,a){if(i&&!a)return e.get(n);var r=t.trustAsResourceUrl(n);return e.jsonp(r,{jsonpCallbackParam:"callback"})}var i=angular.element("html").hasClass("nativejson");return{get:a}}function member(n,e,t,a){function i(n){var a="cv_"+n+".json",i={};return t.$promise.then(function(){return e.get(t.SERVER+a)}).then(function(n){return angular.extend(i,n.data),i})}function r(n,e){return JSONPath("$."+e,n)}function s(n,e){return Array.isArray(n)?n.forEach(function(e,t){Array.isArray(e)||(n[t]=[e])}):void(n&&n[e]&&!Array.isArray(n[e])&&(n[e]=[n[e]]))}return{get:i,ensureArray:s,pathObject:r}}function version(n){return n}angular.module("app",["app.templates","ngSanitize","ngProgress"]).constant("VERSION","0.0.1").config(appConfig).run(appRun),appConfig.$inject=[],appRun.$inject=["$templateCache","$rootScope"],angular.element(document).ready(function(){angular.bootstrap(document,["app"])}),angular.module("app").component("widensPrograms",{templateUrl:"/partials/widens-programs.html",controller:WidensComponent}),WidensComponent.$inject=["$scope","$element","$attrs"],angular.module("app").directive("unigeMember",unigeMember),unigeMember.$inject=["$compile","$http","$config","$member","$templateCache"],angular.module("app").directive("unigeNav",unigeNav),unigeNav.$inject=["$parse","$http"],angular.module("app").directive("unigeSeo",unigeSeo),unigeSeo.$inject=["$parse","$http"],angular.module("app").directive("unigeVersion",unigeVersion),unigeVersion.$inject=[],angular.module("app").directive("unigeWidens",widens).directive("widensGroup",widensGroup),widens.$inject=["$parse","$$http","$config","ngProgressFactory"],widensGroup.$inject=["$parse","$$http"],angular.module("app").filter("interpolate",interpolate),interpolate.$inject=["$version"],angular.module("app").factory("$config",config),config.$inject=["VERSION","$$http"],angular.module("app").factory("$$http",http),http.$inject=["VERSION","$http","$sce"],angular.module("app").factory("$member",member),member.$inject=["VERSION","$$http","$config","$q"],angular.module("app").factory("$version",version),version.$inject=["VERSION"],function(){var n;try{n=angular.module("app.templates")}catch(e){n=angular.module("app.templates",[])}n.run(["$templateCache",function(n){n.put("/partials/member-center.html","<div>\n</div>")}])}(),function(){var n;try{n=angular.module("app.templates")}catch(e){n=angular.module("app.templates",[])}n.run(["$templateCache",function(n){n.put("/partials/member-main.html","<div>\n  <!-- on error -->\n  <div class=\"alert alert-danger\" ng-show=\"error&&displayError\">\n    <strong>Oopps!</strong> <span ng-bind-html=\"error\"></span>\n    <div class=\"hide small em\">{{details}}</div>\n  </div>\n  \n  <!-- cv_prof -->\n  <div class=\"{{class}}\" ng-bind-html=\"content.cv_prof['bio_'+lang]\"\n       ng-show=\"content['cv_prof']\"></div>\n\n\n  <!-- 'pedagogicExperiences.expped' -->\n  <div class=\"{{class}}\" ng-if=\"content['pedagogicExperiences.expped'][0].length\">\n    {{content['pedagogicExperiences.expped']}}\n  </div>\n\n  <!-- 'degrees.diplomas.diploma' -->\n  <div class=\"{{class}}\" ng-if=\"content['degrees.diplomas.diploma'][0].length\">\n    <h1 class=\"{{class}}-type\">{{getTitle('degrees.diplomas.diploma')}}</h1>\n    <div ng-repeat=\"diploma in content['degrees.diplomas.diploma'][0]\">\n      ° {{diploma.year}}, {{diploma.degree['@code']}}, {{diploma['lib_'+lang]}} \n    </div>\n  </div>\n\n  <!-- 'geographicAreas.geozone' -->\n  <div class=\"{{class}}\" ng-if=\"content['geographicAreas.geozone'][0].length\">\n    <h1 class=\"{{class}}-type\">{{getTitle('geographicAreas.geozone')}}</h1>\n    <div class=\"\" ng-repeat=\"geo in content['geographicAreas.geozone'][0]\" >\n      ° {{geo['lib_'+lang]}}\n    </div>        \n    \n  </div>\n\n  <!-- 'industrialDomains.inddom' -->\n  <div class=\"{{class}}\" ng-if=\"content['industrialDomains.inddom'][0].length\">\n    <h1 class=\"{{class}}-type\">{{getTitle('industrialDomains.inddom')}}</h1>\n    <div class=\"\" ng-repeat=\"industrialdom in content['industrialDomains.inddom'][0]\" >\n      ° {{industrialdom['lib_'+lang]}}\n    </div>        \n  </div>\n\n  <!-- 'researchDomains.themrec' -->\n  <div class=\"{{class}}\" ng-if=\"content['researchDomains.themrec'][0].length\">\n    <h1 class=\"{{class}}-type\">{{getTitle('researchDomains.themrec')}}</h1>\n    <div class=\"\" ng-repeat=\"researchdomain in content['researchDomains.themrec'][0]\" >\n      ° {{researchdomain['lib_'+lang]}}, {{researchdomain.researchDomain['lib_'+lang]}}\n    </div>        \n  </div>\n\n  <!-- 'teachingDomains.teachdom' -->\n  <div class=\"{{class}}\" ng-if=\"content['teachingDomains.teachdom'][0].length\">\n    <h1 class=\"{{class}}-type\">{{getTitle('teachingDomains.teachdom')}}</h1>\n    <div class=\"\" ng-repeat=\"teachdom in content['teachingDomains.teachdom'][0]\" >\n      ° {{teachdom['lib_'+lang]}}\n    </div>        \n  </div>\n\n  <!-- 'languages.language' -->\n  <div class=\"{{class}}\" ng-if=\"content['languages.language'][0].length\">\n    <h1 class=\"{{class}}-type\">{{getTitle('languages.language')}}</h1>\n    <div class=\"\" ng-repeat=\"teach in content['languages.language'][0]|filter:{teach:'true'}\" >\n      ° {{teach['lib_'+lang]}}\n    </div>        \n  </div>\n\n  <!-- 'otherActivities.otheActivity' -->\n  <div class=\"{{class}}\" ng-if=\"content['otherActivities.otheActivity'][0].length\">\n    {{content['otherActivities.otheActivity']}}\n  </div>\n\n  <!-- 'tutorings.tutoring' -->\n  <div class=\"{{class}}\" ng-if=\"content['tutorings.tutoring'][0].length\">\n    {{content['tutorings.tutoring']}}\n  </div>\n\n  <!-- 'grants.grant' -->\n  <div class=\"{{class}}\" ng-if=\"content['grants.grant'][0].length\">\n    <h1 class=\"{{class}}-type\">{{getTitle('grants.grant')}}</h1>\n    <div class=\"\" ng-repeat=\"grant in content['grants.grant'][0]\" >\n      ° {{grant.startdate}}, {{grant.typeGrant['lib_'+lang]}},{{grant.country['lib_'+lang]}}\n    </div>        \n  </div>\n\n  <!-- 'jobs' -->\n  <div class=\"{{class}}\" ng-if=\"content['jobs'][0].TitleJobs\">\n    <h1 class=\"{{class}}-type\">{{getTitle('jobs')}}</h1>\n    {{content['jobs']}}\n  </div>\n\n  <!-- 'support' -->\n  <div class=\"{{class}}\" ng-if=\"content['support'][0].length\">\n    {{content['support']}}\n  </div>\n\n  <!-- 'thesis.these' -->\n  <div class=\"{{class}}\" ng-if=\"content['thesis.these'][0].length\">\n    <h1 class=\"{{class}}-type\">{{getTitle('thesis.these')}}</h1>\n    <div class=\"\" ng-repeat=\"these in content['thesis.these'][0]\" ng-show=\"these.roleThese\">\n      ° {{these.thesis.year}}, {{these.roleThese['lib_'+lang]}}, {{these.thesis['lib_'+lang]}}\n    </div>        \n  </div>\n\n  <!-- 'certificates.certificate' -->\n  <div class=\"{{class}}\" ng-if=\"content['certificates.certificate'][0].length\">\n    {{content['certificates.certificate']}}\n  </div>\n\n  <!-- 'PositionJobs.facjob' -->\n  <div class=\"{{class}}\" ng-if=\"content['PositionJobs.facjob'][0].length\">\n    {{content['PositionJobs.facjob']}}\n  </div>\n\n  <!-- 'TitleJobs.facjob' -->\n  <div class=\"{{class}}\" ng-if=\"content['TitleJobs.facjob'][0].length\">\n    {{content['TitleJobs.facjob']}}\n  </div>\n\n\n  <!-- 'campus.campus' -->\n  <div class=\"{{class}}\" ng-if=\"content['campus.campus'][0].length\">\n    {{content['campus.campus']}}\n  </div>\n\n  <!-- 'institution' -->\n  <div class=\"{{class}}\" ng-if=\"content['institution'][0].length\">\n    {{content['institution']}}\n  </div>\n\n  <!-- 'program' -->\n  <div class=\"{{class}}\" ng-if=\"content['program'][0].length\">\n    {{content['program']}}\n  </div>\n\n  <!-- 'rubgen' -->\n  <div class=\"{{class}}\" ng-if=\"content['rubgen'][0].length\">\n    {{content['rubgen']}}\n  </div>\n\n  <!-- 'unit' -->\n  <div class=\"{{class}}\" ng-if=\"content['unit'][0].length\">\n    <h1 class=\"{{class}}-type\">{{getTitle('unit')}}</h1>\n    <div>° {{content['unit'][0]['lib_'+lang]}}</div> \n  </div>\n\n  <!-- 'typeContribs.typeContrib' -->\n  <div class=\"{{class}}\" ng-if=\"content['typeContribs.typeContrib'][0].length\">\n    <h1 class=\"{{class}}-type\">{{getTitle('typeContribs.typeContrib')}}</h1>\n    <div class=\"{{class}}\" ng-repeat=\"typecontrib in content['typeContribs.typeContrib'][0]\">\n        <h3 class=\"{{class}}-type\" ng-show=\"typecontrib.contribs.contrib.lenght\">{{typecontrib['@lib_'+lang]}}</h3> \n        <div class=\"{{class}}\" ng-repeat=\"contrib in typecontrib.contribs.contrib|limitTo:limit\">\n            <h4 class=\"{{class}}-title\">{{contrib.title}}</h4>\n            <p class=\"{{class}}-meta\">{{contrib.year}}  <a href=\"#\">{{contrib.support.name}}</a></p>\n            <p><span ng-bind-html=\"contrib['preview_'+lang]\"></span></p>\n        </div>    \n    </div>\n  </div>\n  <!-- 'typeContribs.typeContrib[*].contribs.contrib' -->\n  <!--<div class=\"{{class}}\" ng-if=\"content['typeContribs.typeContrib[*].contribs.contrib'][0].length\">\n    {{content['typeContribs.typeContrib[*].contribs.contrib']}}\n  </div>  -->\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")}])}(),function(){var n;try{n=angular.module("app.templates")}catch(e){n=angular.module("app.templates",[])}n.run(["$templateCache",function(n){n.put("/partials/member-right.html",'<!--\n  # Areas of expertise\n\n  Robust Statistics\n  Generalized Linear and Additive (Mixed) Models\n  Variable / Model Selection\n\n  # Teaching\n\n  Courses 2017-2018\n\n  # More information\n\n  Google Scholar Profile\n  Personal Page\n  LinkedIn Profile\n\n  CV (PDF / Word)\n-->\n\n<!-- \n/* **************************************************\n// member json hierarchy\n// cv_prof\n//  -  Unité académique\n//    cv_prof.unit{\n//      lib_(en|fr),typeunit.lib_(en|fr)\n//    }\n//  -  Domaine des cours\n//    cv_prof.teachingDomains.teachdom[{\n//      @code,lib_(en|fr),teachingDomain.lib_(en|fr)\n//    }]\n//  -  Domaine de recherche\n//    cv_prof.researchDomains.themrec[{\n//      @code,lib_(en|fr),researchDomain.lib_(en|fr)\n//    }]\n//  - liste des classes de publications\n//\t cv_prof.typeContribs.typeContrib[{\n//     @code, order,lib_en|fr,contribs\n//   }]\n//  - liste d\'une classe de publication\n//   cv_prof.typeContribs.typeContrib.$.contribs.contrib[{\n//     @id,\n//     title,\n//     preview_fr|en,\n//     abstr_fr|en,\n//     doi,\n//     year,\n//     support.name,\n//     langue.lib_en|fr,\n//     statpub.lib_en|fr,\n//     level.lib_en|fr,\n//     wfcontrib.lib_en|fr\n//   }]\n\n//\n// use of https://github.com/dchester/jsonpath\n*/-->  \n\n<div>\n  <div class="sidebar-module sidebar-module-inset">\n      <h4>Areas of expertise</h4>\n      <ul class="list-unstyled">\n      <li ng-repeat="domain in researchdomains">\n        {{domain[\'lib_\'+lang]}}  <span class="hide small ita">{{domain.researchDomain[\'lib_\'+lang]}}</span>\n      </li>\n      </ul>\n  </div>\n  <div class="sidebar-module">\n      <h4>Teaching</h4>\n      <ol class="list-unstyled">\n        <li ng-repeat="domain in teachingdomains">\n          {{domain[\'lib_\'+lang]}}  <span class=" small ita">({{domain.teachingDomain[\'lib_\'+lang]}})</span>\n        </li>\n      </ol>\n  </div>\n  <div class="sidebar-module">\n      <h4>More information</h4>\n      <ol class="list-unstyled">\n      <li><a href="#">GitHub</a></li>\n      <li><a href="#">Twitter</a></li>\n      <li><a href="#">Facebook</a></li>\n      </ol>\n  </div>\n</div>')}])}(),function(){var n;try{n=angular.module("app.templates")}catch(e){n=angular.module("app.templates",[])}n.run(["$templateCache",function(n){n.put("/partials/nav.html",'<div class="navbar navbar-default navbar-fixed-top" role="navigation">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class="navbar-header">\n        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n            <span class="sr-only">Toggle navigation</span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href="#!">R1C5 Seed</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class="collapse navbar-collapse navbar-ex1-collapse">\n        <ul class="nav navbar-nav">\n            <li class=""><a href="widens.html">widens</a></li>\n            <li class="hide"><a ui-sref="">option b</a></li>\n        </ul>\n    </div>\n    <!-- /.nav-collapse -->\n</div><!-- /.navbar -->\n')}])}(),function(){var n;try{n=angular.module("app.templates")}catch(e){n=angular.module("app.templates",[])}n.run(["$templateCache",function(n){n.put("/partials/widens-group.html",'<div>\n  <table class="table -table-condensed" ng-if="group.enseignements.length">\n    <thead class="">\n      <tr class="hide"><th colspan="3" class="text-center">{{subgroup.libelle}}</th></tr>      \n      <tr>\n        <th width="70%"></th><th width="25%"></th><th width="5%"></th>\n      </tr>\n    </thead>\n    <tr ng-repeat="enseignement in group.enseignements">\n      <td>{{enseignement.libelle}}</td>\n      <td><span class="label label-default">{{enseignement.codeMatiereAbrege}}</span></td>\n      <td><span class="badge">{{enseignement.credits}}</span></td>\n    </tr>\n  </table>      \n  \n\n  <div ng-if="group.groupes.length" class="level{{level}}" ng-repeat="subgroup in group.groupes">\n    <h4 class="list-group-item-heading">{{subgroup.libelle}}</h4>  \n    <table class="table -table-condensed" ng-if="subgroup.enseignements.length">\n      <thead class="">\n        <tr class="hide"><th colspan="3" class="text-center">{{subgroup.libelle}}</th></tr>      \n        <tr>\n          <th width="70%"></th><th width="25%"></th><th width="5%"></th>\n        </tr>\n      </thead>\n      <tr ng-repeat="enseignement in subgroup.enseignements">\n        <td>{{enseignement.libelle}}</td>\n        <td><span class="label label-default">{{enseignement.codeMatiereAbrege}}</span></td>\n        <td><span class="badge">{{enseignement.credits}}</span></td>\n      </tr>\n    </table>      \n\n    <!-- LEVEL {{level}} -->\n    <widens-group level="{{level}}" group="subgroup"></widens-group>\n  </div>\n</div>')}])}(),function(){var n;try{n=angular.module("app.templates")}catch(e){n=angular.module("app.templates",[])}n.run(["$templateCache",function(n){n.put("/partials/widens-programs.html",'<div class="widens-programs" >\n    <h2>WIDENS - testing</h2>\n    <code>\n        &lt;unige-widens criteria="{{criteria}}"&gt;&lt;/unige-widens&gt;<br/>\n    </code>\n    <hr/>\n\n  \n  <unige-widens criteria="{{criteria}}" ng-class="!toggle?\'display\':\'\'"></unige-widens>\n  <hr/>\n\n  <h3>\n    <i class="glyphicon glyphicon-zoom-in"></i>\n    <a href="" ng-click="toggle=!toggle;">Extraction Docx des données des plans d\'études </a>\n  </h3>\n  <hr/>\n  <!-- NEWLINE -->\n  <div ng-class="toggle?\'display\':\'\'" class="programs-toggle">\n    <h4>Baccalauréats GSEM</h4>\n    <table width="100%" cellpadding="4" cellspacing="0">\n        <colgroup>\n            <col width="105"/>\n            <col width="482"/>\n        </colgroup>\n        <tbody>\n            <tr>\n                <td height="19">\n                    <p>\n                        <b>Code</b>\n                    </p>\n                </td>\n                <td width="482">\n                    <p>\n                        <a></a>\n                        <b>Nom plan d\'études et lien vers le plan d’étude</b>\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td height="20">\n                    <p>\n                        S5ECOMA\n                    </p>\n                </td>\n                <td width="482">\n                    <p>\n                        <a\n                            href="#" ng-click="updateWidens({codeProgrammeEtudes:\'S5ECOMA\',annee:2017},$event)"\n                        >\n                            Baccalauréat universitaire en économie et management\n                        </a>\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td height="20">\n                    <p>\n                        S5ECOMA+ \n                    </p>\n                </td>\n                <td width="482">\n                    <p>\n                        <a\n                            href="#" ng-click="updateWidens({cleGroupe:15740,annee:2017},$event)"\n                        >\n                            Baccalauréat universitaire en économie et management (dès 2017)\n                        </a>\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td height="20">\n                    <p>\n                        S5HEC\n                    </p>\n                </td>\n                <td width="482">\n                    <p>\n                        <a\n                            href="#" ng-click="updateWidens({codeProgrammeEtudes:\'S5HEC\',annee:2017},$event)"\n                        >\n                            Baccalauréat universitaire en gestion d\'entreprise\n                            (HEC)\n                        </a>\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td height="20">\n                    <p>\n                        S5ECO\n                    </p>\n                </td>\n                <td width="482">\n                    <p>\n                        <a\n                            href="#" ng-click="updateWidens({codeProgrammeEtudes:\'S5ECO\',annee:2017},$event)"\n                        >\n                            Baccalauréat universitaire en sciences économiques\n                        </a>\n                    </p>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <hr/>\n    <!-- NEWLINE -->\n    <h4>Maîtrises GSEM</h4>\n    <table width="100%" cellpadding="4" cellspacing="0">\n        <colgroup>\n            <col width="105"/>\n            <col width="481"/>\n        </colgroup>\n        <tbody>\n            <tr valign="top">\n                <td height="14">\n                    <p>\n                        <b>Code</b>\n                    </p>\n                </td>\n                <td width="481">\n                    <p>\n                        <b>Nom plan d\'études et lien vers le plan d’étude</b>\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td height="15">\n                    <p>\n                        S6STAT\n                    </p>\n                </td>\n                <td width="481" valign="top">\n                    <p>\n                        <a\n                            href="#" ng-click="updateWidens({codeProgrammeEtudes:\'S6STAT\',annee:2017},$event)"\n                        >\n                            Maîtrise universitaire en statistique\n                        </a>\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td height="27">\n                    <p align="justify">\n                        S6COMTRAD\n                    </p>\n                </td>\n                <td width="481" valign="top">\n                    <p>\n                        <a\n                            href="#" ng-click="updateWidens({cleGroupe:12926,annee:2017},$event)"\n                        >\n                            Maîtrise universitaire en commerce international,\n                            financement des matières premières/marchandises et\n                            transport maritime\n                        </a>\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td height="15">\n                    <p>\n                        S6MAN\n                    </p>\n                </td>\n                <td width="481" valign="top">\n                    <p>\n                        <a\n                            href="#" ng-click="updateWidens({codeProgrammeEtudes:\'S6MAN\',annee:2017},$event)"\n                        >\n                            Maîtrise universitaire en gestion d\'entreprise\n                        </a>\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td height="15">\n                    <p>\n                        S6ECO\n                    </p>\n                </td>\n                <td width="481" valign="top">\n                    <p>\n                        <a\n                            href="#" ng-click="updateWidens({codeProgrammeEtudes:\'S6ECO\',annee:2017},$event)"\n                        >\n                            Maîtrise universitaire en sciences économiques\n                        </a>\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td height="15">\n                    <p>\n                        S6ECO90\n                    </p>\n                </td>\n                <td width="481" valign="top">\n                    <p>\n                        <a\n                            href="#" ng-click="updateWidens({codeProgrammeEtudes:\'S6ECO90\',annee:2017},$event)"\n                        >\n                            Maîtrise universitaire en sciences économiques\n                        </a>\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td height="15">\n                    <p>\n                        S6GEM\n                    </p>\n                </td>\n                <td width="481" valign="top">\n                    <p>\n                        <a\n                            href="#" ng-click="updateWidens({codeProgrammeEtudes:\'S6GEM\',annee:2017},$event)"\n                        >\n                            Maîtrise universitaire en gestion de patrimoine\n                        </a>\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td height="15">\n                    <p>\n                        S6MCCF\n                    </p>\n                </td>\n                <td width="481" valign="top">\n                    <p>\n                        <a\n                            href="#" ng-click="updateWidens({codeProgrammeEtudes:\'S6MCCF\',annee:2017},$event)"\n                        >\n                            Maîtrise interuniversitaire en\n                            comptabilité-contrôle-finance\n                        </a>\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td height="15">\n                    <p>\n                        S6BUSAN\n                    </p>\n                </td>\n                <td width="481" valign="top">\n                    <p>\n                        <a\n                            href="#" ng-click="updateWidens({codeProgrammeEtudes:\'S6BUSAN\',annee:2017},$event)"\n                        >\n                            Maîtrise universitaire en business analytics\n                        </a>\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td height="14">\n                    <p>\n                        S6TRA\n                    </p>\n                </td>\n                <td width="481" valign="top">\n                    <p>\n                        <a\n                            href="#" ng-click="updateWidens({codeProgrammeEtudes:\'S6TRA\',annee:2017},$event)"\n                        >\n                            Maîtrise universitaire en négoce des matières premières\n                        </a>\n                    </p>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n    <hr/>\n    <!-- NEWLINE -->\n    <h4>Certificat GSEM</h4>\n    <table width="100%" cellpadding="4" cellspacing="0" class="table">\n        <colgroup>\n            <col width="105"/>\n            <col width="482"/>\n        </colgroup>\n        <tbody>\n            <tr>\n                <td height="19">\n                    <p>\n                        <b>Code</b>\n                    </p>\n                </td>\n                <td width="482">\n                    <p>\n                        <b>Nom plan d\'études et lien vers le plan d’étude</b>\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td height="19">\n                    <p>\n                        S5CCSTAP\n                    </p>\n                </td>\n                <td width="482">\n                    <p>\n                        <a\n                            href="#" ng-click="updateWidens({codeProgrammeEtudes:\'S5CCSTAP\',annee:2017},$event)"\n                        >\n                            Certificat complémentaire en statistiques appliquées\n                        </a>\n                    </p>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <hr/>\n    <!-- NEWLINE -->\n    <h4>Doctorats GSEM</h4>\n    <table width="100%" cellpadding="4" cellspacing="0" class="table">\n        <colgroup>\n            <col width="105"/>\n            <col width="482"/>\n        </colgroup>\n        <tbody>\n            <tr>\n                <td height="19">\n                    <p>\n                        <b>Code</b>\n                    </p>\n                </td>\n                <td width="482">\n                    <p>\n                        <b>Nom plan d\'études et lien vers le plan d’étude</b>\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td height="20">\n                    <p>\n                        S4ECOPO\n                    </p>\n                </td>\n                <td width="482">\n                    <p>\n                        <a\n                            href="#" ng-click="updateWidens({codeProgrammeEtudes:\'S4ECOPO\',annee:2017},$event)"\n                        >\n                            Doctorat en économie\n                        </a>\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td height="19">\n                    <p>\n                        S4ECOME\n                    </p>\n                </td>\n                <td width="482">\n                    <p>\n                        <a\n                            href="#" ng-click="updateWidens({codeProgrammeEtudes:\'S4ECOME\',annee:2017},$event)"\n                        >\n                            Doctorat en économétrie\n                        </a>\n                    </p>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n  </div>\n\n</div>')}])}(),function(){var n;try{n=angular.module("app.templates")}catch(e){n=angular.module("app.templates",[])}n.run(["$templateCache",function(n){n.put("/partials/widens.html",'<div class="widens-container">\n  <h2 ng-show="result.loading">Chargement...</h2>\n  <h2 ng-hide="result.content||result.loading" class="ng-cloak">\n    Pas de résultats   \n  </h2>\n  <h4 style="margin-left:10px">{{result.content.libelle}}</h4>\n  <div class="subtitle" ng-bind-html="result.content.text"></div>\n  <div ng-repeat="group in result.content.groupes" class="list-group">\n    <a href="" class="list-group-item " \n       ng-class="(selectedCle===group.cleGroupe)?\'selected\':\'\'"\n       ng-show="group.libelle"\n       ng-click="select(group.cleGroupe)">\n      <h4 class="list-group-item-heading"><i class="glyphicon glyphicon-th-list"></i> {{group.libelle}}</h4>\n    </a>\n\n    <!-- LEVEL 2 \n    -->\n    <widens-group level="0" group="group" ng-if="selectedCle===group.cleGroupe"></widens-group>\n  </div>\n  <hr/>\n</div>')}])}();