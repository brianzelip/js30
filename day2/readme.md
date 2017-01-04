References

placement of hands at the same location (position: absolute):
  - https://github.com/wesbos/JavaScript30/blob/master/02%20-%20JS%20%2B%20CSS%20Clock/index-START.html

rotation (static) of clock hands:
  - https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate
  - https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
  - https://css-tricks.com/snippets/css/a-guide-to-flexbox/



https://css-tricks.com/snippets/css/a-guide-to-flexbox/



Theory for clock hands animation:
  seconds = calc(360/60)
  minutes = calc(360/60)
  hours   = calc(360/12)

  1. get timestamp when page is loaded
  2. rotate each hand to express the `hh:mm:ss` of the timestamp
  3. animate hands based on:
     - for every second that goes by, rotate the seconds hand by calc(60/360)
     - for every minute that goes by, rotate the minutes hand by calc(60/360)
     - for every hour that goes by, rotate the hour hand by calc(12/360)


set style attribute for rotation on clock hands:
  - http://stackoverflow.com/a/20289883/2145103
  - https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations#Example_for_transform_and_setTransform
  - http://stackoverflow.com/questions/19675997/how-to-exact-set-a-dynamic-style-transform-using-javascript
  - https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information
  - https://developer.mozilla.org/en-US/docs/Web/CSS/angle
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes
  - https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations#Example_for_transform_and_setTransform
  - https://css-tricks.com/almanac/properties/t/transform/
  https://www.smashingmagazine.com/2015/12/getting-started-css-calc-techniques/
  - https://connect.microsoft.com/IE/feedback/details/931698/ie11-calc-not-working-inside-color-and-transform-functions  
  - https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate
  http://stackoverflow.com/questions/41420327/use-calc-in-transformrotate?noredirect=1#comment70046046_41420327
  - https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
  - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  
