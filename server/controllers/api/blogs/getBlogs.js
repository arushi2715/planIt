const axios = require("axios");

// const data=axios.get("https://medium.com/search?q=self+help+and+motivation+blogs");
// console.log(data);

exports.getBlogs = async (req, res) => {
  try {
    await axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@arushiagr1720"
      )
      .then(response => {
        console.log(response);
        const blogs = response.data.items.map((blog) => ({
          title: blog.title,
          author: blog.author,
          description: blog.description,
        }));
        res.send({ blogs: blogs });
      });
  } catch (err) {
    res.send(err.message);
  }
};
