/* 下导航字体图标 json解析 写成一个js 引入 */
var jarrnav=[{
    iconfont:"icon-shouye",
    title:"首页"
},{
    iconfont:"icon-guanzhudianpu",
    title:"关注"
},{
    iconfont:"icon-denglong-",
    title:"大促会场"
},{
    iconfont:"icon-pinglun",
    title:"聊天"
},{
    iconfont:"icon-geren",
    title:"个人中心"
}]
function inserticon(){
var navlist=document.querySelector(".navlist");
//dom
jarrnav.forEach((v,i)=>{
    var nli=document.createElement("li");
    nli.innerHTML=`
    <div>
    <span class="iconfont ${v.iconfont}"></span>
            <p>${v["title"]}</p>
        </div>
    `;
    // 反引号
    navlist.appendChild(nli);
})
}
inserticon(jarrnav);