<template>
  <div>
      <div v-for="post in posts" :key="post.id">
        {{post.title}}
        <button @click="likePost(post.id)">Like</button>
        <span>{{post.likes}}</span>
        <button @click="dislikePost(post.id)">Dislike</button>
        <span>{{post.dislikes}}</span>
        <button @click="deletePost(post.id)">Delete</button>
      </div>
  </div>
</template>
<script>
import axios from 'axios';
export default{
  data(){
    return {
      posts: []
    };
  },
  mounted(){
    this.fetchPosts();
  },
  methods:{
    fetchPosts(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.posts = response.data.map(post=>({
            ...post,
            likes: 0,
            dislikes: 0
          }));
        })
        .catch(error => {
          console.log(error);
        });
    },
    likePost(id){
      const post = this.posts.find(post => post.id == id);
      if (post) {
        post.likes++;
      }
    },
    dislikePost(id){
      const post = this.posts.find(post => post.id == id);
      if (post) {
        post.dislikes++;
      }
    },
    deletePost(id){
      this.posts = this.posts.filter(post => post.id != id);
    }
  }
};
</script>
