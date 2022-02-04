<template>
 <aside class="serch">
  <el-table :data="petData" style="width: 100%">

    <el-table-column type="expand">

      <template v-slot:default="{row}">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="宠物品种">
            <span>{{ row.id }}</span>
          </el-form-item>
          <el-form-item label="主人姓名">
            <span>{{ row.ownerName }}</span>
          </el-form-item>
          <el-form-item label="宠物名称">
            <span>{{ row.name }}</span>
          </el-form-item>
          <el-form-item label="联系电话">
            <span>{{ row.number }}</span>
          </el-form-item>
          <el-form-item label="宠物描述">
            <span>{{ row.describe }}</span>
          </el-form-item>
          <el-form-item label="家庭住址">
            <span>{{ row.address }}</span>
          </el-form-item>

        </el-form>
      </template>
    </el-table-column>


    <el-table-column label="宠物种类" prop="id">

    </el-table-column>

    <el-table-column label="宠物名称" prop="name">
    </el-table-column>

    <el-table-column label="主人姓名" prop='ownerName'>
      </el-table-column>

    <el-table-column label="宠物描述" prop="describe">
    </el-table-column>

    <el-table-column>
      <template slot-scope="scope"> 
        <!-- 信息编辑 -->
        <el-dialog title="信息修改" :visible.sync="handle" width="40%">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="宠物品种">
              <el-input placeholder="请输入宠物名称" v-model="petObj.id"></el-input>
            </el-form-item>
            <el-form-item label="宠物名称">
              <el-input placeholder="请输入宠物名称" v-model="petObj.name"></el-input>
            </el-form-item>
            <el-form-item label="主人姓名">
              <el-input placeholder="请输入主人姓名" v-model="petObj.ownerName"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input placeholder="请输入联系电话" v-model="petObj.number"></el-input>
            </el-form-item>
            <el-form-item label="家庭住址">
              <el-input placeholder="请输入家庭住址" v-model="petObj.address"></el-input>
            </el-form-item>
            <el-form-item label="宠物描述">
              <el-input placeholder="请添加宠物描述" v-model="petObj.describe"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="handle = false ; petCancel()">取 消 修 改</el-button>
            <el-button type="primary" @click ="petChange() ; handle = false">确 定 修 改</el-button>
          </div>
        </el-dialog>

        <el-button size="mini" @click="handle = true ; handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删 除</el-button>
      </template>

    </el-table-column>
  </el-table>
  </aside>
</template>

<script>
  export default {
    data() {
      return {
        name: 'PetX',
        petData: [],
        petObj: {
          address : '',
          describe : '',
          number : '',
          id : '',
          name : '',
          ownerName : ''
        },
        petindex : '' ,
        //我只要把收到的数据转化为一个对象，然后插入到petData中就可以了
        handle: false,
      }
    },
    mounted() {
      this.$bus.$on('petTMsg', (data) => {
        this.petData.push(data)
      })
      let data = JSON.parse(window.localStorage.getItem('data') || '[]')
      data.forEach((index) => {
        this.petData.push(index)
      })
    },
    //  console.log(data)
    // slot - scope = "scope"（scope.$index,scope.row）
    // slot - scope = "scope" //取到当前单元格
    // scope.$index→ 拿到每一行的index(下标)
    // scope.$row→ 拿到每一行的数据
    methods: {
      handleEdit(index, row) {
        // console.log('hahahhaa',index, row);
        this.petindex = index
        this.petObj.address= row.address
        this.petObj.describe= row.describe
        this.petObj.number= row.number
        this.petObj.id= row.id
        this.petObj.name= row.name
        this.petObj.ownerName= row.ownerName

      },
      handleDelete(index) {
        this.$confirm('此操作将永久删除该条记录, 是否继续?', {
          confirmButtonText: '确定删除',
          cancelButtonText: '取消删除',
          type: 'warning',
          showClose: true,
        }).then(() => {
          this.petData.splice(index, 1)
          //index为当前的数组下标
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
      },
      petChange() {
         let localchange = JSON.parse(localStorage.getItem('data'))
         localchange[this.petindex] = {...this.petObj}
        //  console.log('我是对比数据',localchange[index-1],this.petObj)
         localStorage.setItem('data',JSON.stringify(localchange))
         this.petData[this.petindex] = {...this.petObj}
         this.$message({
                        // showClose: true,
                        message: ' 已成功修改宠物信息',
                        type: 'success',
                        duration : 1500,
                        showClose: true,
                    });
      },
      petCancel() {
        this.$message({
                        // showClose: true,
                        message: ' 已取消编辑',
                        type: 'info',
                        duration : 1500,
                        showClose: true,
                    });
      }
    },
    

  }
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
    margin-left: 50px;
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
  .demo-table-expand span {
    display: inline-block;
    /* color: blue; */
  }
  
</style>