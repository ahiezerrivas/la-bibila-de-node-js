const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const axios = require("axios").default;
const cheerio = require("cheerio");
const cron = require("node-cron");

mongoose.connect(MONGO_URI, { useNewUrlParser: true,  useUnifiedTopology: true  });
const { BreakingNew } = require("./models");

cron.schedule("* * * * * *", async () => {

    const html = await axios.get("https://cnnespanol.cnn.com");
    const $ = cheerio.load(html.data);
    const titles = $(".news__title");
    titles.each((index, element) => {
        const breakingNew = {
            title: $(element)
                .text()
                .toString(),
            link: $(element)
                .children()
                .attr("href")
        };

        BreakingNew.create([breakingNew])
    })

})


