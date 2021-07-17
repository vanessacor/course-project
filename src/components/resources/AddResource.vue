<template>
  <h2>Add a new Resource</h2>
  <form>
    <label for="title">Title</label>
    <input type="text" placeholder="Title" />

    <label for="Description">Description</label>
    <textarea placeholder="Add an description"></textarea>

    <label for="link">Link for the resource</label>
    <input type="url" placeholder="add url address" />

    <base-button type="submit" mode="primary">Add</base-button>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70vw;
  margin: 0 auto;
  background-color: #004643;
  color: #abd1c6;
  text-align: left;
}

label {
  margin-bottom: 1rem;
  text-align: left;
  text-transform: uppercase;
}

button {
  margin-bottom: 1rem;
}

input,
textarea {
  padding: 1rem;
  width: 80%;
  margin-bottom: 1rem;
}
</style>