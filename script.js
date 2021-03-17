

              var tween1_2 = KUTE.fromTo('#naupliusEyeBefore',
              { path: '#naupliusEyeBefore', attr:{ fill: "#820e0e"} },
              { path: '#naupliusEye', attr:{ fill: "#820e0e"} },
              { duration: 200}
            );

            var tween1 = KUTE.fromTo('#eggs',
            {path: '#eggs'},
            { path: '#nauplius'},
            { duration: 200});


            var tween1_3 = KUTE.to('#thirdChannel',{opacity:0},
            { duration: 50});


            var tween2 = KUTE.fromTo('#eggs',
            { path: '#nauplius' },
            { path: '#eggs' },
            {
              duration: 200,
            }
          );

          var tween2_2 = KUTE.fromTo('#naupliusEyeBefore',
          { path: '#naupliusEye', attr:{ fill: "#820e0e"} },
          { path: '#naupliusEyeBefore', attr:{ fill: "#820e0e"} },
          { duration: 200}
        );

        var tween3 = KUTE.fromTo('#eggs',
        { path: '#nauplius' },
        { path: '#metanauplius' },
        {
          duration: 200,
        }
      );


      var tween3_2 = KUTE.fromTo('#naupliusEyeBefore',
      { path: '#naupliusEyeBefore' },
      { path: '#metanaupliusCarapace' },
      {
        duration: 200,
      }
    );

    var tween3_3 = KUTE.to('#naupliusEyeBefore',{opacity:0.85},
    { duration: 50});


    var tween4 = KUTE.fromTo('#eggs',
    { path: '#metanauplius' },
    { path: '#nauplius' },
    {
      duration: 200,
    }
  );

  var tween4_2 = KUTE.to('#naupliusEyeBefore',{opacity:1},
  { duration: 200});

  var tween4_3 = KUTE.fromTo('#naupliusEyeBefore',
  { path: '#metanaupliusCarapace' },
  { path: '#naupliusEye' },
  {
    duration: 200,
  }
);


var tween5 = KUTE.fromTo('#eggs',
{ path: '#metanauplius' },
{ path: '#calyptotisI' },
{
  duration: 200,
},
{morphIndex: 0.1}
);
// var tween5_2 = KUTE.to('#naupliusEyeBefore',{opacity:0},
// { duration: 50});


var tween5_2 = KUTE.fromTo('#naupliusEyeBefore',
{ path: '#metanaupliusCarapace', attr:{ fill: "#820e0e"} },
{ path: '#calyptotisICarapace' , attr:{ fill: "#000000"} },
{
  duration: 200,
}
);

var tween5_3 = KUTE.to('#thirdChannel',{opacity:1},
{ duration: 200});

var tween5_4 = KUTE.fromTo('#thirdChannel',
{ path: '#thirdChannel' , attr:{ fill: "#000000"} },
{ path: '#calyptotisIEyes' , attr:{ fill: "#820e0e"} },
{
  duration: 200,
}
);

var tween6 = KUTE.fromTo('#eggs',
{ path: '#calyptotisI' },
{ path: '#metanauplius' },
{
  duration: 200,
}
);
var tween6_2 = KUTE.fromTo('#naupliusEyeBefore',
{ path: '#calyptotisICarapace', attr:{ fill: "#000000"} },
{ path: '#metanaupliusCarapace' , attr:{ fill: "#820e0e"} },
{
  duration: 200,
}
);

var tween6_3 = KUTE.fromTo('#thirdChannel',
{ path: '#calyptotisIEyes' , attr:{ fill: "#820e0e"} },
{ path: '#thirdChannel' , attr:{ fill: "#000000"} },
{
  duration: 200,
}
);
var tween6_4 = KUTE.to('#thirdChannel',{opacity:0},
{ duration: 200});


var tween7 = KUTE.fromTo('#eggs',
{ path: '#calyptotisI' },
{ path: '#calyptotisIII' },
{duration: 200,}
);

var tween7_2 = KUTE.fromTo('#naupliusEyeBefore',
{ path: '#calyptotisICarapace', attr:{ fill: "#000000"} },
{ path: '#calyptotisStuff', attr:{ fill: "#bd1515"} },
{ duration: 10}
);
var tween7_3 = KUTE.to('#thirdChannel',{opacity:0},
{ duration: 10});

var tween8 = KUTE.fromTo('#eggs',
{ path: '#calyptotisIII' },
{ path: '#calyptotisI' },
{duration: 200}
);

var tween8_2 = KUTE.to('#naupliusEyeBefore',{opacity:0.85},
{ duration: 10});

