<template>
  <div id="app">
    <ProductCard
  name="Українська вишиванка"
    description="Стильна вишиванка з орнаментами."
    price="1500"
    image="https://recommerce.com.ua/static/kozachok.reshop.com.ua/catalog/381/195715475364252e14cc6cb_medium.jpg"/>
  </div>
</template>

<script>
  import ProductCard from './components/ProductCard.vue';
  export default {
    components: {
      ProductCard,
    }

};</script>