# hex.5

A tiny CSS helper that lets you write #000.5 and #fff.8 for both color + opacity level. 


Example: 
```css
background-color: #000.5; /* black at 50% opacity */
color: #fff.8;            /* white at 80% opacity */
```

Convert the hex + opacity level into a valid `rgba()` value, automatically in the browser.

```
<script src="https://cdn.jsdelivr.net/gh/calvinmorett/hex.5/hex5.js"></script>

<style>
  .demo{
    background:#f00.3;
    color:#00f.8;
  }
</style>
```

turns into....

```
<script src="https://cdn.jsdelivr.net/gh/calvinmorett/hex.5/hex5.js"></script>

<style>
  .demo{
    background:rgba(255,0,0,.3);
    color:rgba(0,0,255,.8)
  }
</style>
```
