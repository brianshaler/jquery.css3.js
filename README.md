jquery.css3.js
==============

Simple jQuery plugin that adds all vendor prefixes to CSS properties and values. Basically, it calls $.css() for each possible prefixed property/value, so the browser can just use the one(s) it supports. It does NOT do any browser sniffing, because that would add unnecessary complexity. Primary caveat: setting a single property via $.css() is most likely more performant than _setting all the things!_

There are probably "better" ways of doing this type of thing, such as $.cssHooks, but this is simple and flexible.

## Usage

    $.css3(prop:String, val:String)
    $.css3(props:Object)

Calling this...

    $(element).css3({transform: "translate3d(0px, 0px, 0px)"}); // or .css3("transform", "translate3d(0px, 0px, 0px)")

... is basically the same thing as calling this:

    $(element).css({
      "-webkit-transform": "translate3d(0px, 0px, 0px)",
      "-moz-transform": "translate3d(0px, 0px, 0px)",
      "-ms-transform": "translate3d(0px, 0px, 0px)",
      "-o-transform": "translate3d(0px, 0px, 0px)",
      transform: "translate3d(0px, 0px, 0px)"
    });

## Cool bonus feature

You can send a string template as a CSS value and it will add prefixes there, too!

Therefore, calling this...

    $(element).css3({transition: "{prefix}transform 0.5s ease-out"}); // or .css3("transition", "{prefix}transform 0.5s ease-out")

... is basically the same thing as calling this:

    $(element).css({
      "-webkit-transition": "-webkit-transform 0.5s ease-out",
      "-moz-transition": "-moz-transform 0.5s ease-out",
      "-ms-transition": "-ms-transform 0.5s ease-out",
      "-o-transition": "-o-transform 0.5s ease-out",
      transition: "transform 0.5s ease-out"
    });

This is the main reason I wrote this simple plugin. I wanted to set a dynamic transition duration and ease type without having to worry about prefixes in the property name or value.