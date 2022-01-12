<template>
  <div>
    動態route-link
    <ul>
      <li v-for="i in 5" :key="i">
        <router-link :to="`/users/${i}/${i}`"> /users/{{ i }} </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "TabBar",
};
</script>
