<template>
	<div id="caregoty_head">
		<header class="top_bar">
	        <a onclick="window.history.go(-1)" class="icon_back">《</a>
	        <form action="" class="goods_search">
	            <input type="search" class="goods_search_content" placeholder="搜索"  @click="goSearch()">
	        </form>
	        <a href="#" class="icon_menu" @click="goHome()"></a>
	    </header>
	</div>
</template>

<script>
export default {
    methods: {
        goSearch() {
            this.$router.push('/search');
        },
		goHome() {
            this.$router.push('/home');
        }
    }
}
</script>

<style>

</style>