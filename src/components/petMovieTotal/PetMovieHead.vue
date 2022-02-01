<template>
    <header id="head">
        <h1>宠物电影</h1>
        <div class="moviebox">
            <el-dropdown trigger="click">
                <a class="el-icon-arrow-down el-icon--right aSize">评分区间筛选</a>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <el-slider
                            v-model="rangevalue"
                            range
                            show-stops
                            :min="0"
                            :max="10"
                            class="sliderWidth"
                            @change="RangeValue"
                        ></el-slider>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <el-switch v-model="valueView" class="switch"></el-switch>
        </div>
    </header>
</template>
<script>
export default {
    name: 'PetMovieHead',
    data() {
        return {
            rangevalue: [0, 10],
            valueView : false
        }
    },
    methods: {
        RangeValue(val) {
            let Mrange = val.join(',')
            this.$store.commit('mrange', Mrange)
        }
    },
    watch : {
        valueView() {
            this.$store.commit('valueView', this.valueView)
            console.log('View',this.valueView)
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
</style>