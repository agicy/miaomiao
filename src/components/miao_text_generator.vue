<template>
  <div>
    <h1><i class="fas fa-cat"></i> 喵喵文本转换器</h1>
    <div class="container">
      <textarea
        v-model="input"
        placeholder="之乎者喵"
        class="input-box"
      ></textarea>
      <div>
        <button @click="pick_input" class="pick-input-button">试试手气</button>
      </div>
      <div v-html="output" class="output-box"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { convert_text, get_random_input } from '../utils/miao_text_generator'

export default defineComponent({
  name: 'miao_text_generator',
  setup() {
    const init_sentence = get_random_input()
    const input = ref(init_sentence)
    const output = ref(convert_text(init_sentence))

    watch(input, newInput => {
      output.value = convert_text(newInput)
    })

    const pick_input = () => {
      input.value = get_random_input()
    }

    return { input, output, pick_input }
  },
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #3b82f6;
  height: 60px;
}

.container {
  display: flex;
  gap: 10px;
  justify-content: space-around;
  padding: 20px;
  background: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: calc(100vh - 60px);
  box-sizing: border-box;
}

.input-box {
  background-color: #ffebeb;
}

.output-box {
  background-color: #e6ffe6;
  white-space: pre-wrap;
  overflow: auto;
  padding: 15px;
  border: 2px solid #ccc;
  border-radius: 10px;
}

textarea:focus {
  border-color: #3b82f6;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

textarea,
.output-box {
  width: 45%;
  height: 100%;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  padding: 15px;
  border: 2px solid #ccc;
  border-radius: 10px;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  box-sizing: border-box;
}

.pick-input-button {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  height: 55px;
  width: 100%;
  max-width: 200px;
  margin-top: 20px;
}

.pick-input-button:hover {
  background-color: #1e40af;
  cursor: pointer;
}

.pick-input-button:active {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  background-color: #1e40af;
}
</style>
