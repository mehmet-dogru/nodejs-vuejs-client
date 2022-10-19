<template>
  <div class="container mt-5">
    <PostForm :post="post" :submitForm="createPost" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  components: { PostForm },
  setup() {
    const router = useRouter();

    const post = reactive({
      title: null,
      description: null,
      author: null,
    });

    const createPost = async () => {
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: post.title,
          description: post.description,
          author: post.author,
        }),
      });
      await response.json();
      router.push({ name: "HomePage" });
    };

    return {
      post,
      createPost,
    };
  },
};
</script>
