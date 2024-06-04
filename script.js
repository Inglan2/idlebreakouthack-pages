const params = new URLSearchParams(window.location.search);
var level = params.get("level");
var money = params.get("money");
var gold = params.get("gold");
var blackbox = params.get("blackbox");
var skillpts = params.get("skillpoints");
var code = (`${level},${money},${gold},2,0,0,0,0,0,0,0,1,1,0,43595.78,999999,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,${blackbox},0,0,0,1,${skillpts},1,0,0`);
var encode = btoa(code);
document.getElementById("code").value = encode;
function copy() {
  navigator.clipboard.writeText(encode)
}