var tween8_3 = KUTE.fromTo('#naupliusEyeBefore',
{ path: '#calyptotisStuff', attr:{ fill: "#bd1515"} },
{ path: '#calyptotisICarapace', attr:{ fill: "#000000"} },
{ duration: 200}
);

var tween8_4 = KUTE.to('#thirdChannel',{opacity:1},
{ duration: 250});

var tween9 = KUTE.fromTo('#eggs',
{ path: '#calyptotisIII' },
{ path: '#furcilia' },
{
  duration: 200,
}
);

var tween9_2 = KUTE.to('#naupliusEyeBefore',{opacity:0},
{ duration: 50});


var tween10 = KUTE.fromTo('#eggs',
{ path: '#furcilia' },
{ path: '#calyptotisIII' },
{
  duration: 200,
}
);
var tween10_2 = KUTE.to('#naupliusEyeBefore',{opacity:1},
{ duration: 250});

var tween11 = KUTE.fromTo('#eggs',
{ path: '#furcilia' },
{ path: '#adult' },
{
  duration: 200,
}
);
var tween12 = KUTE.fromTo('#eggs',
{ path: '#adult' },
{ path: '#furcilia' },
{
  duration: 200,
}
);

let morph1 = () => {
  tween1.start();
  tween1_2.start();
  tween1_3.start();
  document.getElementById("div2").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div2").style.opacity = "1";
  document.getElementById("div1").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div1").style.opacity = "0.1";
}
let morph2 = () => {
  tween2.start();
  tween2_2.start();
  document.getElementById("div2").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div2").style.opacity = "0.1";
  document.getElementById("div1").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div1").style.opacity = "1";
}
let morph3 = () => {
  tween3.start();
  tween3_2.start();
  tween3_3.start();
  document.getElementById("div2").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div2").style.opacity = "0.1";
  document.getElementById("div4").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div4").style.opacity = "1";
}
let morph4 = () => {
  tween4.start();
  tween4_2.start();
  tween4_3.start();
  document.getElementById("div2").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div2").style.opacity = "1";
  document.getElementById("div4").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div4").style.opacity = "0.1";
}
let morph5 = () => {
  tween5.start();
  tween5_2.start();
  tween5_3.start();
  tween5_4.start();
  document.getElementById("div4").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div4").style.opacity = "0.1";
  document.getElementById("div6").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div6").style.opacity = "1";
}
let morph6 = () => {
  tween6.start();
  setTimeout(() => {tween6_2.start(); }, 100);
  tween6_3.start();
  tween6_4.start();
  document.getElementById("div4").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div4").style.opacity = "1";
  document.getElementById("div6").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div6").style.opacity = "0.1";

}
let morph7 = () => {
  tween7.start();
  tween7_2.start();
  tween7_3.start();
  document.getElementById("div6").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div6").style.opacity = "0.1";
  document.getElementById("div8").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div8").style.opacity = "1";
  // tween7_4.start();
}
let morph8 = () => {
  tween8.start();
  tween8_2.start();
  tween8_3.start();
  setTimeout(() => {tween8_4.start(); }, 100);
  document.getElementById("div6").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div6").style.opacity = "1";
  document.getElementById("div8").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div8").style.opacity = "0.1";
}
let morph9 = () => {
  tween9.start();
  tween9_2.start();
  document.getElementById("div8").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div8").style.opacity = "0.1";
  document.getElementById("div10").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div10").style.opacity = "1";
}
let morph10 = () => {
  tween10.start();
  setTimeout(() => {tween10_2.start(); }, 100);
  document.getElementById("div8").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div8").style.opacity = "1";
  document.getElementById("div10").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div10").style.opacity = "0.1";

}
let morph11 = () => {
  tween11.start();
  document.getElementById("div10").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div10").style.opacity = "0.1";
  document.getElementById("div12").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div12").style.opacity = "1";
}
let morph12 = () => {
  tween12.start();
  document.getElementById("div10").style.transition = "opacity 0.2s linear 0s";
  document.getElementById("div10").style.opacity = "1";
}

//waypoints scroll constructor
function scroll(n, offset, func1, func2){
  return new Waypoint({
    element: document.getElementById(n),
    handler: function(direction) {
      direction == 'down' ? func1() : func2();
    },
    //start 75% from the top of the div
    offset: offset
  });
};



//triger these functions on page scroll
new scroll('div2', '50%', morph1, morph2);
new scroll('div4', '50%', morph3, morph4);
new scroll('div6', '50%', morph5, morph6);
new scroll('div8', '50%', morph7, morph8);
new scroll('div10', '50%', morph9, morph10);
new scroll('div12', '50%', morph11, morph12);
