export default {
  template: `
    <div>
      <div> {{name}} </div>
      <button @click="cli">点击</button>
    </div>
  `,
  data() {
    return {
      name: 'hello'
    }
  },
  methods: {
    cli() {
      alert('点击');
    }
  }
}