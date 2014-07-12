jq-tips
=======

<p>
  A plugin for jQuery to replace default browser tooltips.
</p>

You can use with any HTML since you add the title attribute.

``` html
<a href="#" title="The powered tooltip with jq-tips" >Link<a/>
```

<p>
  On Javascript you just need to call the plugin.
</p>

``` js
$(function(){
  $('a').jqTips();
});
```