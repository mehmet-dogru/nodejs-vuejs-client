<template>
  <div class="container my-5">
    <div v-if="posts.length > 0" v-for="post in posts" :key="post._id" class="card mt-3">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ post.title }}</p>
          </div>
        </div>

        <div class="content">
          {{ post.description }}
          <p />
          <strong>Yazar: {{ post.author }}</strong>
        </div>
      </div>

      <footer class="card-footer">
        <button @click="editPost(post._id)" class="card-footer-item button m-3 is-warning">Güncelle</button>
        <button @click="removePost(post._id)" class="card-footer-item button m-3 is-danger">Sil</button>
      </footer>
    </div>
    <section v-else class="hero is-link">
      <div class="hero-body">
        <p class="title">Post Ekleyiniz...</p>
        <p class="subtitle">Herhangi bir post bulunamamaktadır</p>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const posts = ref([]);

    onMounted(() => {
      getPosts();
    });

    const getPosts = async () => {
      const response = await fetch("http://localhost:5000/api/posts");
      const json = await response.json();
      posts.value = json;
    };

    const removePost = async (_id) => {
      await fetch(`${"http://localhost:5000/api/posts"}/${_id}`, {
        method: "DELETE",
      });
      getPosts();
    };

    const editPost = async (_id) => {
      router.push({
        name: "Update",
        params: {
          id: _id,
        },
      });
    };

    return {
      posts,
      removePost,
      editPost,
    };
  },
};
</script>
