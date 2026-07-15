export default async function handler(req, res) {

    const bvid = req.query.bvid;


    if (!bvid) {
        return res.status(400).json({
            error: "Missing bvid"
        });
    }


    try {

        const response = await fetch(
            `https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`,
            {
                headers: {

                    "Referer":
                    "https://www.bilibili.com/",


                    "User-Agent":
                    "Mozilla/5.0",


                    "Cookie":
                    `buvid3=${process.env.BILIBILI_BUVID3}`

                }
            }
        );


        const data =
        await response.json();



        res.setHeader(
            "Access-Control-Allow-Origin",
            "*"
        );


        res.json(data);


    } catch (err) {


        res.status(500).json({
            error: err.message
        });


    }

}
