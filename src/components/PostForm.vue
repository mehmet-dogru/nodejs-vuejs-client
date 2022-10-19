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
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ["post", "submitForm"],
};
</script>
