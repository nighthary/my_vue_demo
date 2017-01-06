<style>

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
}

</style>

<template>

<div id="app">
    <router-view></router-view>
    <mymenu></mymenu>
</div>

</template>

<script>

import Home from './views/Home'
import mymenu from './components/mymenu'
export default {
    name: 'app',
    components: {
        Home,
        mymenu
    }
}

</script>
