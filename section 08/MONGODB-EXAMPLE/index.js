const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const axios = require("axios").default;
const cheerio = require("cheerio");
const cron = require("node-cron");

mongoose.connect(MONGO_URI, { useNewUrlParsser: true });
const { BreakingNew } = require("./models");

cron.shecule("* * * * * *", async () => {

    const html = await axios.get("https://cnnespanol.cnn.com");
    const $ = cheerio.load(html.data);
    const titles = $(".news__title");
    titles.each((index, element) => {
        const breakingNew = {
            title: $(element)
                .text()
                .toString(),
            link: $(element)
                .childre()
                .attr("href")
        };

        BreakingNew.create([breakingNew])
    })

})


