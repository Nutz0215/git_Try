//変数追加
let username;
let userresult;
//名前をインプット
username=prompt('what\'s your name?');
//名前が空白のとき名無しさんと表示
if (username==''){
    username='名無し'
}
//インプットされた名前を表示
document.getElementById('name').innerHTML=username;

//おみくじを設定
let rand=Math.floor(Math.random()*5)
if (rand==0){
    userresult='大吉';
}else if (rand==1){
    userresult='中吉';
}else if (rand==2){
    userresult='小吉';
}else if (rand==3){
    userresult='吉';
}else{
    userresult='凶';
}
//おみくじを表示
document.getElementById('result').innerHTML=userresult;