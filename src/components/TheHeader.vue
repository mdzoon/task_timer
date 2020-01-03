<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Timer App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link">
                        Card
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="openPanel = !openPanel">
                        List
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      //   activeLink: ''
    }
  }
}
</script>

<style scoped>
</style>
