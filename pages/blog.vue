<template>
  <div>
    <v-row style="padding: 200px 56px 0 56px">
      <v-col>
        <div v-for="article in articles.data" :key="article.id">
          <div>
            <div class="title">
              {{ article.attributes.title }}
            </div>
            <div class="title">
              <v-textarea v-model="article.attributes.text" readonly>
              </v-textarea>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  transition: 'intro',
  data() {
    return {
      articles: [],
    }
  },
  async fetch() {
    this.articles = await this.$axios.$get(
      this.$config.backendUrl + `/api/articles`
    )
  },
}
</script>
