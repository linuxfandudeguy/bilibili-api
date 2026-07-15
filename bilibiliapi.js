export default {
async fetch(request){

    let url =
    new URL(request.url);


    let bvid =
    url.searchParams.get("bvid");


    let bili =
    await fetch(
        `https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`,
        {
            headers:{
                "Referer":"https://www.bilibili.com/",
                "User-Agent":
                "Mozilla/5.0"
            }
        }
    );


    return new Response(
        await bili.text(),
        {
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        }
    );

}
}
