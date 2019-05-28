<template>
  <div>
    <template>
      <el-table :data="tableData"
                style="width: 100%">

        <el-table-column prop="name"
                         label="名字"
                         width="180">
        </el-table-column>
        <el-table-column prop="address"
                         label="地址"
                         width="180">
        </el-table-column>
        <el-table-column prop="string"
                         label="星级">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
<script>
import { goodlist } from 'api'
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
        tableData:[]
    }
  },
  methods: {
    ...mapMutations[['_getgoods']]
  },
  created() {
    goodlist().then(res => {
      const result = res.data.projects
      this.$store.commit('_getgoods', result)
      this.tableData = this.$store.state.goodlist
      console.log('result', result)
    })
  }
}
</script>
