<template>
  <form @submit.prevent="submitForm">
    <div class="field">
      <label class="label">Başlık</label>
      <div class="control">
        <input v-model="post.title" class="input" type="text" placeholder="Başlık giriniz..." />
      </div>
    </div>

    <div class="field">
      <label class="label">Açıklama</label>
      <div class="control">
        <textarea v-model="post.description" class="textarea" placeholder="Açıklama giriniz..."></textarea>
      </div>
    </div>

    <div class="field">
      <label class="label">Yazar</label>
      <div class="control">
        <input v-model="post.author" class="input" type="text" placeholder="Yazar giriniz..." />
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button type="submit" class="button is-primary">Ekle</button>
        <button @click="goBack" class="button is-danger mx-3">İptal</button>
      </div>
    </div>
  </form>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: ["post", "submitForm"],
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.push({ name: "HomePage" });
    };

    return {
      goBack,
    };
  },
};
</script>
