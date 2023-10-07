<template>
  <el-tree-v2
    :data="data"
    :height="800"
    :props="props"
    show-checkbox
    :default-checked-keys="defaultCheckedKeys"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

interface Tree {
  id: string
  label: string
  children?: Tree[]
}

const getKey = (prefix: string, id: number) => {
  return `${prefix}-${id}`
}

const createData = (
  maxDeep: number,
  maxChildren: number,
  minNodesNumber: number,
  deep = 1,
  key = 'node'
): Tree[] => {
  let id = 0
  return Array.from({ length: minNodesNumber })
    .fill(deep)
    .map(() => {
      const childrenNumber =
        deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
      const nodeKey = getKey(key, ++id)
      return {
        id: nodeKey,
        label: nodeKey,
        children: childrenNumber
          ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
          : undefined,
      }
    })
}

const props = {
  value: 'id',
  label: 'label',
  children: 'children',
}
const data = createData(2, 10, 20)
const checkedKeys: string[] = []

for (const datum of data) {
  const children = datum.children
  if (children) {
    checkedKeys.push(children[0].id)
    break
  }
}

const defaultCheckedKeys = ref(checkedKeys)
</script>
