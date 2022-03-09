const { Router } = require('express');
const router = Router();
const Post = require('../Models/Post');

router.post('/add', async (req, res) => {
  try {
    const { text, title, imgUrl } = req.body; // в req.body будет лежать, то что мы отправим из формы на фронте

    const post = await new Post({
      // с бд всегда работает асинхронно
      title,
      text,
      imgUrl
    });

    await post.save(); // с бд всегда работает асинхронно
    res.json(post);
  } catch (e) {
    console.log(e);
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (e) {
    console.log(e);
  }
});

router.post('/remove', async (req, res) => {
  try {
    const { postId } = req.body;
    await Post.findByIdAndDelete(postId);

    res.json({ message: 'Success' });
  } catch (e) {
    console.log(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.json(post);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
