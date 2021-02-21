<template>
    <div class="output">
        <div class="content" v-for="i in 6" v-bind:key=i>
            <h3>{{ name }}</h3>
            <h3>{{ text }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "Output",
    data() {
        return {
            name: 'カメラアプリを作成した',
            text: 'このような意図で作成しました。ここをこのように工夫しました。ここが難しかったです。今後はこのような機能を追加したいです。'.repeat(3)
        }
    }
}
</script>

<style scoped>
.output {
  text-align: center;
}

.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 30%;
}

h3 {
  color: white;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}
</style>
