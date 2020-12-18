<template>
<div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">生成网络类型</span>
          </template>
          <el-menu-item-group>
            <span slot="title">指定网络类型</span>
            <el-menu-item index="1-1">
            <el-button type="text" @click="BAdialogFormVisible = true">BA图</el-button>
            </el-menu-item>
            <el-menu-item index="1-2">
                <el-button type="text" @click="WSdialogFormVisible = true">WS图</el-button>
            </el-menu-item>
            <el-menu-item index="1-3">
              <el-button type="text" @click="ERdialogFormVisible = true">ER图</el-button>
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="指定文件类型">
            <el-menu-item index="1-3">奇奇怪怪的文件</el-menu-item>
          </el-menu-item-group>
<!--           <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu> -->
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">网络失效类型</span>
              </template>
          <el-menu-item-group>

            <span slot="title">指标优先型失效</span>           
            <el-menu-item index="2-1">
                <el-button type="text" @click="dialogFormVisible = true">度优先</el-button>
            </el-menu-item>
            <el-menu-item index="2-2">
                <el-button type="text" @click="dialogFormVisible = true">女士优先</el-button>
            </el-menu-item>    
            <el-menu-item index="2-2">
                <el-button type="text" @click="dialogFormVisible = true">猪猪优先</el-button>
            </el-menu-item>            
        </el-menu-item-group>
    </el-submenu>

      </el-menu>

      <el-dialog title="BA图生成" :visible.sync="BAdialogFormVisible">

        <el-form :model="form">   
             <el-form-item label="类型介绍":label-width="formLabelWidth">
                <span>
                 第一个网络是想放假的。
                </span>      
              </el-form-item> 
          <el-form-item label="节点数目" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <!-- <el-form-item label="" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item> -->
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="BAdialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="BAdialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>


      <el-dialog title="WS图生成" :visible.sync="WSdialogFormVisible">
        <el-form :model="form">   
          <el-form-item label="类型介绍":label-width="formLabelWidth">
             <span>
              第二个网络是想吃火锅的。
             </span>      
         </el-form-item> 
       <el-form-item label="节点数目" :label-width="formLabelWidth">
         <el-input v-model="form.name" autocomplete="off"></el-input>
       </el-form-item>
     </el-form>
     <div slot="footer" class="BAdialog-footer">
       <el-button @click="WSdialogFormVisible = false">不吃</el-button>
       <el-button type="primary" @click="WsdialogFormVisible = false">吃</el-button>
     </div>
      </el-dialog>

      <el-dialog title="ER图生成" :visible.sync="ERdialogFormVisible">
        <el-form :model="form">   
          <el-form-item label="类型介绍":label-width="formLabelWidth">
             <span>
              第三个网络是想睡觉的。
             </span>      
 </el-form-item> 
       <el-form-item label="节点数目" :label-width="formLabelWidth">
         <el-input v-model="form.name" autocomplete="off"></el-input>
       </el-form-item>
     </el-form>
     <div slot="footer" class="ERdialog-footer">
       <el-button @click="ERdialogFormVisible = false">醒醒</el-button>
       <el-button type="primary" @click="ERdialogFormVisible = false">睡</el-button>
     </div>
      </el-dialog>

  <el-tabs :tab-position='right' style="height: 200px;">
    <el-tab-pane label="演化属性">

        <div class="block1">
            <span class="demonstration"></span>
            <el-slider
              v-model="value2"
              :step="10"
              show-stops>
            </el-slider>
            <h4>速度</h4>
          </div>     
          <div class="block2">
            <el-slider
              v-model="value"
              show-input>
            </el-slider>
            <h4>大小</h4>
          </div> 
          <div class="block3">
            <span class="demonstration"></span>
            <el-color-picker v-model="color1"></el-color-picker>
            <h4>颜色</h4>
          </div>
        </el-tab-pane> 
    <el-tab-pane label="统计指标">
     balabala
    </el-tab-pane>
    <el-tab-pane label="数据可视化">
     <div id="container" ></div>
    </el-tab-pane>

  </el-tabs>

</div>
</template>

  <style>
      
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 350px;
    }
    .el-menu-vertical-demo {
      /* width: 200px; */
      min-height: 350px;
    } 
    div.block1{
      width:200px;
      margin-left:60px;
      margin-right:60px;
      height:100px;
      float: left;
      padding-top: 40px;
    }
    div.block2{
      width:400px;
      margin-left:60px;
      margin-right:60px;
      height:100px;
      float: left;
      padding-top: 40px;
    }
    div.block3{
/*       width:400px;
      margin-left:40px;
      margin-right:40px;
      height:100px; */
      margin-left:60px;
      margin-right:60px;
      float: left;
      padding-top: 40px;
    }
  </style>
  
  <script>
     import { Chart } from '@antv/g2';
    export default {
      data() {
        return {
          isCollapse: true,
          BAdialogFormVisible:false,
          WSdialogFormVisible:false,
          ERdialogFormVisible:false,
          dialogFormVisible:false,
          form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
          formLabelWidth: '120px',
          color1: '#409EFF'
         
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      },
    
    mounted() {
 const data1 = [
  { time: '10:10', call: 4, waiting: 2, people: 2 },
  { time: '10:15', call: 2, waiting: 6, people: 3 },
  { time: '10:20', call: 13, waiting: 2, people: 5 },
  { time: '10:25', call: 9, waiting: 9, people: 1 },
  { time: '10:30', call: 5, waiting: 2, people: 3 },
  { time: '10:35', call: 8, waiting: 2, people: 1 },
  { time: '10:40', call: 13, waiting: 1, people: 2 }
          ]
const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 200
});
chart.data(data1);
chart.scale({
  people: {
    min: 0,
    max: 10,
  },
  waiting: {
    min: 0,
    max: 10
  }
});
chart.legend({
  custom: true,
  items: [
    { value: 'waiting', name: 'waiting', marker: { symbol: 'square', style: { fill: '#3182bd', r: 5 } } },
    { value: 'people', name: 'people', marker: { symbol: 'hyphen', style: { stroke: '#fdae6b', r: 5, lineWidth: 3 } } }
  ],
});
chart.axis('people', {
  grid: null,
  title: {
    style: {
      fill: '#fdae6b'
    }
  },
  label: {
    style: {
      fill: '#fdae6b'
    }
  }
});
chart.axis('waiting', {
  title: {}
});
chart.tooltip({
  shared: true,
});
chart.interval()
  .position('time*waiting')
  .color('#3182bd');
chart.line()
  .position('time*people')
  .color('#fdae6b')
  .size(3)
  .shape('smooth');
chart.point()
  .position('time*people')
  .color('#fdae6b')
  .size(3)
  .shape('circle');

chart.interaction('active-region');
chart.removeInteraction('legend-filter'); // 自定义图例，移除默认的分类图例筛选交互
chart.render();
}
    }
  </script>