<template>
  <h2>TODO一覧</h2>
  <Suspense>
    <template #default>
      <AsyncTodos />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
  <router-link to="/new">新規作成</router-link>
</template>

<script lang="ts">
import { defineComponent, inject, ref, onErrorCaptured } from 'vue'
import { todoKey } from '@/store/todo'
import TodoItem from '@/components/TodoItem.vue'
import { useRouter } from 'vue-router'
import AsyncTodos from '@/components/AsyncTodos.vue'

export default defineComponent({
  components: {
    AsyncTodos
  },
  setup () {
    const error = ref<unknown>(null)

    onErrorCaptured((e) => {
      error.value = e
      return true
    })

    return {
      error
    }
  }
})
</script>
