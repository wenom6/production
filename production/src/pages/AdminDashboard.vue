<template>
<div>
<nav> -

<router-link to="/admin/products">Home</router-link>
<router-link to="/admin/reviews">Reviews</router-link>
</nav>

<main>
<router-view>
</router-view>
</main>
</div>
</template>

<script>
export default{
    name:'AdminDashboard',
}
</script>


<style scoped>
.admin-dashboard {
  font-family: Arial, sans-serif;
  background-color: #f5f6fa;
  color: #333;
  min-height: 100vh;
}

.admin-nav {
  display: flex;
  background: #2f3640;
  padding: 15px 20px;
  gap: 20px;
}

.nav-link {
  color: #f5f6fa;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s;
}

.nav-link:hover {
  background: #40739e;
  color: #fff;
}

.admin-main {
  padding: 20px;
}
</style>