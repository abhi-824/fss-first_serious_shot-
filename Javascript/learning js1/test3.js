const name='abhinandan';
const nick_name='abdude';
const age=19;
const personality='awesome';

let html;
//without template string 
html='<ul><li>Name:'+name+'</li><li>Age: '+age+'</li><li>Nick name: '+nick_name+'</li><li>Personality is Just '+personality+'</li>';

//using template strings

html=`
    <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Nick Name: ${nick_name}</li>
    <li>Personality: ${personality}</li>
    `

document.body.innerHTML=html;

