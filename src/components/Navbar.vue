<template>
    <div class="header">
        <div class="header_title">
            <h3> System </h3>
        </div>
    </div>
</template>
<script>
export default {
    name: "navbar",
    data() {
        return {

        }
    }
    
}
</script>
<style>
.header{
    background:  rgb(91,74,80);
    color: #fff;
    clear: both;
    display: flex;
    align-items: center;
    width: 100%;
    z-index:10000;
    position:relative;
    height:50px;
}

.header_title{
    font-size: 1.3rem;
    color:inherit;
    width: 100%;
}

h3{
    text-align: center;
}
</style>