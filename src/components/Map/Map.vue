<template>
    <div class="map">
        <p>i'm map</p>
        <div id="map_container"></div>
    </div>
</template>

<script>
import process from "../Map/process"
export default {
    name: "name",
    data (){
        return{
        }
    },
    mounted(){
        let that = this;
        process.init(d3.select("#map_container"))
    }
}
</script>
<style>
.map{
    height:75%;
    border:honeydew 1px solid;
}
</style>
