<template>

  <el-table :data="petData" style="width: 100%">

    <el-table-column type="expand">

      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="宠物品种">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="主人姓名">
            <span>{{ props.row.ownerName }}</span>
          </el-form-item>
          <el-form-item label="宠物名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="联系电话">
            <span>{{ props.row.number }}</span>
          </el-form-item>
          <el-form-item label="宠物描述">
            <span>{{ props.row.describe }}</span>
          </el-form-item>
          <el-form-item label="家庭住址">
            <span>{{ props.row.address }}</span>
          </el-form-item>

        </el-form>
      </template>
    </el-table-column>


    <el-table-column label="宠物种类" prop="id">

    </el-table-column>

    <el-table-column label="宠物名称" prop="name">
    </el-table-column>

    <el-table-column label="宠物描述" prop="describe">
    </el-table-column>

    <el-table-column>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        name: 'PetX',
        petData: []
        //我只要把收到的数据转化为一个对象，然后插入到petData中就可以了
      }
    },
    mounted() {
      this.$bus.$on('petTMsg', (data) => {
        this.petData.push(data)
      })
      let data = JSON.parse(window.localStorage.getItem('data') || '[]')
      // console.log(data instanceof Array)
      data.forEach((index) => {
        this.petData.push(index)
        // console.log(index)

      })
    },
    //  console.log(data)
    // slot - scope = "scope"（scope.$index,scope.row）
    // slot - scope = "scope" //取到当前单元格
    // scope.$index→ 拿到每一行的index(下标)
    // scope.$row→ 拿到每一行的数据
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index) {
        this.$confirm('此操作将永久删除该条记录, 是否继续?', {
          confirmButtonText: '确定删除',
          cancelButtonText: '取消删除',
          type: 'warning',
          showClose: true,
        }).then(() => {
          this.petData.splice(index, 1)
          //index为当前的下表
          // 删除时，把localStorage中的缓存一起删除
          let arrdata = JSON.parse(localStorage.getItem('data'))
          arrdata.splice(index, 1)
          localStorage.setItem('data', JSON.stringify(arrdata))
          this.$message({
            type: 'success',
            message: ' 删除成功!',
            duration: 1500,
            showClose: true,
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: ' 已取消删除',
            duration: 1500,
            showClose: true,
          });
        });
      }
    }

  }
</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
    margin-left: 20px;

  }

  .demo-table-expand .el-form-item {
    margin-right: -20px;
    margin-bottom: 20px;
    width: 50%;
  }
</style>