<template>
  <div id="main">
      <el-container>
        <el-header>
            <navbar></navbar>
        </el-header>
        <el-container class="panel">
            <el-aside width="200px">Control panel</el-aside>
            <el-main>
                <Map></Map>
                <ParCoordination></ParCoordination>
            </el-main>
            <el-aside width="500px">charts</el-aside>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import navbar from "../components/Navbar"
import Map from "../components/Map/Map"
import ParCoordination from "../components/ParCoordination"
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components:{
      navbar,
      Map,
      ParCoordination
  }
}
</script>

<style>
.el-header{
    padding: 0px !important;
}
.el-main{
    padding: 10px !important;
}

.el-aside {
    text-align: center;
    line-height: 200px;
  }
.el-main {
    text-align: center;
    line-height: 160px;
}

.panel{
    height:1020px;
}

#main{
  width:100%;
  height:100%;
}
</style>
