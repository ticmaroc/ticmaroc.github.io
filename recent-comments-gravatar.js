var numComments=numComments||5,avatarSize=avatarSize||60,characters=characters||40,defaultAvatar=defaultAvatar||"http://www.gravatar.com/avatar/?d=mm",moreLinktext=moreLinktext||" More »",showAvatar=typeof showAvatar==="undefined"?true:showAvatar,showMorelink=typeof showMorelink==="undefined"?false:showMorelink,roundAvatar=typeof roundAvatar==="undefined"?true:roundAvatar,hideCredits=typeof hideCredits==="undefined"?false:hideCredits;
function w2b_recent_comments(h){var d;d='<ul class="w2b_recent_comments">';for(var e=0;e<numComments;e++){var f,c,a,g;if(e==h.feed.entry.length)break;d+="<li>";var b=h.feed.entry[e];for(c=0;c<b.link.length;c++)if(b.link[c].rel=="alternate"){f=b.link[c].href;break}c=b.author[0].name.$t;a=b.author[0].gd$image.src;if(a.indexOf("/s1600/")!=-1)a=a.replace("/s1600/","/s"+avatarSize+"-c/");else if(a.indexOf("/s220/")!=-1)a=a.replace("/s220/","/s"+avatarSize+"-c/");else if(a.indexOf("/s512-c/")!=-1&&a.indexOf("http:")!==
0)a="http:"+a.replace("/s512-c/","/s"+avatarSize+"-c/");else if(a.indexOf("blogblog.com/img/b16-rounded.gif")!=-1)a="http://3.bp.blogspot.com/-AaI8-1X32ZM/TxMKLVzQ5BI/AAAAAAAABYY/QYau8ov2blE/s"+avatarSize+"/w2b_blogger_logo.png";else if(a.indexOf("blogblog.com/img/openid16-rounded.gif")!=-1)a="http://3.bp.blogspot.com/-9lSeVyNRKx0/TxMKMIqMNuI/AAAAAAAABYc/8iasY0xpLzc/s"+avatarSize+"/w2b_openid_logo.png";else if(a.indexOf("blogblog.com/img/blank.gif")!=-1)a=defaultAvatar.indexOf("gravatar.com")!=-1?
defaultAvatar+"&s="+avatarSize:defaultAvatar;if(showAvatar===true){g=roundAvatar===true?"avatarRound":"";d+='<div class="avatarImage '+g+'"><img class="'+g+'" src="'+a+'" alt="'+c+'" width="'+avatarSize+'" height="'+avatarSize+'"/></div>'}d+='<a href="'+f+'">'+c+"</a>";b=b.content.$t.replace(/(<([^>]+)>)/ig,"");if(b!==""&&b.length>characters){b=b.substring(0,characters);b+="…";if(showMorelink===true)b+='<a href="'+f+'">'+moreLinktext+"</a>"}d+="<span>"+b+"</span>";d+="</li>"}document.write(d)}
;
