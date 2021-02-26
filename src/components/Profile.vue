<template>
    <div class="profile">
        <div id="info">
            <h3>基本情報</h3>
                <p>ニックネーム:{{ nickName }}</p>
                <p>年齢：{{ age }}歳</p>
                <p>血液型：{{ bloodType }}</p>
                <p>身長：{{ height }}cm</p>
                <p>国籍：{{ nationality }}</p>
                <p>出身地：{{ birthplace }}</p>
        </div>
        <div id="challenge">
            <h3>人生でやりたい10のこと</h3>
                <ul>
                    <li v-for="(challenge, index) in challenges" v-bind:key="index">
                        {{ challenge.title }}
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    data() {
        return {
            nickName: 'りつや',
            age: 23,
            bloodType: 'B型',
            nationality: '日本',
            birthplace: '島根県',
            height: 181,
            challenges: [
                { title: 'ニューヨークに行く' },
                { title: 'ロサンゼルスに行く' },
                { title: '韓国に行く' },
                { title: 'ハワイに行く' },
                { title: 'ヨーロッパに行く' },
                { title: '動画編集' },
                { title: '簿記検定3級合格' },
                { title: '簿記検定2級合格' },
                { title: '脱毛' },
                { title: 'ドラム' },
            ]
        }
    }
}
</script>

<style scoped>
ul {
    margin: 0 auto;
    list-style: none;
}
li {
    margin-bottom: 1rem;
}
#info {
    margin-bottom: 4rem;
}
</style>
