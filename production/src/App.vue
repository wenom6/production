<template>
  <div id="app">
    <ProductList
  name="Українська вишиванка"
    description="Стильна вишиванка з орнаментами."
    price="1500"
    image="https://recommerce.com.ua/static/kozachok.reshop.com.ua/catalog/381/195715475364252e14cc6cb_medium.jpg"/>
  <ReviewsComponent/>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import ReviewsComponent from "./components/ReviewsComponent.vue";

export default {
  components: {
    ProductList,
    ReviewsComponent,
  },
}
</script>