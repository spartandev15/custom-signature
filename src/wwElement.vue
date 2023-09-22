<template>
  <div class="ww-color-picker">
    <input type="color"  v-model="color"/>
   <wwElement v-bind="content.labelComponent" :ww-props="{text:color || ''}"/>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
    uid:{type:Object, required:true},
  },
  setup(props) {
    const { value, setValue } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: 'value',
            type: 'string',
            defaultValue: null
        });
        return {value,setValue}
  },
  computed: {
    color:{ 
      get(){
        return typeof this.value === 'string'? this.value:''
      },
      set(value){
this.setValue(value)
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.ww-color-picker {
display: flex;
align-items: center;
}
</style>
