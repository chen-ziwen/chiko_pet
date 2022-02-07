<template>
    <header id="head">
        <h1>宠物资讯</h1>
        <!-- 媒体选择 -->
        <div class="moviebox">
            <el-select v-model="value" placeholder="请选择" v-show="this.$store.state.showMenu">
                <el-option
                    v-for="item in infoMsg"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value" 
                    @click.native="$emit('receiveMsg', item.fnc)"
                ></el-option>
            </el-select>

            <!-- 时间选择 -->
            <el-select v-model="value2" placeholder="请选择" v-show="this.$store.state.showMenu2">
                <el-option
                    v-for="item in infoTime"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value" 
                    @click.native="$emit('receiveTime', item.fnc)"
                ></el-option>
            </el-select>
        </div>
    </header>
</template>
<script>
export default {
    name: 'PetMovieHead',
    data() {
        return {
            rangevalue: [0, 10],
            valueView: false,
            infoMsg: [{
                value: '选项1',
                label: '全部来源',
                fnc : ''
            }, {
                value: '选项2',
                label: '中央媒体',
                fnc :'CENTRAL'
            }, {
                value: '选项3',
                label: '地方媒体',
                fnc: 'LOCAL'
            }, {
                value: '选项4',
                label: '商业媒体',
                fnc : 'BUSINESS'
            }],
            value: '选项1',

            infoTime: [{
                value: '选项1',
                label: '时间不限',
                fnc : ''
            }, {
                value: '选项2',
                label: '一天内',
                fnc :'24h'
            }, {
                value: '选项3',
                label: '一周内',
                fnc: '1w'
            }, {
                value: '选项4',
                label: '一个月内',
                fnc : '1m'
            }, {
                value: '选项5',
                label: '一年内',
                fnc : '1y'
            }],
            value2: '选项1'
        }
    },
    methods: {
        RangeValue(val) {
            let Mrange = val.join(',')
            this.$store.commit('mrange', Mrange)
        },
    },
    watch: {
        valueView() {
            this.$store.commit('valueView', this.valueView)
        }
    }
}
</script>
<style scoped>
#head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    color: #000;
    /* background-image: linear-gradient(to right, #acb6e5 , #86fde8 ); */
    background-color: whitesmoke;
}

.moviebox {
    display: flex;
    margin-right: 55px;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 414px;
}
button {
    display: inline-block;
    height: 40px;
    width: 150px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
}
.aSize {
    font-size: 20px;
    font-weight: 700;
    color: rgba(153, 153, 153);
}
.switch {
    margin-left: 40px;
}
input {
    display: inline-block;
    padding-left: 10px;
    height: 36px;
    width: 250px;
    outline: none;
    font-weight: 700;
}

#head h1 {
    display: inline-block;
    line-height: 70px;
    white-space: nowrap;
    color: black;
    margin-left: 80px;
}
.sliderWidth {
    width: 350px;
}
.move-ju {
    margin-left: 20px;
}
</style>