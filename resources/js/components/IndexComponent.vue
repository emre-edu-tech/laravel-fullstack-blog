<template>
    <div class="c-wrapper c-fixed-components">
        <Header />
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './HeaderComponent';
    export default {
        components: {
            Header
        }
    }
</script>
