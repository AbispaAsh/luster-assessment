const axios = require("axios");

const summarize = async (text) => {
    let generatedSummary = "";
    const options = {
        method: "POST",
        url: "https://api.edenai.run/v2/text/summarize",
        headers: {
            authorization: `Bearer ${process.env.EDENAI_API_KEY}`,
        },
        data: {
            output_sentences: 3,
            providers: "openai",
            text: `Give summary in bullet points for the given text "${text}"`,
            language: "en",
            fallback_providers: "",
        },
    };
      
    await axios
        .request(options)
        .then((response) => {
            generatedSummary=response.data.openai.result;
        })
        .catch((error) => {
            console.error(error);
        });
    return generatedSummary;
}

module.exports = summarize;
