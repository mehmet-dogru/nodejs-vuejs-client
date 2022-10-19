<template>
  <div class="container mt-5">
    <PostForm :post="post" :submitForm="updatePost" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";

export default {
  components: { PostForm },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const post = ref({
      title: null,
      description: null,
      author: null,
    });

    onMounted(() => {
      getPost();
    });

    const getPost = async () => {
      const { id } = route.params;
      const response = await fetch(`http://localhost:5000/api/posts/${id}`);
      const json = await response.json();
      post.value = json;
    };

    const updatePost = async () => {
      const { id } = route.params;
      const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: post.value.title,
          description: post.value.description,
          author: post.value.author,
        }),
      });
      await response.json();
      router.push({ name: "HomePage" });
    };

    return {
      post,
      updatePost,
    };
  },
};
</script>
