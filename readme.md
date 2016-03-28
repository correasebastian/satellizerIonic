*ayudas 
https://carlosazaustre.es/blog/autenticacion-con-token-en-angularjs/

https://c9.io/pdro/satellizer-example

http://carlosazaustre.es/blog/autenticacion-con-token-en-node-js/

https://medium.com/@barryvdh/oauth-in-javascript-apps-with-angular-and-lumen-using-satellizer-and-laravel-socialite-bb05661c0d5c#.5ulidpbj8

https://scotch.io/tutorials/token-based-authentication-for-angularjs-and-laravel-apps

http://sahatyalkabov.com/build-an-instagram-clone-using-angularjs-satellizer-nodejs-and-mongodb/


https://developers.facebook.com/docs/facebook-login/access-tokens#usertokens

#passportJS
http://passportjs.org/
https://github.com/jaredhanson/passport-facebook
http://martinmicunda.com/2015/04/14/build-ionic-photo-gallery-app-II/

https://github.com/kumartarun/Ionic-passport-Angular

#asp
https://thewayofcode.wordpress.com/tag/facebook-access-token/


##strongLoop loopback
https://strongloop.com/strongblog/part-1-ionic-loopback-node-js-mobile/

#css
https://medium.com/@fat/mediums-css-is-actually-pretty-fucking-good-b8e2a6c78b06#.xsqkusez9

https://devdactic.com/restful-api-user-authentication-1/


#aqui sucede la magia
 Oauth2.exchangeForToken = function(oauthData, userData) 
 de facebook recivo un objeto asi
 oauthData =  {code: "AQAQ7JNb99q7SwmaJyZkVdHddqlLFic3a7wrsdVq5MoYx4NVel…mBSiSbeK5nOggV64RHWuhMvNhDyD3hMa5tQ1RjzyDqlhEDw7g", _: "_"}

 clientId
:
"562507727240991"
code
:
"AQB4Km5U9GfSaPK01lSvEjWLiGhCzdArYooFWqCCt5Qn7qSR-EXuPi1Loez2UdzYcB-fz7kokoaispWhplSsXm5W7opPf2as4F1LOeE9OfrGCVXEPFmInc5Z22hO8p_JwNAo1u1dntYZIgQHLgkQgdyM7U2uzm12gnkVP3SpXHmF5w0sVWwcnb_MY-eYMEWpOQiN3TsxEa3NX3kQHduOFTM8Z_9XQXTnRPzlUx1EYQCyFglUN7WL-UaV-k9R__Fco-RUXvyRjaTF93IwjKG8iBrTIwAoIjUXi3uQFLoAw9uoOo4SOWkuopb09T2bvZbZbtw"
redirectUri
:
"http://localhost:8100/"


 "client_secret": "caa8da83a7f8bfb59d68a8eba0ab2aca",
    "grant_type": "authorization_code"
    clientId
:
"562507727240991"
code
:
"AQCImSe1PNRsoXk5RW9e50cu2hnT7tQ0yHiut_IoQFI2IY2UdwJ2eLKM3DhwPUeeNoXfmMt70V4QEDYIhw3LYuaIq61uYCGRqudDZATNJaTwvL1uGeRi3s0ungtQkVWc_Wda7wjnCtVBnl4q9zl7n8Z04N-fUhmce1KsMohWE7HtepshZciTgOBwmhntF3K1qls5FAEeeuMvghWr8zJ446v8LSXhcFTf9f37LCr5aIS_C1Iu2197ZcgH0_ropfB6KZhOdc3bQ4nZ3GnW-sVTAgItu0SaPCWbcIOg0NvtXFAoOKMJ7BqbgeuTebWUJGqvyRM"
redirectUri
:
"http://localhost:8100/"

https://developers.google.com/oauthplayground/



https://hackhands.com/building-instagram-clone-angularjs-satellizer-nodejs-mongodb/

http://oauthlib.readthedocs.org/en/latest/oauth2/grants/implicit.html

#AUTH0
https://github.com/auth0/angular-jwt

#resolve auth
http://stackoverflow.com/questions/29933474/angularjs-using-ui-router-resolve-for-authentication

https://devdactic.com/user-auth-angularjs-ionic/

https://medium.com/@petehouston/protect-authentication-routes-in-angular-ui-router-and-satellizer-7745257a7e6#.urfo7mh96


http://stackoverflow.com/questions/28332587/ui-router-and-satellizer-force-login


https://devdactic.com/restful-api-user-authentication-2/



#oauth 2 flows
http://isciurus.blogspot.com/2012/09/pwning-facebook-authorization-through.html

#testing headers
http://stackoverflow.com/questions/27014423/testing-angular-project-service-for-specific-headers-in-http-requests-using-ht

http://andrewfong.com/blog/2014/09/22/angularjs-testing-headers-with-whenget-expectget/



#solve infiinte digest 
https://disqus.com/home/discussion/devdactic/how_to_handle_user_authentication_with_angularjs_inside_your_ionic_app/

mirar en la discusion estos 

  $urlRouterProvider.otherwise(function($injector, $location) {
        var $state = $injector.get("$state");
        $state.go("tab.dash");
    });




    #hardware back button
    http://www.gajotres.net/ionic-framework-handling-android-back-button-like-a-pro/
    http://stackoverflow.com/questions/26548418/disable-hardware-back-button-in-ionic-application

    $ionicPlatform.registerBackButtonAction(function () {
  if (condition) {
    navigator.app.exitApp();
  } else {
    handle back action!
  }
}, 100);