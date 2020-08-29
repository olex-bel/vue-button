<template>
  <div class="c-notfound">
    <h1 class="c-notfound-header">404 NOT FOUND</h1>

    <div class="c-notfound--content">
      <div class="c-notfound--left-column">
        <img class="c-notfound--image" alt="Not found image" src="../assets/Scarecrow.png" />
      </div>
      <div class="c-notfound--right-column">
        <h2 class="c-notfound--title">I have a bad news for you</h2>
        <p
          class="c-notfound--text"
        >The page you are looking for might be removed or is temperary unavaliable.</p>
        <router-link to="/" tag="button" class="c-notfound--button">Back to Home</router-link>
      </div>
    </div>

    <div class="clear"></div>

    <div class="c-notfound--footer">olex-bel @ DevChallenges.io</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.c-notfound {
  text-align: left;
}

.c-notfound-header {
  padding-left: 5%;
  padding-bottom: 5%;
}

.c-notfound--content {
  line-height: normal;
}

.c-notfound--left-column {
  padding-left: 5%;
  float: left;
  width: 50%;
}

.c-notfound--right-column {
  padding-right: 5%;
  padding-left: 5%;
  float: left;
  width: 50%;
}

.c-notfound--image {
  max-height: 400px;
}

.c-notfound--title {
  font-size: 3rem;
  font-family: monospace;
}

.c-notfound--text {
  font-size: 1.3rem;
  font-family: monospace;
  max-width: 50%;
}

.c-notfound--button {
  background-color: black;
  padding: 25px;
  color: white;
}

.c-notfound--footer {
  text-align: center;
}

@media screen and (max-width: 800px) {
  .c-notfound--left-column,
  .c-notfound--right-column {
    width: 100%;
  }
}
</style>