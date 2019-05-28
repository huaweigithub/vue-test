<template>
  <div class="hello">
    <p>FullName: {{fullname}}</p>
    <p>FirstName: <input type="text"
             v-model="firstname"></p>

    <div>
      <p>obj.a: {{obj.a}}</p>
      <p>obj.a: <input type="text"
               v-model="obj.a"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      fullname: '',
      firstname: 'xiaohua',
      lastname: 'chen',
      obj: {
        a: 123
      }
    }
  },
  // watch: {
  //   firstname(newName, oldName) {
  //     console.log('newName', newName)
  //     console.log('oldName', oldName)
  //     this.fullname = newName + ' ' + this.lastname
  //   }
  // },
  watch: {
    firstname: {
      handler(newName, oldName) {
        console.log('newName', newName)
        console.log('oldName', oldName)
        this.fullname = newName + ' ' + this.lastname
      },
      immediate: true
    },
    obj: {
      handler(newName, oldName) {
        console.log('newName.....', newName)
        console.log('oldName.....', oldName)
      },
      immediate: true,
      deep: true
    }
  },
}
</script>









