function plist(plp) {

  document.write("<ul>");
  for (var pla = 0; pla < 200; pla++) {
    var entree_1 = plp.feed.entry[pla];

    var pageuri = "";
    if (pla == plp.feed.entry.length) break;
    for (var plb = 0; plb < entree_1.link.length; plb++) {
      if (entree_1.link[plb].rel == 'alternate') {
        pageuri = entree_1.link[plb].href;
        break;
      }
    }
    if (pageuri != "") {
      var pagetitle = entree_1.title.$t;
      var yy = entree_1.published.$t.substring(0,4);
      var mm = entree_1.published.$t.substring(5,7);
      var dd = entree_1.published.$t.substring(8,10);
      var pagedate = dd+"/"+mm+"/"+yy;
      document.write("<li><span class='postdate'>"+pagedate+" - </span><a href='"+pageuri+"'>"+pagetitle+"</a></li>");
    }
  }
  document.write("</ul>");

  for (var AAA = 0; AAA < plp.feed.link.length; AAA++) {
    if (plp.feed.link[AAA].rel == 'next') {
      nextRSS1 = plp.feed.link[AAA].href;
      document.write("<script src='"+nextRSS1+"&alt=json-in-script&callback=plist'></script>");
      break;
    }
  }

}


function plistupdate(plu) {

  document.write("<ul>");
  for (var plc = 0; plc < 200; plc++) {
    var entree_2 = plu.feed.entry[plc];

    var posturi = "";
    if (plc == plu.feed.entry.length) break;
    for (var pld = 0; pld < entree_2.link.length; pld++) {
      if (entree_2.link[pld].rel == 'alternate') {
        posturi = entree_2.link[pld].href;
        break;
      }
    }
    if (posturi != "") {
      var posttitle = entree_2.title.$t;
      var yyu = entree_2.updated.$t.substring(0,4);
      var mmu = entree_2.updated.$t.substring(5,7);
      var ddu = entree_2.updated.$t.substring(8,10);
      var postdate = ddu+"/"+mmu+"/"+yyu;
      document.write("<li><span class='postdate'>"+postdate+" - </span><a href='"+posturi+"'>"+posttitle+"</a></li>");
    }
  }
  document.write("</ul>");

  for (var BBB = 0; BBB < plu.feed.link.length; BBB++) {
    if (plu.feed.link[BBB].rel == 'next') {
      nextRSS2 = plu.feed.link[BBB].href;
      document.write("<script src='"+nextRSS2+"&alt=json-in-script&callback=plistupdate'></script>");
      break;
    }
  }

}
