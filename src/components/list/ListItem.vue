<template>
    <a class="list-group-item list-group-item-action" href="#list-item-1">
        <span class="oi oi-chevron-left" title="chevron left" aria-hidden="true" @click="openItem"></span>
        <p>{{ item.name }}</p>
        <span class="oi oi-trash" title="trash" aria-hidden="true" @click="deleteItem"></span>
    </a>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: Object
  }
}
</script>
