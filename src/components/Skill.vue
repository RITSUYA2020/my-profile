<template>
    <div class="skill">
        <h1>{{ msg }}</h1>
        <h4>{{ text }}</h4>
    </div>
</template>

<script>
export default {
    name: 'Skill',
    data() {
        return {
            msg: 'これは/skillに表示されます',
            text: 'Rubyができます。'.repeat(10)
        }
    }
}
</script>

<style scoped>
div {
    background-color: orange;
    height: 300px;
}

h1 {
    color: white;
}

p {
    width: 60%;
    display: inline-block;
}
</style>
