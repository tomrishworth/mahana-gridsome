<template>
  <b-container>
    <b-row>
      <b-col  cols="4">
        <b-list-group class="menu" v-b-scrollspy="{element: '#listgroup-ex', offset: 50}">
          <b-list-group-item href="#list-item-1">Item 1</b-list-group-item>
          <b-list-group-item href="#list-item-2">Item2</b-list-group-item>
          <b-list-group-item href="#list-item-3">Item 3</b-list-group-item>
          <b-list-group-item href="#list-item-4">Item 4</b-list-group-item>
          <b-list-group-item href="#list-item-5">Item 5</b-list-group-item>
          <b-list-group-item href="#list-item-6">Item 6</b-list-group-item>
          <b-list-group-item href="#list-item-7">Item 7</b-list-group-item>
        </b-list-group>
      </b-col>

      <b-col cols="8">
        <!-- <div id="listgroup-ex" style="position:relative; overflow-y:auto; height:300px"> -->
        <div id="listgroup-ex">
          <h4 id="list-item-1">Item 1</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-2">Item 2</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-3">Item 3</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-4">Item 4</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-5">Item 5</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-6">Item 6</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-7">Item 7</h4>
          <p>{{ text }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `
      }
    }
  }
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 20px;
  width: 300px;
}

</style>